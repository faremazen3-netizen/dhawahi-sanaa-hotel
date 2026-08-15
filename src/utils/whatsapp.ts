import { HOTEL_INFO } from '../data/hotelData';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "مرحباً فندق ضواحي صنعاء، أود الاستفسار عن حجز غرفة/جناح والأسعار المتاحة.";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export function getRoomBookingWhatsAppUrl(roomName: string, checkIn?: string, checkOut?: string, guests?: number): string {
  let message = `مرحباً فندق ضواحي صنعاء،\nأود الاستفسار وحجز: *${roomName}*`;
  
  if (checkIn) {
    message += `\n📅 تاريخ الوصول: ${checkIn}`;
  }
  if (checkOut) {
    message += `\n📅 تاريخ المغادرة: ${checkOut}`;
  }
  if (guests) {
    message += `\n👥 عدد الأفراد: ${guests}`;
  }
  message += `\n\nيرجى التكرم بتأكيد التوافر وإفادتي بالسعر وطريقة تأكيد الحجز. شكراً لكم.`;

  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getContactFormWhatsAppUrl(name: string, phone: string, topic: string, details: string): string {
  const message = `مرحباً فندق ضواحي صنعاء،\n\n📌 رسالة جديدة من الموقع الإلكتروني:\n👤 الاسم: ${name}\n📱 الهاتف: ${phone}\n🏷️ نوع الاستفسار: ${topic}\n\n📝 التفاصيل:\n${details}`;
  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
