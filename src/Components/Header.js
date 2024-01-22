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
            <img className="brand-logo" src="" alt="Logo" />
            <button className="nav-button" onClick={toggleNav}>Menu</button>
            <Nav isNavVisible={isNavVisible}/>
            </div>
        </header>
    )
}

export default Header;