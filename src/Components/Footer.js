function Footer() {
    return (
        <footer className="container-footer">
            <img src="" alt="Logo" />
            <div>
                Pages
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Reservations">Reservations</a></li>
                    <li><a href="#Order">OrderOnline</a></li>
                    <li><a href="#Login">Login</a></li>
                </ul>
            </div>
            <div>
                Contact
                <p>3354 W Fulton Blvd, Chicago, Illinois(IL), 60624</p>
                <p>(773) 826-0216</p>
                <p>info@litttlelemon.com</p>
            </div>
            <div>
                Social Media Links
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href="https://instagram.com/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i>Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;