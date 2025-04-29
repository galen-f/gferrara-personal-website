import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Galen Ferrara</h1>
        <p>Software Developer - Photographer</p>
        <div className="hero-btns">
          
        <Link className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large' onClick={ScrollToPortfolio}> PORTFOLIO </Link>

        <Link className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large' onClick={ScrollToContact}> CONTACT ME </Link>

        <Link 
          className='btns' 
          buttonStyle='btn--primary' 
          buttonSize='btn--large'
          onClick={DownloadResume}
          > 
            RESUME 
          <i className="bi bi-download"></i> 
        </Link>

        </div>

    </div>
  )
}

function DownloadResume() {
  const link = document.createElement('a');
  link.href = '/files/Resume_Galen_Ferrara.pdf';
  link.download = 'Resume_Galen_Ferrara.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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