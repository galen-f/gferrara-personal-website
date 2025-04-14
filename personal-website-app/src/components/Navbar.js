import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
};

window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            GF
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'bi bi-x-lg' : 'bi bi-list'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                    Portfolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar