import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { GALLERY_PHOTOS } from '../config/siteData';

export const PhotoGallery: React.FC = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Portrait', 'Spiritual', 'Memories', 'Vibes'];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (selectedCategory === 'All') return true;
    return photo.category === selectedCategory;
  });

  const handleNext = () => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((activePhotoIdx + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((activePhotoIdx - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFB] to-[#FFF0F4] dark:from-[#190C14] dark:via-[#1D0F18] dark:to-[#170B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-950/70 border border-pink-200 dark:border-pink-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Captured Moments & Memories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            Moments in Starlight
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            Snapshots of grace, dedication, and everyday magic.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                    : 'bg-white/80 dark:bg-white/5 text-[#5C3847] dark:text-[#E2CAD4] border border-pink-200/60 dark:border-pink-900/40 hover:bg-rose-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setActivePhotoIdx(idx)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-[#23121E] border border-pink-200/60 dark:border-pink-900/40 shadow-md shadow-rose-950/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-pink-50 dark:bg-pink-950/20">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Hover Gradient Overlay with Captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                      {photo.category}
                    </span>
                    <Maximize2 className="w-4 h-4 text-white/80" />
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Viewer */}
        <AnimatePresence>
          {activePhotoIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIdx(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIdx(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image in Lightbox */}
              <motion.div
                initial={{ scale: 0.94 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.94 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-black/40"
              >
                <img
                  src={filteredPhotos[activePhotoIdx].src}
                  alt={filteredPhotos[activePhotoIdx].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />

                <div className="mt-4 text-center text-white px-4">
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mb-1">
                    {filteredPhotos[activePhotoIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto">
                    {filteredPhotos[activePhotoIdx].caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
