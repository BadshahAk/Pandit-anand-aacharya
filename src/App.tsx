import React, { useState, useEffect } from 'react';
import { OpeningExperience } from './components/OpeningExperience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { PersonalityCards } from './components/PersonalityCards';
import { MyDreams } from './components/MyDreams';
import { MyJourney } from './components/MyJourney';
import { LoveAndFeelings } from './components/LoveAndFeelings';
import { FavouriteThings } from './components/FavouriteThings';
import { TravelDiaries } from './components/TravelDiaries';
import { PhotoGallery } from './components/PhotoGallery';
import { SpecialMessagesSurprises } from './components/SpecialMessagesSurprises';
import { MyLittleWish } from './components/MyLittleWish';
import { LoveGamesLounge } from './components/LoveGamesLounge';
import { ContactMe } from './components/ContactMe';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { Footer } from './components/Footer';
import { romanticAudio } from './utils/romanticAudio';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if user has entered before in session
    return sessionStorage.getItem('anand_entered_world') !== 'true';
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('anand_theme') === 'dark';
  });

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Sync dark class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('anand_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('anand_theme', 'light');
    }
  }, [darkMode]);

  // Subscribe to audio engine changes
  useEffect(() => {
    const unsub = romanticAudio.subscribe((playing) => {
      setIsPlayingMusic(playing);
    });
    return unsub;
  }, []);

  const handleEnterWorld = () => {
    setShowIntro(false);
    sessionStorage.setItem('anand_entered_world', 'true');
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMusic = () => {
    romanticAudio.togglePlay();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F6] dark:bg-[#160B12] text-[#2D1B22] dark:text-[#FBEBF0] selection:bg-rose-300/40 selection:text-rose-900 transition-colors duration-300">
      
      {/* 2. Opening Experience Welcome Screen */}
      <OpeningExperience isOpen={showIntro} onEnter={handleEnterWorld} />

      {/* 16. Navigation Header & Controls */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onReplayIntro={handleReplayIntro}
        isPlayingMusic={isPlayingMusic}
        toggleMusic={handleToggleMusic}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. About Me */}
        <AboutMe />

        {/* 5. My Personality */}
        <PersonalityCards />

        {/* 6. My Dreams */}
        <MyDreams />

        {/* 7. My Journey */}
        <MyJourney />

        {/* 8. Love & Feelings */}
        <LoveAndFeelings />

        {/* 9. My Favourite Things */}
        <FavouriteThings />

        {/* 10. Travel Diaries */}
        <TravelDiaries />

        {/* 11. Personal Photo Gallery */}
        <PhotoGallery />

        {/* 12. Special Messages — Hidden Surprises */}
        <SpecialMessagesSurprises />

        {/* 13. My Little Wish */}
        <MyLittleWish />

        {/* Extra Feature: Love Lounge & Multiplayer Room Games */}
        <LoveGamesLounge />

        {/* 14. Contact Me */}
        <ContactMe />
      </main>

      {/* 17. Footer */}
      <Footer />

      {/* 15. Floating Music Player */}
      <FloatingMusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={handleToggleMusic}
      />
    </div>
  );
}
