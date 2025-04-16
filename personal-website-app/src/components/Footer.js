import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Feel free to reach out to me regarding anything!    
            </p>  
        </section>

        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2> Social Media </h2>
                    <Link to='https://www.instagram.com/galen.f_/'><i className="bi bi-instagram"></i> Instagram </Link>
                    <Link to='https://www.linkedin.com/in/galen-ferrara'><i className="bi bi-linkedin"></i> Linked-In </Link>
                    <Link to='https://github.com/galen-f'><i className="bi bi-github"></i> GitHub </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer