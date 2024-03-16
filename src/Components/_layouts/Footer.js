import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img className="brand-logo" src={process.env.PUBLIC_URL + `/images/logo_footer.png`} alt="Logo" />
                <nav>
                    <h4 className="footer-title">Pages</h4>
                    <ul>
                        <li className="nav-link"><Link to="/little-lemon">Home</Link></li>
                        <li className="nav-link"><Link to="/little-lemon/aboutt">About</Link></li>
                        <li className="nav-link"><Link to="/little-lemon/menu">Menu</Link></li>
                        <li className="nav-link"><Link to="/little-lemon/booking">/Reservations</Link></li>
                        <li className="nav-link"><Link to="/little-lemon/order">OrderOnline</Link></li>
                        <li className="nav-link"><Link to="/little-lemon/login">Login</Link></li>
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