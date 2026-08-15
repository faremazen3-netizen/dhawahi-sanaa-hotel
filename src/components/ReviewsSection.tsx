import React from 'react';
import { HOTEL_INFO, REVIEWS_DATA, FAQ_DATA } from '../data/hotelData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ratings Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
              <i className="fa-solid fa-star text-amber-400"></i>
              <span>آراء وتقييمات النزلاء</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4 font-heading">
              ثقة نعتز بها وضيافة نفخر بتقديمها
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              يسعدنا في فندق ضواحي صنعاء استقبال مئات النزلاء شهرياً، ونسعى دوماً للارتقاء بخدماتنا لتظل إقامتكم في صنعاء تجربة مريحة وممتعة لا تُنسى.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("مرحباً فندق ضواحي صنعاء، أود مشاركة تقييمي وتجربتي في الفندق.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
              >
                <i className="fa-solid fa-pen-to-square"></i>
                <span>أضف تقييمك لتجربتك</span>
              </a>

              <a
                href="https://maps.google.com/?q=صنعاء+مذبح+نادي+الشعب"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
              >
                <i className="fa-brands fa-google text-amber-400"></i>
                <span>عرض تقييمات خرائط جوجل</span>
              </a>
            </div>
          </div>

          {/* Rating Summary Box */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-700">
                <div className="flex items-center gap-4 text-right">
                  <div className="text-5xl font-black text-amber-400 font-heading">
                    {HOTEL_INFO.rating}
                  </div>
                  <div>
                    <div className="flex text-amber-400 text-base gap-1 mb-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="text-sm font-bold text-white">
                      تقييم جيد جداً
                    </div>
                    <div className="text-xs text-slate-400">
                      بناءً على أكثر من {HOTEL_INFO.totalReviews} تقييم موثق
                    </div>
                  </div>
                </div>

                <div className="text-center sm:text-left bg-slate-900/80 px-4 py-3 rounded-2xl border border-slate-700">
                  <div className="text-xs text-slate-400">معدل رضا النزلاء</div>
                  <div className="text-xl font-bold text-emerald-400 font-heading mt-0.5">88%</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-6 space-y-3.5 text-xs text-slate-300">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>موقع الفندق والوصول (مذبح - نادي الشعب)</span>
                    <span className="text-amber-400 font-bold">4.6 / 5</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>استمرار الكهرباء والإنترنت 24 ساعة</span>
                    <span className="text-amber-400 font-bold">4.5 / 5</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>تعامل موظفي الاستقبال والخدمة</span>
                    <span className="text-amber-400 font-bold">4.4 / 5</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>القيمة وسعر الغرف مقابل الخدمة</span>
                    <span className="text-amber-400 font-bold">4.3 / 5</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-500/40 transition-all flex flex-col justify-between text-right"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-xs gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i < rev.rating ? 'text-amber-400' : 'text-slate-600'}`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{rev.author}</div>
                  <div className="text-[11px] text-amber-400/90">{rev.stayType}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-3xl font-bold font-heading text-white mb-2">
              الأسئلة الشائعة حول الإقامة والحجز
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              إجابات على أهم الاستفسارات التي تهم نزلاء فندق وأجنحة ضواحي صنعاء
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-800/70 rounded-2xl border border-slate-700/80 p-5 open:bg-slate-800 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-white text-right gap-4">
                  <span className="flex items-center gap-2.5">
                    <i className="fa-solid fa-circle-question text-amber-400 text-sm"></i>
                    {faq.q}
                  </span>
                  <i className="fa-solid fa-chevron-down text-xs text-amber-400 group-open:rotate-180 transition-transform duration-300 shrink-0"></i>
                </summary>
                <div className="mt-4 pt-3 border-t border-slate-700/60 text-slate-300 text-xs sm:text-sm leading-relaxed text-right">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
