import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img className="brand-logo" src="" alt="Logo" />
                <nav>
                    <h4 className="footer-title">Pages</h4>
                    <ul>
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><a href="#about">About</a></li>
                        <li className="nav-link"><a href="#Menu">Menu</a></li>
                        <li className="nav-link"><Link to="/booking">Reservations</Link></li>
                        <li className="nav-link"><a href="#Order">OrderOnline</a></li>
                        <li className="nav-link"><a href="#Login">Login</a></li>
                    </ul>
                </nav>
                <nav>
                    <h4 className="footer-title">Contact</h4>
                    <ul>
                        <li className="nav-link text-reset"><span>3354 W Fulton Blvd, Chicago, Illinois(IL), 60624</span></li>
                        <li className="nav-link"><a href="tel:773-826-0216">(773) 826-0216</a></li>
                        <li className="nav-link"><a href="mailto:info@litttlelemon.com">info@litttlelemon.com</a></li>
                    </ul>
                </nav>
                <nav>
                    <h4 className="footer-title">Social Links</h4>
                    <ul>
                        <li className="nav-link"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li className="nav-link"><a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li className="nav-link"><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i>Twitter</a></li>
                    </ul>
                </nav></div>

        </footer>
    )
}

export default Footer;