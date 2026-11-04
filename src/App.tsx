/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { ServiceDetailsModal } from './components/ServiceDetailsModal';
import { SamagriGuideModal } from './components/SamagriGuideModal';
import { LegalModal } from './components/LegalModal';
import { NotFoundView } from './components/NotFoundView';
import { ServiceItem } from './types';

function MainWebsite() {
  const { t } = useLanguage();

  // State for modals & booking service pre-selection
  const [selectedServiceForDetails, setSelectedServiceForDetails] = useState<ServiceItem | null>(null);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string>('puja-path');
  const [isSamagriModalOpen, setIsSamagriModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [show404, setShow404] = useState(false);

  // Scroll to booking form and set chosen service
  const handleSelectServiceForBooking = (serviceId: string) => {
    setPreSelectedServiceId(serviceId);
    setShow404(false);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    setShow404(false);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (show404) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFF9ED]">
        <Navbar
          onOpenBooking={handleOpenBooking}
          onOpenSamagriGuide={() => setIsSamagriModalOpen(true)}
        />
        <main className="flex-1">
          <NotFoundView onReturnHome={() => setShow404(false)} />
        </main>
        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenSamagriGuide={() => setIsSamagriModalOpen(true)}
          onOpenBooking={handleOpenBooking}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#24060D] selection:bg-[#D6AD55]/30 selection:text-[#350A16]">
      {/* Top Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenSamagriGuide={() => setIsSamagriModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Section */}
        <About />

        {/* Services Section with All 10 Vedic Services */}
        <Services
          onSelectServiceForBooking={handleSelectServiceForBooking}
          onOpenDetailsModal={(service) => setSelectedServiceForDetails(service)}
        />

        {/* Photo Gallery Section */}
        <Gallery />

        {/* Booking Form & Contact Section */}
        <BookingContact initialServiceId={preSelectedServiceId} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenSamagriGuide={() => setIsSamagriModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Persistent Floating Controls */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Interactive Modals */}
      <ServiceDetailsModal
        service={selectedServiceForDetails}
        onClose={() => setSelectedServiceForDetails(null)}
        onBook={handleSelectServiceForBooking}
      />

      <SamagriGuideModal
        isOpen={isSamagriModalOpen}
        onClose={() => setIsSamagriModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainWebsite />
    </LanguageProvider>
  );
}
