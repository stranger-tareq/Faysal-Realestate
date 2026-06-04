/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { LanguageProvider } from './LanguageContext';

const ReadyFlats = lazy(() => import('./components/ReadyFlats'));
const UpcomingFlats = lazy(() => import('./components/UpcomingFlats'));
const FlatSupport = lazy(() => import('./components/FlatSupport'));
const LandListings = lazy(() => import('./components/LandListings'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const PropertyDetails = lazy(() => import('./components/PropertyDetails'));

const FallbackLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green"></div>
  </div>
);

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<FallbackLoader />}>
        <ReadyFlats />
        <UpcomingFlats />
        <LandListings />
        <FlatSupport />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><FallbackLoader /></div>}>
              <PropertyDetails />
            </Suspense>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}
