import React from 'react';
import { SERVICES_DATA } from '../data/hotelData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
            <i className="fa-solid fa-sparkles text-amber-400"></i>
            <span>خدمات ومرافق راقية</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4 font-heading">
            كل ما تحتاجه لإقامة هانئة ومريحة
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            نحرص على تقديم خدمات فندقية متكاملة تلبي تطلعات المسافرين والعائلات وتمنحكم تجربة إقامة استثنائية في صنعاء.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-right group hover:-translate-y-1 backdrop-blur-sm"
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center text-2xl transition-all duration-300 shadow-sm">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 text-amber-300 border border-slate-700 text-[11px] font-semibold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="w-8 h-1 bg-amber-500/30 group-hover:w-full group-hover:bg-amber-500 transition-all duration-300 rounded-full mt-5"></div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: 24/7 Hospitality */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-amber-500/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-right">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold mb-2">
                <i className="fa-solid fa-crown"></i>
                <span>ضمان الجودة والراحة</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-3 font-heading text-white">
                هل لديك متطلبات خاصة لإقامتك أو وصولك في وقت متأخر؟
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                فريق الاستقبال متواجد 24 ساعة لاستقبالكم وتقديم كافة التسهيلات، سواء للوصول المتأخر، التجهيزات العائلية الخاصة، أو خدمات النقل والتنقل داخل صنعاء.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/967774760824?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D9%86%D8%AF%D9%82%20%D8%B6%D9%88%D8%A7%D8%AD%D9%8A%20%D8%B5%D9%86%D8%B9%D8%A7%D8%A1%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AE%D8%A7%D8%B5%20%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-transform hover:scale-105 text-sm"
              >
                <i className="fa-brands fa-whatsapp text-lg text-slate-950"></i>
                <span>تحدث مع موظف الاستقبال الآن</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
