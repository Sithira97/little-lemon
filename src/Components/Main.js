function Main() {
    return (
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
                        <button>Reserve a table</button>
                    </div>
                    <img className="hero-image" src="" alt="hero" />
                </div>
            </div>
            <div className="highlight container">
                <div className="title-bar">
                    <h2>This weeks specials!</h2>
                    <button>Online Menu</button>
                </div>
                <section id="menu">
                    <div className="card">
                        <img className="card-image" src="" alt="Greek salad" />
                        <div className="card-content">
                            <div className="card-title">
                                <h4>Greek salad</h4>
                                <h5>$ 12.99</h5>
                            </div>
                            <p>The famous Greek salad Of
                                crispy lettuce. peppers, olive
                                and our Chicago style feta
                                cheese. garnished with
                                crunchy garlic and rosemary
                                croutons.</p>
                        </div>
                        <div className="card-footer"><button>Order a delivery &gt;&gt;&gt;</button></div>

                    </div>
                    <div className="card">
                        <img className="card-image" src="" alt="Bruschetta" />
                        <div className="card-content">
                            <div className="card-title">
                                <h4>Bruschetta</h4>
                                <h5>$ 5.29</h5>
                            </div>
                            <p>Our Bruschetta is mado from
                                grilled bread that has been
                                smeared with garlic and
                                seasoned with salt and olive oil.</p>
                        </div>
                        <div className="card-footer"><button>Order a delivery &gt;&gt;&gt;</button></div>

                    </div>
                    <div className="card">
                        <img className="card-image" src="" alt="Pasta" />
                        <div className="card-content">
                            <div className="card-title">
                                <h4>Pasta</h4>
                                <h5>$ 5.99</h5>
                            </div>
                            <p>This comes straight from
                                grandma's recipe book. every
                                last ingredient has been
                                sourced and is as authentic
                                as can be imagined.</p>
                        </div>
                        <div className="card-footer"><button>Order a delivery &gt;&gt;&gt;</button></div>

                    </div>
                </section>
            </div>
            <div className="testimonials">
                <div className="container">
                    <h3>Testimonials</h3>
                    <section className="slider">
                        <div className="card">
                            <div className="card-content">
                                <i>*****</i>
                                <div className="card-title"><img src="" alt="user" /><h5>John  J.</h5></div>
                                <p>First time in Little Lemon and YOU have to go! It’s the cutest little spot with amazing food.
                                    The Pasta is to die for. IT WAS FIRE!! The service we received was so amazing and we will definitely be back again.
                                    They made us feel welcomed and gave us an amazing experience.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <i>*****</i>
                                <div className="card-title"><img src="" alt="user" /><h5>Maria T.</h5></div>
                                <p>Excellent food. Menu is extensive and seasonal to a particularly high  standard. Definitely fine dining.
                                    It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book.
                                    Highly recommended.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <i>*****</i>
                                <div className="card-title"><img src="" alt="user" /><h5>Jessica</h5></div>
                                <p>I have to say, I enjoyed every single bite of the meal in Little Lemon. I had a 3 course meal, with a couple of beers.
                                    Considering the quality, the price is reasonable.
                                    Ideal for those who want a romantic night out.
                                    There was also plenty of room for bigger groups.</p>
                            </div>
                        </div>
                        <div className="card">
                            <i>*****</i>
                            <div className="card-content">
                                <div className="card-title"><img src="" alt="user" /><h5>Shane C.</h5></div>
                                <p>This place is great! Atmosphere is chill and cool but the staff is also really friendly.
                                    They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority.
                                    Food is pretty good, some Italian classics and some twists, and for their prices it’s 100% worth it.
                                </p>
                            </div>
                        </div>
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
                        <img id="mario" src="" alt="mario" />
                        <img id="adrian" src="" alt="adrian" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Main;