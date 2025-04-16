import React from 'react'
import '../App.css';
import { Button} from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Galen Ferrara</h1>
        <p>Software Developer</p>
        <div className="hero-btns">

        <Button className='btns' buttonStyle='btn--outline' 
        buttonSize='btn--large'> 
        CONTACT 
        </Button>

        <Button className='btns' buttonStyle='btn--primary' 
        buttonSize='btn--large'> VIEW RESUME </Button>

        </div>

    </div>
  )
}

export default HeroSection;