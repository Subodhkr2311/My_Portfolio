import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MetricsHud from './components/MetricsHud';
import CaseStudiesSection from './components/CaseStudiesSection';
import SdlcBlueprintSection from './components/SdlcBlueprintSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import ContactConsole from './components/ContactConsole';
import Footer from './components/Footer';
import FloatingGoTop from './components/FloatingGoTop';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [prefilledCode, setPrefilledCode] = useState('');

  const handleSelectService = (serviceTitle, serviceCode) => {
    setSelectedService(serviceTitle);
    setPrefilledCode(serviceCode);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearService = () => {
    setSelectedService('');
    setPrefilledCode('');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#FFD91A] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Centered Floating Pill Navigation */}
      <Navbar onOpenContact={() => handleSelectService('', '')} />

      {/* Main Content Workspace */}
      <main>
        {/* 00. Hero Section with Unified Engineering, Product & Architecture Focus */}
        <HeroSection />

        {/* 01. Key Metrics & Measurable Telemetry */}
        <MetricsHud />

        {/* 02. Flagship Production Case Studies */}
        <CaseStudiesSection />

        {/* 03. 6-Stage SDLC Engineering Process */}
        <SdlcBlueprintSection />

        {/* 04. Career Experience Timeline */}
        <ExperienceSection />

        {/* 05. Consulting Services, Education & Honours */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 06. Communication & Inquiry Console */}
        <ContactConsole
          selectedService={selectedService}
          prefilledCode={prefilledCode}
          onClearService={handleClearService}
        />
      </main>

      {/* Modern Sleek Footer */}
      <Footer />

      {/* Floating Go To Top Action Button */}
      <FloatingGoTop />
    </div>
  );
}
