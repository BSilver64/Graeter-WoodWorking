import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection';
import Navigation from '../Navigation';
import Cards from '../Cards';
import Footer from '../Footer';
import AboutSection from '../AboutSection';
function Home (){
    return (
        <>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <Footer />
        </>
    )
}

export default Home