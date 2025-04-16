import React from 'react'
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact" id="contact">
        
        <div className="contact__container">
            <div >
                <h1 className="contact__title">Contact Me!</h1>
            </div>
            <div className="contact__wrapper">

                <div className="contact__left">
                    
                    <div className="contact__image">
                        <img src="images/profile.jpg" alt="Me!"/>
                    </div>
                </div>

                <div className="contact__right">
                    <div className="contact__details">
                        <p>Galen.ferrara557@gmail.com</p>
                        <p>+44 7918 577677 (UK)</p>
                        <p>+1 (845) 798 9409 (US)</p>
                    </div>
                </div>
            
                
            </div>
            <div className="contact__socials">
                <Link to='https://www.instagram.com/galen.f_/'><i className="bi bi-instagram"></i> Instagram </Link>
                <Link to='https://www.linkedin.com/in/galen-ferrara'><i className="bi bi-linkedin"></i> Linked-In </Link>
                <Link to='https://github.com/galen-f'><i className="bi bi-github"></i> GitHub </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact