import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Music, Heart, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/romanticAudio';
import { SITE_BRAND } from '../config/siteData';

interface Props {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const FloatingMusicPlayer: React.FC<Props> = ({ isPlaying, onTogglePlay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    romanticAudio.setVolume(val);
    if (isMuted && val > 0) {
      setIsMuted(false);
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    romanticAudio.toggleMute();
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="rounded-3xl p-3 sm:p-3.5 bg-white/90 dark:bg-[#1E0E18]/90 backdrop-blur-xl border border-pink-200/80 dark:border-pink-900/60 shadow-xl shadow-rose-950/15"
      >
        <div className="flex items-center gap-3">
          
          {/* Animated Vinyl / Heart Disc */}
          <div
            onClick={onTogglePlay}
            className={`relative w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-tr from-rose-500 to-amber-400 text-white shadow-md cursor-pointer ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '6s' }}
          >
            <Music className="w-5 h-5" />
            <span className="absolute inset-1 rounded-full border border-white/30 pointer-events-none" />
          </div>

          {/* Track Info & Equalizer */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="cursor-pointer select-none pr-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2B1720] dark:text-[#FFF0F4] tracking-wide">
                {SITE_BRAND.musicTrack.title}
              </span>
              
              {/* Equalizer Bars */}
              <div className="flex items-end gap-0.5 h-3">
                {[
                  { delay: '0ms', h: isPlaying ? '12px' : '3px' },
                  { delay: '150ms', h: isPlaying ? '14px' : '4px' },
                  { delay: '300ms', h: isPlaying ? '8px' : '3px' },
                  { delay: '450ms', h: isPlaying ? '13px' : '5px' }
                ].map((bar, i) => (
                  <span
                    key={i}
                    className="w-0.5 bg-rose-500 rounded-full transition-all duration-300"
                    style={{
                      height: bar.h,
                      animation: isPlaying ? 'pulse 0.7s infinite alternate' : 'none',
                      animationDelay: bar.delay
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="text-[10px] text-[#7C495E] dark:text-[#C79EB1]">
              {SITE_BRAND.musicTrack.artist} • Romantic Vibe
            </p>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={onTogglePlay}
            className="p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors shadow-xs cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
          </button>

          {/* Expand/Collapse Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors cursor-pointer"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Controls Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pt-3 mt-3 border-t border-pink-100 dark:border-pink-900/40 space-y-3"
            >
              {/* Volume Slider */}
              <div className="flex items-center gap-2 px-1">
                <button
                  onClick={handleToggleMute}
                  className="text-stone-500 dark:text-stone-300 hover:text-rose-500"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-pink-200 dark:bg-pink-900 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <span className="text-[10px] font-mono text-stone-500">
                  {Math.round((isMuted ? 0 : volume) * 100)}%
                </span>
              </div>

              {/* Romantic Note */}
              <div className="p-2.5 rounded-xl bg-pink-50/60 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/40 text-[11px] text-[#4A2D3A] dark:text-[#E2CAD4]">
                <p className="font-script text-xs text-rose-600 dark:text-rose-300 mb-0.5">
                  "O Sanam tere bina main adhura..."
                </p>
                <p className="text-[10px] text-stone-500 dark:text-stone-400">
                  Acoustic harmony synthesizer with local file fallback.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
