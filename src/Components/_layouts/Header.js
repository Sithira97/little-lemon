import Nav from './Nav.js';
import { useState } from 'react';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
      };
    return (
        <header className={`header ${isNavVisible ? 'show' : ''}`}>
            <div className={`container ${isNavVisible ? 'show' : ''}`}>
            <img className="brand-logo" src={process.env.PUBLIC_URL + `/images/logo.svg`} alt="Logo" />
            <button className="nav-button" onClick={toggleNav}><img src={process.env.PUBLIC_URL + `/images/menu.svg`} alt=''/></button>
            <Nav isNavVisible={isNavVisible}/>
            </div>
        </header>
    )
}

export default Header;