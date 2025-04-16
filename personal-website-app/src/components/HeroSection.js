import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Galen Ferrara</h1>
        <p>Software Developer</p>
        <div className="hero-btns">

        <Link className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large' onClick={ScrollToContact}> CONTACT ME </Link>

        <Link className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large' onClick={ScrollToPortfolio}> PORTFOLIO </Link>

        <Link className='btns' buttonStyle='btn--primary' 
        buttonSize='btn--large'> VIEW RESUME </Link>

        </div>

    </div>
  )
}

function ScrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function ScrollToPortfolio() {
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
}

export default HeroSection;