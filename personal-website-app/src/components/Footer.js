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
            </div>
        </div>
    </div>
  )
}

export default Footer