import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingBookingButton } from './components/FloatingBookingButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LifeCoachingPage } from './pages/LifeCoachingPage';
import { ServicesPage } from './pages/ServicesPage';
import { MindMattersPage } from './pages/MindMattersPage';
import { BookPage } from './pages/BookPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#111111]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/life-coaching" element={<LifeCoachingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/mind-matters" element={<MindMattersPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/book-session" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <FloatingBookingButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
