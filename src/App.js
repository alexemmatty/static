import React, { useState, useEffect } from 'react';
import './App.css';
import NxtepNavbar from './components/NxtepNavbar';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    useEffect(() => {
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        setVH();
        window.addEventListener('resize', setVH);
    
        return () => window.removeEventListener('resize', setVH);
    }, []);
    

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="App">
            <NxtepNavbar />
            <HeroSection />
            <Services />
            <AboutUs />
            <EnquiryForm />
            <Footer />
        </div>
    );
}

export default App;
