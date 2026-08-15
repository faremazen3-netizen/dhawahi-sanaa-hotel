import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { getContactFormWhatsAppUrl, getWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'استفسار عن حجز غرفة/جناح',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatusMessage('يرجى كتابة الاسم ورقم الهاتف للمتابعة.');
      return;
    }

    const waUrl = getContactFormWhatsAppUrl(
      formData.name,
      formData.phone,
      formData.subject,
      formData.message || 'أرجو التكرم بالتواصل معي بخصوص الاستفسار.'
    );

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage('تم فتح محادثة الواتساب لإرسال استفسارك مباشرة!');
    setTimeout(() => setStatusMessage(null), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900 text-white relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
            <i className="fa-solid fa-map-location-dot text-amber-400"></i>
            <span>الموقع ووسائل الاتصال</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4 font-heading">
            تفضل بزيارتنا أو تواصل معنا مباشرة
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            فريق فندق ضواحي صنعاء على أتم الاستعداد للإجابة على كافة استفساراتكم وتأكيد حجوزاتكم على مدار 24 ساعة.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Phone & WhatsApp */}
          <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-xl hover:border-amber-500/40 transition-all text-right flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xl mb-4 shadow-sm">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 font-heading">
                الهاتف والواتساب
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                حجز فوري، استفسارات الأسعار، وخدمة العملاء 24/7
              </p>
              <div className="space-y-1.5">
                <div className="text-sm font-bold text-amber-400" dir="ltr">
                  {HOTEL_INFO.phoneDisplay}
                </div>
                <div className="text-xs text-emerald-400 font-semibold">
                  متاح عبر الواتساب والمكالمات
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>محادثة واتساب</span>
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs py-2.5 px-3 rounded-xl text-center"
                title="اتصال هاتفي"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

          {/* Card 2: Hotel Address */}
          <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-xl hover:border-amber-500/40 transition-all text-right flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl mb-4 shadow-sm">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 font-heading">
                عنوان وموقع الفندق
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                موقع استراتيجي وسهل الوصول في صنعاء
              </p>
              <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                {HOTEL_INFO.address}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5"
              >
                <i className={`fa-solid ${copied ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
                <span>{copied ? 'تم نسخ العنوان!' : 'نسخ العنوان'}</span>
              </button>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-bold text-xs py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5"
              >
                <i className="fa-solid fa-map-location-dot"></i>
                <span>الخريطة</span>
              </a>
            </div>
          </div>

          {/* Card 3: Working Hours & Check-in */}
          <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-xl hover:border-amber-500/40 transition-all text-right flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl mb-4 shadow-sm">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 font-heading">
                أوقات العمل والاستقبال
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                خدمة متواصلة لكافة النزلاء والضيوف
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1 border-b border-slate-700/60">
                  <span className="font-semibold text-slate-200">الاستقبال والخدمة:</span>
                  <span className="text-emerald-400 font-bold">24 ساعة / 7 أيام</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-700/60">
                  <span className="font-semibold text-slate-200">تسجيل الدخول:</span>
                  <span>من 12:00 ظهراً</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-slate-200">تسجيل المغادرة:</span>
                  <span>حتى 12:00 ظهراً</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60">
              <div className="text-xs text-center text-slate-400 font-medium">
                تتوفر مواقف سيارات خاصة ومجانية
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Google Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-6 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl text-right">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
              أرسل استفسارك أو طلب الحجز
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              املأ النموذج أدناه وسيتم تحويل رسالتك مباشرة إلى فريق الاستقبال عبر الواتساب للرد الفوري.
            </p>

            {statusMessage && (
              <div className="mb-4 p-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-emerald-400"></i>
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300 mb-1.5">
                  الاسم الكامل <span className="text-amber-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="مثال: أحمد محمد"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-slate-900 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-300 mb-1.5">
                  رقم الهاتف أو الواتساب <span className="text-amber-400">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="مثال: 774760824 أو 967..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-slate-900 transition-colors text-right"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-300 mb-1.5">
                  نوع الاستفسار
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 focus:bg-slate-900 transition-colors"
                >
                  <option value="استفسار عن حجز جناح ملكي" className="bg-slate-900">حجز جناح ملكي فاخر</option>
                  <option value="استفسار عن حجز جناح عائلي" className="bg-slate-900">حجز جناح عائلي</option>
                  <option value="استفسار عن حجز غرفة دبل" className="bg-slate-900">حجز غرفة دبل (مزدوجة)</option>
                  <option value="استفسار عن حجز غرفة سنجل" className="bg-slate-900">حجز غرفة مفردة (سنجل)</option>
                  <option value="استفسار عن إقامة طويلة أو شركات" className="bg-slate-900">عقد إقامة طويلة / شركات</option>
                  <option value="استفسار عام" className="bg-slate-900">استفسار عام أو ملاحظات</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-300 mb-1.5">
                  تفاصيل الرسالة أو الملاحظات
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="أدخل أي تفاصيل إضافية مثل تاريخ الوصول المطلوب، عدد الليالي، أو أي رغبات خاصة..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-slate-900 transition-colors"
                ></textarea>
              </div>

              <button
                id="contact-form-submit"
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <i className="fa-brands fa-whatsapp text-slate-950 text-lg group-hover:scale-110 transition-transform"></i>
                <span>إرسال الاستفسار عبر الواتساب فوراً</span>
              </button>
            </form>
          </div>

          {/* Map Preview & Directions */}
          <div className="lg:col-span-6 bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col">
            <div className="p-6 text-right border-b border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                  صنعاء - مذبح
                </span>
                <span className="text-xs text-slate-400">
                  أمام نادي الشعب
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mt-2 font-heading">
                خريطة الموقع والوصول
              </h4>
              <p className="text-slate-400 text-xs mt-1">
                بجانب مدرسة الأمة الرائدة - يسهل الوصول إلى شارع الستين، جامعة صنعاء، والمستشفيات الرئيسية
              </p>
            </div>

            {/* Embedded Map iframe */}
            <div className="relative h-[340px] sm:h-[400px] w-full bg-slate-950">
              <iframe
                title="موقع فندق ضواحي صنعاء"
                src="https://maps.google.com/maps?q=15.3725,44.1755&hl=ar&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[0.88] hue-rotate-180 contrast-110"
              ></iframe>

              {/* Map overlay action */}
              <div className="absolute bottom-4 right-4 bg-slate-950/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl border border-amber-500/30 text-right max-w-xs">
                <div className="text-xs font-bold text-amber-400 mb-1">
                  فندق وأجنحة ضواحي صنعاء
                </div>
                <div className="text-[11px] text-slate-300 mb-2">
                  مذبح - أمام نادي الشعب
                </div>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                >
                  <i className="fa-solid fa-diamond-turn-right text-slate-950"></i>
                  <span>فتح في تطبيق خرائط Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
