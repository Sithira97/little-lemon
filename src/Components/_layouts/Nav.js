import { NavLink } from "react-router-dom";

function Nav({ isNavVisible }) {
    const location = (navData) => (navData.isActive ? "active" : 'none');
    return (
        <nav className={`nav-bar ${isNavVisible ? 'show' : ''}`}>
            <ul>
                <li className="nav-link">
                    <NavLink to="/little-lemon" className={location}>Home</NavLink>
                </li>
                <li className="nav-link"><NavLink to="/little-lemon/about" className={location}>About</NavLink></li>
                <li className="nav-link"><NavLink to="/little-lemon/menu" className={location}>Menu</NavLink></li>
                <li className="nav-link">
                    <NavLink to="/little-lemon/booking" className={location}>Reservations</NavLink>
                </li>
                <li className="nav-link"> <NavLink to="/little-lemon/order" className={location}>Order Online</NavLink></li>
                <li className="nav-link"> <NavLink to="/little-lemon/login" className={location}>Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;