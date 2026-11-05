// Romantic Ambient Audio Engine with Web Audio Synthesizer fallback for "O Sanam" acoustic lofi vibes
class RomanticAudioEngine {
  private audioCtx: AudioContext | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying = false;
  private volume = 0.65;
  private isMuted = false;
  private timerId: any = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();
  private localAudioFailed = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    try {
      this.audioElement = new Audio('/music/background.mp3');
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;

      this.audioElement.addEventListener('error', () => {
        // Fallback smoothly to Web Audio synth if MP3 not found
        this.localAudioFailed = true;
      });
    } catch {
      this.localAudioFailed = true;
    }
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.add(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public async togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      await this.play();
    }
  }

  public async play() {
    if (this.isPlaying) return;

    // Try playing MP3 first if not known to have failed
    if (this.audioElement && !this.localAudioFailed) {
      try {
        await this.audioElement.play();
        this.isPlaying = true;
        this.notify();
        return;
      } catch {
        this.localAudioFailed = true;
      }
    }

    // Fallback: Start Romantic Web Audio Synth
    this.startSynth();
    this.isPlaying = true;
    this.notify();
  }

  public pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopSynth();
    this.isPlaying = false;
    this.notify();
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume * 0.18, this.audioCtx.currentTime);
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    this.setVolume(this.volume);
  }

  // Romantic acoustic chord progression inspired by classic romantic lofi (D - Bm - G - A)
  private startSynth() {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume * 0.18, this.audioCtx.currentTime);

      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);

      // Acoustic note sequence: Soft plucks & arpeggios
      // Frequencies for Dmaj (D4, F#4, A4), Bm (B3, D4, F#4), Gmaj (G3, B3, D4), A (A3, C#4, E4)
      const chordNotes = [
        [293.66, 369.99, 440.0, 587.33], // D major
        [246.94, 293.66, 369.99, 493.88], // B minor
        [196.0, 246.94, 293.66, 392.0],  // G major
        [220.0, 277.18, 329.63, 440.0]   // A major
      ];

      let chordIdx = 0;
      let noteStep = 0;

      const playNextNote = () => {
        if (!this.isPlaying || !this.audioCtx || !this.masterGain) return;

        const currentChord = chordNotes[chordIdx];
        const freq = currentChord[noteStep % currentChord.length];

        this.triggerPluck(freq);

        noteStep++;
        if (noteStep >= 8) {
          noteStep = 0;
          chordIdx = (chordIdx + 1) % chordNotes.length;
        }

        const delay = noteStep % 2 === 0 ? 380 : 420;
        this.timerId = setTimeout(playNextNote, delay);
      };

      playNextNote();
    } catch (e) {
      console.warn('Web Audio playback error:', e);
    }
  }

  private triggerPluck(freq: number) {
    if (!this.audioCtx || !this.masterGain) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const noteGain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    // Triangle / warm sine mixture for acoustic kalimba/guitar warmth
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    // Warm Lowpass Filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 1.2);

    // Envelope: Quick attack, soft warm decay
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.4, now + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.65);
  }

  private stopSynth() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }
}

export const romanticAudio = new RomanticAudioEngine();
