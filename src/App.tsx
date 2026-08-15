import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Room } from './types';

export default function App() {
  const [selectedRoomForDetails, setSelectedRoomForDetails] = useState<Room | null>(null);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const handleOpenBookingModal = (room?: Room | null) => {
    setSelectedRoomForBooking(room || null);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedRoomForBooking(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950" dir="rtl">
      {/* Sticky Header Navbar */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal(null)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBookingModal={() => handleOpenBookingModal(null)} />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Rooms & Suites Section */}
        <RoomsSection
          onSelectRoomForBooking={(room) => handleOpenBookingModal(room)}
          onOpenRoomDetails={(room) => setSelectedRoomForDetails(room)}
        />

        {/* 4. Services & Amenities Section */}
        <ServicesSection />

        {/* 5. Gallery Section */}
        <GallerySection />

        {/* 6. Reviews & FAQ Section */}
        <ReviewsSection />

        {/* 7. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Room Details Modal */}
      <RoomDetailsModal
        room={selectedRoomForDetails}
        onClose={() => setSelectedRoomForDetails(null)}
        onBookNow={(room) => handleOpenBookingModal(room)}
      />

      {/* Interactive Booking Calculation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        initialRoom={selectedRoomForBooking}
      />
    </div>
  );
}
