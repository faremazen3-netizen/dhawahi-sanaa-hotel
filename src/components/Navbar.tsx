import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { HotelLogo } from './HotelLogo';

interface NavbarProps {
  onOpenBookingModal: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'عن الفندق', href: '#about' },
    { label: 'الغرف والأجنحة', href: '#rooms' },
    { label: 'الخدمات والمرافق', href: '#services' },
    { label: 'معرض الصور', href: '#gallery' },
    { label: 'التقييمات', href: '#reviews' },
    { label: 'الموقع والاتصال', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-amber-500/30 py-2.5'
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-transparent py-4'
      }`}
    >
      {/* Top micro bar on larger screens when not scrolled */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-slate-800/80 pb-2.5 mb-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-amber-400"></i>
                صنعاء - مذبح - أمام نادي الشعب
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-bolt text-amber-400"></i>
                كهرباء وإنترنت 24/7 متواصل
              </span>
              <span className="flex items-center gap-2 text-amber-300">
                <i className="fa-solid fa-star text-amber-400"></i>
                تقييم {HOTEL_INFO.rating} / 5 ({HOTEL_INFO.totalReviews}+ تقييم)
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                title="اتصال مباشر"
              >
                <i className="fa-solid fa-phone text-amber-400 text-xs"></i>
                <span dir="ltr">{HOTEL_INFO.phoneDisplay}</span>
              </a>
              <span className="text-slate-700">|</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                الاستقبال متاح الآن 24 ساعة
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Hotel Brand / SVG Logo */}
          <a href="#hero" className="flex items-center group text-right">
            <HotelLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/80 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-btn"
              href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أود الاستفسار عن حجز غرفة/جناح وتفاصيل الإقامة.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-emerald-600/30 transition-all duration-200 group"
            >
              <i className="fa-brands fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
              <span>احجز عبر الواتساب</span>
            </a>

            <button
              id="nav-quick-book-btn"
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-xl shadow-md shadow-amber-500/20 transition-all duration-200"
            >
              <i className="fa-solid fa-calendar-check text-slate-950"></i>
              <span>استعلام سريع</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أود الاستفسار عن حجز غرفة/جناح.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow"
              aria-label="واتساب"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-900 text-slate-200 hover:text-white flex items-center justify-center border border-slate-800 focus:outline-none"
              aria-label="فتح القائمة"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown"
            className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl rounded-2xl px-4 shadow-2xl border border-amber-500/30"
          >
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <i className="fa-solid fa-chevron-left text-xs text-slate-600"></i>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <a
                href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أود الاستفسار عن حجز غرفة/جناح.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>واتساب</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold py-2.5 px-3 rounded-xl text-center shadow-sm"
              >
                <i className="fa-solid fa-calendar-check text-sm"></i>
                <span>استعلام سريع</span>
              </button>
            </div>

            <div className="mt-3 text-center text-xs text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-amber-400"></i>
              <span>اتصال مباشر: </span>
              <a href={`tel:${HOTEL_INFO.phone}`} className="text-amber-300 font-semibold" dir="ltr">
                {HOTEL_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
