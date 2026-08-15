import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Stats */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/20 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
                  alt="مبنى وضيافة فندق وأجنحة ضواحي صنعاء"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 brightness-95"
                />
              </div>

              {/* Floating Stat Card: Rating */}
              <div className="absolute -bottom-6 right-6 sm:right-10 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-amber-500/40 max-w-xs backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md shadow-amber-500/20">
                    {HOTEL_INFO.rating}
                  </div>
                  <div>
                    <div className="flex text-amber-400 text-xs gap-1 mb-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="text-xs font-semibold text-slate-100">
                      تقييم متميز للنزلاء
                    </div>
                    <div className="text-[11px] text-slate-400">
                      أكثر من {HOTEL_INFO.totalReviews} تقييم حقيقي
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg items-center gap-2 text-xs border border-amber-300/40">
                <i className="fa-solid fa-medal text-sm text-slate-950"></i>
                <span>ضيافة يمنية أصيلة</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-right">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
              <i className="fa-solid fa-hotel text-amber-400"></i>
              <span>نبذة عن الفندق</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-6 font-heading">
              وجهتكم الأولى للراحة والهدوء في <span className="text-amber-400">صنعاء - مذبح</span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">
              يعد <strong className="text-white font-bold">فندق ضواحي صنعاء</strong> أحد أبرز الوجهات الفندقية المتميزة في العاصمة صنعاء، حيث يقع في قلب منطقة <strong className="text-amber-300">مذبح أمام نادي الشعب</strong> مباشرة وبجوار <strong className="text-amber-300">مدرسة الأمة الرائدة</strong>، ليقدم لنزلائه تجربة إقامة متكاملة تجمع بين الفخامة والخصوصية والراحة التامة.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8 text-base">
              سواء كنت قادماً إلى صنعاء لرحلة عمل، أو زيارة عائلية، أو علاجية؛ فإننا نوفر لك أجنحة واسعة وغرفاً عصرية مفروشة بأحدث الأثاث الفندقي ومزودة بكافة وسائل الراحة العصرية مع طاقة كهربائية وإنترنت متواصلين 24 ساعة دون أي انقطاع.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/20">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">موقع استراتيجي وسهل</h4>
                  <p className="text-xs text-slate-400 mt-0.5">قريب من الشوارع الرئيسية، الجامعات والمستشفيات</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/20">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">كهرباء وطاقة 24 ساعة</h4>
                  <p className="text-xs text-slate-400 mt-0.5">مولدات ومنظومة طاقة شمسية مستمرة</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/20">
                  <i className="fa-solid fa-broom"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">نظافة وتعقيم مستمر</h4>
                  <p className="text-xs text-slate-400 mt-0.5">مفارش فندقية معقمة وغرف مهيأة يومياً</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/20">
                  <i className="fa-solid fa-square-parking"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">مواقف سيارات محروسة</h4>
                  <p className="text-xs text-slate-400 mt-0.5">مواقف خاصة بالنزلاء مع كاميرات مراقبة</p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="flex items-center gap-4">
              <a
                href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أود الاستفسار عن تفاصيل الحجز لديكم.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all text-sm"
              >
                <i className="fa-brands fa-whatsapp text-slate-950 text-base"></i>
                <span>تواصل معنا فوراً</span>
              </a>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="text-slate-300 hover:text-amber-400 font-semibold text-sm flex items-center gap-2 transition-colors"
              >
                <i className="fa-solid fa-phone text-amber-400"></i>
                <span dir="ltr">{HOTEL_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
