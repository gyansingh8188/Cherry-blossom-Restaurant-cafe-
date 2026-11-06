import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { AMBIENCE_GALLERY } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'interior' | 'food' | 'cafe' | 'celebrations'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredGallery = AMBIENCE_GALLERY.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFF9F4] border-t border-[#EAD5DC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A62] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Ambience &amp; Aesthetics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292326] tracking-tight mb-4">
            The Cherry Blossom Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Take a visual tour through our welcoming 1st-floor dining room, serene cafe corners,
            and beautifully plated culinary creations in Robertsganj.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'interior', label: 'Dining Hall' },
            { id: 'cafe', label: 'Cafe Corners' },
            { id: 'food', label: 'Food Presentation' },
            { id: 'celebrations', label: 'Celebrations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedFilter === tab.id
                  ? 'bg-[#651F35] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-[#EAD5DC] hover:border-[#651F35]/40 hover:text-[#651F35]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-xs border border-[#EAD5DC] cursor-pointer aspect-4/3 bg-slate-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#F3C7D2] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold leading-tight">{item.title}</h3>
                <p className="text-xs text-white/80 mt-1 line-clamp-2">{item.caption}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-[#F3C7D2] font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view large</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredGallery[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-[#292326]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={filteredGallery[activeLightboxIndex].imageUrl}
                alt={filteredGallery[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="text-center mt-4 text-white max-w-lg">
              <h3 className="font-serif text-xl font-bold text-[#F3C7D2]">
                {filteredGallery[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-white/80 mt-1">
                {filteredGallery[activeLightboxIndex].caption}
              </p>
              <span className="text-[11px] text-[#C49A62] mt-2 block font-medium">
                Image {activeLightboxIndex + 1} of {filteredGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
