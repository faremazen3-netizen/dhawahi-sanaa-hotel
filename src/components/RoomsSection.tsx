import React, { useState } from 'react';
import { Room } from '../types';
import { ROOMS_DATA } from '../data/hotelData';
import { getRoomBookingWhatsAppUrl } from '../utils/whatsapp';

interface RoomsSectionProps {
  onSelectRoomForBooking: (room: Room) => void;
  onOpenRoomDetails: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoomForBooking,
  onOpenRoomDetails,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'جميع الخيارات' },
    { id: 'suite', label: 'الأجنحة الملكية' },
    { id: 'family', label: 'الأجنحة العائلية' },
    { id: 'double', label: 'غرف دبل (مزدوجة)' },
    { id: 'single', label: 'غرف سنجل (مفردة)' },
  ];

  const filteredRooms = activeFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeFilter);

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
            <i className="fa-solid fa-bed"></i>
            <span>خيارات الإقامة المتاحة</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4 font-heading">
            الغرف والأجنحة الفندقية الفاخرة
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            مساحات واسعة مصممة بعناية فائقة لتضمن لكم أعلى درجات الراحة والهدوء، مع تكييف كامل، شاشات ذكية، وإنترنت فايبر مجاني.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredRooms.map((room) => {
            const whatsappBookingUrl = getRoomBookingWhatsAppUrl(room.name);

            return (
              <div
                key={room.id}
                id={`room-card-${room.id}`}
                className="bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Room Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30"></div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg ${room.tagColor || 'bg-amber-600 text-white'}`}>
                      {room.tag}
                    </span>
                  </div>

                  {/* Capacity & Size Badges */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs">
                    <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-slate-200 border border-slate-700 flex items-center gap-1.5">
                      <i className="fa-solid fa-users text-amber-400"></i>
                      {room.capacity}
                    </span>
                    <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-slate-200 border border-slate-700 flex items-center gap-1.5">
                      <i className="fa-solid fa-maximize text-amber-400"></i>
                      {room.size}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-right">
                  <div>
                    {/* Category & Bed type */}
                    <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                      <span>{room.categoryLabel}</span>
                      <span className="text-slate-400 font-normal">{room.bedType}</span>
                    </div>

                    {/* Room Name */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading group-hover:text-amber-400 transition-colors">
                      {room.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
                      {room.description}
                    </p>

                    {/* Amenities Icons Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 pt-4 border-t border-slate-700/60">
                      {room.amenities.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-slate-900/60 px-2.5 py-2 rounded-xl text-xs text-slate-300 border border-slate-800"
                        >
                          <i className={`fa-solid ${item.icon} text-amber-400 text-sm`}></i>
                          <span className="truncate">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="pt-4 border-t border-slate-700/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Price Section */}
                      <div>
                        <span className="text-[11px] text-slate-400 block mb-0.5">سعر الليلة يبدأ من</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">
                            {room.pricePerNight.toLocaleString('ar-YE')}
                          </span>
                          <span className="text-xs text-slate-300 font-medium">{room.currency}</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onOpenRoomDetails(room)}
                          className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold transition-colors"
                          title="عرض التفاصيل"
                        >
                          التفاصيل
                        </button>

                        <a
                          id={`book-whatsapp-${room.id}`}
                          href={whatsappBookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all duration-200"
                        >
                          <i className="fa-brands fa-whatsapp text-base"></i>
                          <span>احجز عبر الواتساب</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote about prices & discounts */}
        <div className="mt-12 p-4 bg-slate-800/60 border border-slate-700/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 text-right">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-tag text-amber-400 text-lg"></i>
            <span>تتوفر خصومات خاصة للإقامات الطويلة والمجموعات والشركات. تواصل معنا للاستفسار.</span>
          </div>
          <a
            href={getRoomBookingWhatsAppUrl('استفسار عن خصم إقامة طويلة')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-bold underline shrink-0"
          >
            طلب عرض سعر خاص
          </a>
        </div>
      </div>
    </section>
  );
};
