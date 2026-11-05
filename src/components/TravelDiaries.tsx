import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, Compass, Globe, Heart } from 'lucide-react';
import { TRAVEL_DESTINATIONS } from '../config/siteData';

export const TravelDiaries: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'visited' | 'dream'>('all');

  const filteredPlaces = TRAVEL_DESTINATIONS.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section
      id="travel"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF8F6] to-[#FFF5F7] dark:from-[#170B12] dark:via-[#1B0E16] dark:to-[#190C14]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-rose-500 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Wanderlust & Spiritual Footprints</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            Somewhere Between Dreams and Destinations 🌍
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            Sacred places I carry in my soul, and faraway dreamscapes waiting for me.
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Destinations 🗺️' },
              { id: 'visited', label: 'Sacred & Explored 🪔' },
              { id: 'dream', label: 'Dream Destinations ✨' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                    : 'bg-white/80 dark:bg-white/5 text-[#5C3847] dark:text-[#E2CAD4] border border-pink-200/60 dark:border-pink-900/40 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Travel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPlaces.map((dest, idx) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#23121E] border border-pink-200/60 dark:border-pink-900/40 shadow-lg shadow-rose-950/5 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-md shadow-xs ${
                        dest.type === 'visited'
                          ? 'bg-amber-500/90 text-white'
                          : 'bg-rose-500/90 text-white'
                      }`}
                    >
                      {dest.type === 'visited' ? 'Sacred / Explored' : 'Future Dream'}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Location badge on image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-300" />
                    <span>{dest.country}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-2">
                    {dest.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A2D3A] dark:text-[#D9BED0] leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  <div className="pt-3 border-t border-pink-100 dark:border-pink-900/30 flex items-center gap-2 text-xs font-medium text-rose-600 dark:text-rose-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span className="italic">{dest.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
