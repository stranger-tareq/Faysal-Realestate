/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReadyFlats from './components/ReadyFlats';
import UpcomingFlats from './components/UpcomingFlats';
import FlatSupport from './components/FlatSupport';
import LandListings from './components/LandListings';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyDetails from './components/PropertyDetails';
import { LanguageProvider } from './LanguageContext';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ReadyFlats />
      <UpcomingFlats />
      <LandListings />
      <FlatSupport />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}
