import { NavLink } from "react-router-dom";

function Nav({ isNavVisible }) {
    const location = (navData) => (navData.isActive ? "active" : 'none');
    return (
        <nav className={`nav-bar ${isNavVisible ? 'show' : ''}`}>
            <ul>
                <li className="nav-link">
                    <NavLink to="/" className={location}>Home</NavLink>
                </li>
                <li className="nav-link"><a href="#about-container">About</a></li>
                <li className="nav-link"><a href="#Menu">Menu</a></li>
                <li className="nav-link">
                    <NavLink to="/booking" className={location}>Reservations</NavLink>
                </li>
                <li className="nav-link"><a href="#Order">Order Online</a></li>
                <li className="nav-link"><a href="#Login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;