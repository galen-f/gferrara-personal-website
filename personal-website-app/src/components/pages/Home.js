import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';
import Contact from '../Contact';

function Home () {
    return (
        <>
        <HeroSection />
        <Cards />
        <Contact />
        <Footer />
        </>
    )
}

export default Home;