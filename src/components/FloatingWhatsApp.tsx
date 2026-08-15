import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Quick Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs py-2.5 px-4 rounded-2xl shadow-2xl border border-emerald-500/40 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>خدمة الاستقبال متاحة الآن عبر الواتساب</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white mr-1"
            aria-label="إغلاق التنبيه"
          >
            <i className="fa-solid fa-xmark text-xs"></i>
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl("مرحباً فندق وأجنحة ضواحي صنعاء، أود الاستفسار عن حجز فندقي والتوافر حالياً.")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/20"
        aria-label="تواصل عبر الواتساب"
      >
        <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl"></i>
        
        {/* Pulse ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
