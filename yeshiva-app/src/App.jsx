import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import DonationSection from './components/DonationSection';
import AccessibilityStatement from './components/AccessibilityStatement';
import TermsOfUse from './components/TermsOfUse';

const HomePage = () => (
    <>
        <Hero />
        <AboutSection />
        <Stats />
        <Gallery />
        <DonationSection />
    </>
);

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/accessibility" element={<AccessibilityStatement />} />
                <Route path="/terms" element={<TermsOfUse />} />
            </Routes>
        </Layout>
    );
};

export default App;
