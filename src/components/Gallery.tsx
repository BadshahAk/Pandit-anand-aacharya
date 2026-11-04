import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = SITE_CONFIG.gallery.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-[#FFF9ED] border-b border-[#D6AD55]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#E58A16] font-bold block mb-1">
            {t('पावन धार्मिक छायाचित्र दीर्घा', 'Sacred Visual Gallery')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-devanagari text-[#350A16] mb-3">
            {t('मंदिर, यज्ञ एवं वैदिक अनुष्ठान दीर्घा', 'Temple, Yajna & Ritual Gallery')}
          </h2>
          <p className="text-sm text-stone-600">
            {t(
              'सनातन धर्म के विभिन्न पावन उत्सवों, हवन-यज्ञ एवं देव दर्शन के पवित्र क्षण।',
              'Capturing the sacred moments of Vedic ceremonies, yajnas, and temple darshans.'
            )}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent mx-auto mt-4" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('सभी छायाचित्र (All)', 'All Photographs')}
          </button>

          <button
            onClick={() => setActiveCategory('temple')}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeCategory === 'temple'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('मंदिर दर्शन', 'Temple & Deities')}
          </button>

          <button
            onClick={() => setActiveCategory('puja')}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeCategory === 'puja'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('पूजा एवं स्वरूप', 'Puja & Portrait')}
          </button>

          <button
            onClick={() => setActiveCategory('havan')}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeCategory === 'havan'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('हवन एवं यज्ञ', 'Havan & Yajna')}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-[#D6AD55]/50 shadow-md hover:shadow-2xl transition-all duration-300 bg-[#350A16] cursor-pointer"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.titleHi}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#24060D]/90 via-[#24060D]/40 to-transparent opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold text-[#D6AD55] tracking-wider uppercase mb-1">
                  {t(item.categoryLabelHi, item.categoryLabelEn)}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-devanagari text-[#FFF9ED] mb-1">
                  {t(item.titleHi, item.titleEn)}
                </h3>
                <p className="text-xs text-stone-200 line-clamp-2 mb-3">
                  {t(item.descriptionHi, item.descriptionEn)}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#D6AD55] font-bold">
                  <ZoomIn className="w-4 h-4" />
                  <span>{t('बड़ा दृश्य देखें', 'Click to enlarge')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#24060D] rounded-2xl overflow-hidden border border-[#D6AD55]/60 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImage.imageSrc}
                alt={selectedImage.titleHi}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-gradient-to-b from-[#350A16] to-[#24060D]">
              <span className="text-xs font-bold text-[#D6AD55] uppercase tracking-wider block mb-1">
                {t(selectedImage.categoryLabelHi, selectedImage.categoryLabelEn)}
              </span>
              <h3 className="text-xl font-bold font-devanagari text-[#FFF9ED] mb-2">
                {t(selectedImage.titleHi, selectedImage.titleEn)}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {t(selectedImage.descriptionHi, selectedImage.descriptionEn)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
