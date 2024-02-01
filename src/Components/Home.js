import { Link } from "react-router-dom";


function Home({specials,testimonials}) {
    return (
        <>
            <main className="main">
                <div className="hero-container">
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
                <div className="highlight container">
                    <div className="title-bar">
                        <h2>This weeks specials!</h2>
                        <button>Online Menu</button>
                    </div>
                    <section id="menu">
                        {specials.map((item) => {
                            return (
                                <div className="card">
                                    <img className="card-image" src={process.env.PUBLIC_URL + `/images/special_${item.image}.jpg`} alt={item.title} />
                                    <div className="card-content">
                                        <div className="card-title">
                                            <h4>{item.title}</h4>
                                            <h5>$ {item.price}</h5>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="card-footer"><button>Order a delivery &gt;&gt;&gt;</button></div>
                                </div>)
                        })
                        }
                    </section>
                </div>
                <div className="testimonials">
                    <div className="container">
                        <h3>Testimonials</h3>
                        <section className="slider">
                            {testimonials.map(item => {
                                const stars = Array(5).fill(null).map((_, index) => {
                                    if (item.rating > index) {
                                        if (item.rating - index === 0.5) {
                                            return (
                                                <path key={index} d="m480-323 126 77-33-144 111-96-146-13-58-136v312ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                                            );
                                        } else {
                                            return (
                                                <path key={index} d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                                            );
                                        }
                                    } else {
                                        return (
                                            <path key={index} d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                                        );
                                    }
                                });
                                return (
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="user-rate">
                                                {stars.map(star => (<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">{star}</svg>))}
                                            </div>
                                            <div className="card-title">
                                                <img src={process.env.PUBLIC_URL + `/images/user_${item.profile}.jpg`} alt="user" />
                                                <h5>{item.name}</h5>
                                            </div>
                                            <p>{item.review}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </section>
                    </div></div>
                <div className="container">
                    <div className="about-container">
                        <div className="about">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in
                                lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                                founded by Adrian and Mario</p>
                        </div>
                        <div className="chef-images">
                            <img id="mario" src={process.env.PUBLIC_URL + `/images/chef_2.png`} alt="mario" />
                            <img id="adrian" src={process.env.PUBLIC_URL + `/images/chef_1.png`} alt="adrian" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Home;