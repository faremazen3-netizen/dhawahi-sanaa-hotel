import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { HotelLogo } from './HotelLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/90 pt-16 text-right relative overflow-hidden">
      {/* Top golden accent line */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Hotel Brand Info */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <HotelLogo size="md" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              وجهتكم المعتمدة للإقامة الفندقية الراقية في العاصمة صنعاء - مذبح. نقدم لكم أجنحة وغرفاً مؤثثة بأرقى درجات الفخامة مع كهرباء وإنترنت متواصل 24 ساعة وضيافة يمنية أصيلة.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أود الاستفسار عن تفاصيل الحجز.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center text-slate-400 transition-colors shadow-sm"
                aria-label="Phone"
              >
                <i className="fa-solid fa-phone text-sm"></i>
              </a>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center text-slate-400 transition-colors shadow-sm"
                aria-label="Google Maps"
              >
                <i className="fa-solid fa-map-location-dot text-sm"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-600 hover:text-blue-400 flex items-center justify-center text-slate-400 transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-base font-bold font-heading mb-4 pb-2 border-b border-slate-800 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-left text-[10px] text-amber-500"></i>
                  <span>الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-left text-[10px] text-amber-500"></i>
                  <span>عن الفندق والموقع</span>
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-left text-[10px] text-amber-500"></i>
                  <span>الغرف والأجنحة الفاخرة</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-left text-[10px] text-amber-500"></i>
                  <span>الخدمات والمميزات</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-left text-[10px] text-amber-500"></i>
                  <span>معرض الصور</span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-left text-[10px] text-amber-500"></i>
                  <span>آراء وتقييمات النزلاء</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-base font-bold font-heading mb-4 pb-2 border-b border-slate-800 inline-block">
              معلومات الاتصال المباشر
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-amber-400 text-sm mt-1 shrink-0"></i>
                <span className="text-slate-300 text-xs sm:text-sm">
                  {HOTEL_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-emerald-400 text-base shrink-0"></i>
                <a
                  href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أود الاستفسار عن الحجز.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-xs sm:text-sm font-semibold"
                  dir="ltr"
                >
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-amber-400 text-sm shrink-0"></i>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors text-xs sm:text-sm font-semibold"
                  dir="ltr"
                >
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-amber-400 text-sm shrink-0"></i>
                <span className="text-slate-300 text-xs sm:text-sm">
                  الاستقبال وخدمة الغرف متاحة 24 ساعة طوال أيام الأسبوع
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Hotel Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            جميع الحقوق محفوظة &copy; {currentYear} <strong className="text-white font-bold">فندق ضواحي صنعاء</strong>.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400">
              <i className="fa-solid fa-star"></i>
              تقييم {HOTEL_INFO.rating} / 5 (+{HOTEL_INFO.totalReviews} تقييم)
            </span>
            <span>•</span>
            <span>صنعاء - الجمهورية اليمنية</span>
          </div>
        </div>
      </div>

      {/* Developer Credits Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800/90 py-3.5 text-center px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs">
          <span className="text-slate-400 flex items-center gap-1.5">
            <i className="fa-solid fa-code text-amber-400"></i>
            <span>تصميم وتطوير الموقع:</span>
            <strong className="text-white font-bold">{HOTEL_INFO.developer.name}</strong>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">للتواصل:</span>
            <a
              href={HOTEL_INFO.developer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-lg transition-colors"
              title="تواصل عبر واتساب المطور"
            >
              <i className="fa-brands fa-whatsapp text-xs"></i>
              <span dir="ltr">{HOTEL_INFO.developer.phone}</span>
            </a>
            <a
              href={`tel:${HOTEL_INFO.developer.phoneFull}`}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold px-1.5 py-0.5 transition-colors"
              title="اتصال بالمطور"
            >
              <i className="fa-solid fa-phone text-[10px]"></i>
              <span>اتصال</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
