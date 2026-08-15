import React, { useState, useEffect } from 'react';
import { Room } from '../types';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: Room | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoom,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoom ? initialRoom.id : ROOMS_DATA[0].id
  );
  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(tomorrow);
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (initialRoom) {
      setSelectedRoomId(initialRoom.id);
    }
  }, [initialRoom]);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(0, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const totalCost = nights * currentRoom.pricePerNight;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `مرحباً فندق ضواحي صنعاء،\n\n🛎️ *طلب حجز إقامة جديدة*`;
    message += `\n━━━━━━━━━━━━━━━━━`;
    message += `\n🏨 الغرفة / الجناح: *${currentRoom.name}*`;
    message += `\n📅 تاريخ الوصول: ${checkIn}`;
    message += `\n📅 تاريخ المغادرة: ${checkOut}`;
    message += `\n🌙 عدد الليالي: ${nights} ${nights === 1 ? 'ليلة' : 'ليالٍ'}`;
    message += `\n👥 عدد الأفراد: ${guests}`;
    message += `\n💰 الإجمالي التقديري: ${totalCost.toLocaleString('ar-YE')} ${currentRoom.currency}`;

    if (name) {
      message += `\n\n👤 اسم النزيل: ${name}`;
    }
    if (phone) {
      message += `\n📱 رقم الهاتف: ${phone}`;
    }
    if (notes) {
      message += `\n📝 ملاحظات وطلبات خاصة: ${notes}`;
    }

    message += `\n\nيرجى التكرم بتأكيد الحجز والإفادة بالإجراءات المطلوبة. شكراً لكم.`;

    const waUrl = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl my-6 text-right text-white relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm transition-colors"
            aria-label="إغلاق"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="text-right">
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              حجز إقامة في فندق ضواحي صنعاء
            </h3>
            <span className="text-xs text-amber-400">
              تأكيد فوري ومباشر عبر الواتساب
            </span>
          </div>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleConfirmBooking} className="overflow-y-auto flex-1 p-6 space-y-4">
          {/* Room Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              اختر نوع الغرفة أو الجناح <span className="text-amber-400">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ROOMS_DATA.map((room) => (
                <button
                  type="button"
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  className={`p-3 rounded-xl border text-right transition-all flex items-center justify-between ${
                    selectedRoomId === room.id
                      ? 'border-amber-500 bg-amber-500/10 text-white shadow-md'
                      : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">{room.name}</div>
                    <div className="text-[11px] text-amber-400 font-semibold mt-0.5">
                      {room.pricePerNight.toLocaleString('ar-YE')} {room.currency} / ليلة
                    </div>
                  </div>
                  {selectedRoomId === room.id && (
                    <i className="fa-solid fa-circle-check text-amber-400 text-base"></i>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dates & Guests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Check in */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                تاريخ الوصول
              </label>
              <input
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            {/* Check out */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                تاريخ المغادرة
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn || today}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                عدد الأفراد
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                <option value={1}>1 شخص (فردي)</option>
                <option value={2}>2 أشخاص (شخصين)</option>
                <option value={3}>3 أشخاص</option>
                <option value={4}>4 أشخاص</option>
                <option value={5}>5+ أشخاص</option>
              </select>
            </div>
          </div>

          {/* Guest Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                اسم النزيل الكريم
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الكريم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                رقم الهاتف أو الواتساب
              </label>
              <input
                type="tel"
                placeholder="مثال: 774760824"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 text-right"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              ملاحظات أو رغبات خاصة (اختياري)
            </label>
            <input
              type="text"
              placeholder="مثال: وصول متأخر بعد منتصف الليل، سرير إضافي، طابق هادئ..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Calculation Summary Card */}
          <div className="p-4 bg-slate-950/80 border border-amber-500/30 rounded-2xl">
            <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
              <span>مدة الإقامة:</span>
              <span className="font-bold text-white">{nights} {nights === 1 ? 'ليلة' : 'ليالٍ'}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
              <span>سعر الليلة:</span>
              <span>{currentRoom.pricePerNight.toLocaleString('ar-YE')} {currentRoom.currency}</span>
            </div>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400">الإجمالي التقديري:</span>
              <div className="text-right">
                <span className="text-lg font-black text-amber-400 font-heading">
                  {totalCost.toLocaleString('ar-YE')}
                </span>
                <span className="text-xs text-slate-300 mr-1">{currentRoom.currency}</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group text-sm"
            >
              <i className="fa-brands fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
              <span>إرسال تفاصيل الحجز وتأكيد الغرفة عبر الواتساب</span>
            </button>
            <div className="text-center text-[11px] text-slate-400 mt-2">
              سيتم التواصل معكم فوراً لتأكيد جاهزية الغرفة واستقبالكم.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
