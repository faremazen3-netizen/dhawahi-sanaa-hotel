import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { getRoomBookingWhatsAppUrl, getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenBookingModal: (roomType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  // Default booking bar state
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState(ROOMS_DATA[0].name);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = getRoomBookingWhatsAppUrl(selectedRoom, checkIn, checkOut, Number(guests));
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Background Image with dark overlay & subtle warm gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
          alt="فندق وأجنحة ضواحي صنعاء"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-105 transition-transform duration-10000 ease-out"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-slate-950/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
          {/* Welcome Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
            <span className="flex text-amber-400">
              <i className="fa-solid fa-star text-xs"></i>
              <i className="fa-solid fa-star text-xs"></i>
              <i className="fa-solid fa-star text-xs"></i>
              <i className="fa-solid fa-star text-xs"></i>
            </span>
            <span>مرحباً بكم في فندق ضواحي صنعاء</span>
            <span className="text-amber-500">•</span>
            <span className="text-slate-300">مذبح</span>
          </div>

          {/* Primary Big Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight sm:leading-snug mb-5 font-heading">
            أهلاً بكم في فندق ضواحي صنعاء <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mt-2">راحة وأناقة في قلب العاصمة</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            إقامة فندقية فاخرة تجمع بين الأصالة والخدمة العصرية. أجنحة ملكية وعائلية واسعة، غرف مريحة، كهرباء وإنترنت متواصل 24 ساعة، بموقع استراتيجي في مذبح أمام نادي الشعب.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              id="hero-whatsapp-cta"
              href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أرغب بحجز إقامة والاستفسار عن الغرف والأجنحة المتوفرة.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-900/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>احجز مباشرة عبر الواتساب</span>
            </a>

            <button
              id="hero-explore-rooms-cta"
              onClick={() => {
                const roomsEl = document.getElementById('rooms');
                roomsEl?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-amber-400 hover:text-amber-300 font-semibold text-base px-6 py-3.5 rounded-xl border border-amber-500/30 hover:border-amber-400 backdrop-blur-md transition-all duration-200"
            >
              <i className="fa-solid fa-bed"></i>
              <span>استكشف الغرف والأجنحة</span>
            </button>

            <a
              id="hero-call-cta"
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-slate-800/70 hover:bg-slate-700 text-slate-200 font-medium text-base px-4 py-3.5 rounded-xl border border-slate-700 transition-all duration-200"
              title="اتصال هاتفي"
            >
              <i className="fa-solid fa-phone text-amber-400"></i>
              <span dir="ltr">{HOTEL_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Quick Booking & Availability Search Bar */}
        <div className="max-w-5xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-slate-950/80">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs sm:text-sm text-slate-300">
            <span className="font-bold text-amber-400 flex items-center gap-2">
              <i className="fa-solid fa-calendar-days text-base"></i>
              <span>الاستعلام السريع وتأكيد التوافر</span>
            </span>
            <span className="text-emerald-400 flex items-center gap-1.5 text-xs">
              <i className="fa-solid fa-check-circle"></i>
              رد فوري ومباشر 24 ساعة
            </span>
          </div>

          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
            {/* Check-In */}
            <div className="space-y-1.5 text-right">
              <label htmlFor="hero-checkin" className="block text-xs font-semibold text-slate-300">
                <i className="fa-solid fa-calendar-check text-amber-400 ml-1"></i>
                تاريخ الوصول
              </label>
              <input
                id="hero-checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={today}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                required
              />
            </div>

            {/* Check-Out */}
            <div className="space-y-1.5 text-right">
              <label htmlFor="hero-checkout" className="block text-xs font-semibold text-slate-300">
                <i className="fa-solid fa-calendar-xmark text-amber-400 ml-1"></i>
                تاريخ المغادرة
              </label>
              <input
                id="hero-checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || today}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                required
              />
            </div>

            {/* Room Type */}
            <div className="space-y-1.5 text-right">
              <label htmlFor="hero-room-type" className="block text-xs font-semibold text-slate-300">
                <i className="fa-solid fa-door-open text-amber-400 ml-1"></i>
                نوع الغرفة / الجناح
              </label>
              <select
                id="hero-room-type"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                {ROOMS_DATA.map((room) => (
                  <option key={room.id} value={room.name} className="bg-slate-900 text-white">
                    {room.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests Count */}
            <div className="space-y-1.5 text-right">
              <label htmlFor="hero-guests" className="block text-xs font-semibold text-slate-300">
                <i className="fa-solid fa-users text-amber-400 ml-1"></i>
                عدد الأفراد
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="1" className="bg-slate-900">1 شخص (فردي)</option>
                <option value="2" className="bg-slate-900">2 أفراد (شخصين)</option>
                <option value="3" className="bg-slate-900">3 أفراد</option>
                <option value="4" className="bg-slate-900">4 أفراد (عائلة)</option>
                <option value="5" className="bg-slate-900">5+ أفراد (جناح كبير)</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                id="hero-submit-availability"
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm py-3 px-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>تحقق من التوافر</span>
                <i className="fa-solid fa-magnifying-glass group-hover:scale-110 transition-transform"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Quick Highlights / Trust Badges */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text-right overflow-hidden">
              <div className="text-xs font-bold text-white truncate">أمام نادي الشعب</div>
              <div className="text-[11px] text-slate-400 truncate">مذبح - صنعاء</div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div className="text-right overflow-hidden">
              <div className="text-xs font-bold text-white truncate">كهرباء وطاقة 24/7</div>
              <div className="text-[11px] text-slate-400 truncate">دون انقطاع</div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-wifi"></i>
            </div>
            <div className="text-right overflow-hidden">
              <div className="text-xs font-bold text-white truncate">واي فاي فائق السرعة</div>
              <div className="text-[11px] text-slate-400 truncate">مجاني للنزلاء</div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-shield-check"></i>
            </div>
            <div className="text-right overflow-hidden">
              <div className="text-xs font-bold text-white truncate">مواقف سيارات آمنة</div>
              <div className="text-[11px] text-slate-400 truncate">حراسة ومراقبة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
