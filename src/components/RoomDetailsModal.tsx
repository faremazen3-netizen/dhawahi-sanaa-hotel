import React, { useState } from 'react';
import { Room } from '../types';
import { getRoomBookingWhatsAppUrl } from '../utils/whatsapp';

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
  onBookNow: (room: Room) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  onClose,
  onBookNow,
}) => {
  if (!room) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  const whatsappUrl = getRoomBookingWhatsAppUrl(room.name);

  return (
    <div
      id="room-details-modal"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl my-8 text-right text-white relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white hover:text-amber-400 flex items-center justify-center border border-slate-700 text-base transition-colors"
          aria-label="إغلاق"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          {/* Main Image Banner */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-4 bg-slate-950">
            <img
              src={images[activeImageIndex]}
              alt={room.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg ${room.tagColor || 'bg-amber-600 text-white'}`}>
                {room.tag}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-amber-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="صورة إضافية" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Title & Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs text-amber-400 font-semibold mb-1 block">
                {room.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {room.name}
              </h3>
            </div>

            <div className="text-right sm:text-left bg-slate-800/80 px-4 py-3 rounded-2xl border border-slate-700">
              <span className="text-[11px] text-slate-400 block">السعر للّيلة</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-amber-400 font-heading">
                  {room.pricePerNight.toLocaleString('ar-YE')}
                </span>
                <span className="text-xs text-slate-300">{room.currency}</span>
              </div>
            </div>
          </div>

          {/* Room Key Specs Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 text-right">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                <i className="fa-solid fa-users text-amber-400"></i>
                <span>السعة</span>
              </div>
              <div className="text-xs font-bold text-slate-200">{room.capacity}</div>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 text-right">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                <i className="fa-solid fa-maximize text-amber-400"></i>
                <span>المساحة</span>
              </div>
              <div className="text-xs font-bold text-slate-200">{room.size}</div>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 text-right">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                <i className="fa-solid fa-bed text-amber-400"></i>
                <span>نوع السرير</span>
              </div>
              <div className="text-xs font-bold text-slate-200 truncate">{room.bedType}</div>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 text-right">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                <i className="fa-solid fa-mountain-sun text-amber-400"></i>
                <span>الإطلالة</span>
              </div>
              <div className="text-xs font-bold text-slate-200 truncate">{room.view}</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white mb-2 font-heading">
              الوصف العام للغرفة/الجناح
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Features list */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white mb-3 font-heading">
              المميزات والتجهيزات
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <i className="fa-solid fa-circle-check text-amber-400 text-sm shrink-0"></i>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities grid */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white mb-3 font-heading">
              الخدمات المشمولة
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {room.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-800/80 px-3 py-2.5 rounded-xl text-xs text-slate-300 border border-slate-700/60"
                >
                  <i className={`fa-solid ${item.icon} text-amber-400 text-sm`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
          >
            إغلاق
          </button>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="flex-1 sm:flex-initial bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-calculator"></i>
              <span>حاسبة الحجز والتفاصيل</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>حجز فوري بالواتساب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
