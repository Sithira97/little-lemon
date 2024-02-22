import { Link } from "react-router-dom";


export default function HeroSection({ specials, testimonials }) {
    return (
        <>
            <div className="hero-container">
                <div className="darker-layer">
                    <div className="container">
                        <div className="hero">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>We are a family owned
                                Mediterranean restaurant,
                                focused on traditional
                                recipes served with a modern
                                twist.</p>
                            <Link to="/booking"><button>Reserve a table</button></Link>
                        </div>
                        <img className="hero-image" src={process.env.PUBLIC_URL + '/images/restauranfood.jpg'} alt="hero" />
                    </div>
                </div>
            </div>
        </>
    )
}
