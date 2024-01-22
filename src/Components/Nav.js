function Nav({ isNavVisible }) {
    return (
        <nav className={`nav-bar ${isNavVisible ? 'show' : ''}`}>
            <ul>
                <li className="nav-link"><a href="/">Home</a></li>
                <li className="nav-link"><a href="#about">About</a></li>
                <li className="nav-link"><a href="#Menu">Menu</a></li>
                <li className="nav-link"><a href="#Reservations">Reservations</a></li>
                <li className="nav-link"><a href="#Order">Order Online</a></li>
                <li className="nav-link"><a href="#Login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;