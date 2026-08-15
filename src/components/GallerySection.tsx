import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'كافة الصور' },
    { id: 'suites', label: 'الأجنحة الملكية والعائلية' },
    { id: 'rooms', label: 'الغرف المفردة والمزدوجة' },
    { id: 'lobby', label: 'الاستقبال واللوبي' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-950 text-white relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
            <i className="fa-solid fa-camera text-amber-400"></i>
            <span>جولة بصرية</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4 font-heading">
            معرض صور فندق وأجنحة ضواحي صنعاء
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            شاهد صوراً حية وعصرية لمختلف مرافق الفندق، الأجنحة، الغرف، والبهو، للتعرف على رقي المكان وتجهيزاته قبل وصولك.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer bg-slate-900 h-64 border border-slate-800 hover:border-amber-500/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
                loading="lazy"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-right">
                <span className="text-[11px] text-amber-400 font-semibold mb-1">
                  {item.categoryLabel}
                </span>
                <h4 className="text-white text-base font-bold font-heading mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs line-clamp-1 mb-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                  <span>اضغط للتكبير</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 left-5 w-11 h-11 rounded-full bg-slate-800 text-white hover:text-amber-400 flex items-center justify-center border border-slate-700 z-20 text-lg"
            aria-label="إغلاق"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Prev / Next controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center border border-slate-700 z-20 text-lg transition-all"
            aria-label="السابق"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center border border-slate-700 z-20 text-lg transition-all"
            aria-label="التالي"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Image Container */}
          <div
            className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="p-6 text-right flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-semibold block mb-1">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  {selectedImage.description}
                </p>
              </div>
              <a
                href={`https://wa.me/967774760824?text=${encodeURIComponent(`مرحباً فندق ضواحي صنعاء، أود الاستفسار عن تفاصيل وحجز: ${selectedImage.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shrink-0"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>احجز هذا القسم</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
