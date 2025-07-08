import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import LearningJourney from './components/LearningJourney';
import CourseCatalog from './components/CourseCatalog';
import SuccessStories from './components/SuccessStories';
import EcosystemIntegration from './components/EcosystemIntegration';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <LearningJourney />
        <CourseCatalog />
        <SuccessStories />
        <EcosystemIntegration />
        <Pricing />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;