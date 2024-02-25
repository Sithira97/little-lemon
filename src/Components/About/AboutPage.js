import Header from '../_layouts/Header.js';
import Footer from '../_layouts/Footer.js';


function AboutPage() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="about-container" id='about-container'>
                        <div className="about">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>
                                Based in Chicago, Illinois, Little Lemon is a family owned
                                Mediterranean restaurant, focused on traditional recipes served with a
                                modern twist.
                            </p>
                            <p>
                                The chefs draw inspiration from Italian, Greek, and Turkish culture
                                and have a menu of 12-15 items that they rotate seasonally.
                            </p>

                            <p>
                                The restaurant has a rustic and relaxed atmosphere with moderate
                                prices, making it a popular place for a meal any time of the day.
                            </p>

                            <p>
                                Little Lemon is owned by two Italian brothers, Mario and Adrian, who
                                moved to the United States to pursue their shared dream of owning a
                                restaurant.
                            </p>

                            <p>
                                To craft the menu, Mario relies on family recipes and his experience
                                as a chef in Italy.
                            </p>

                            <p>
                                Adrian does all the marketing for the restaurant and led the effort to
                                expand the menu beyond classic Italian to incorporate additional
                                cuisines from the mediterranean region.
                            </p>
                        </div>
                        <div className="chef-images">
                            <img id="mario" src={process.env.PUBLIC_URL + `/images/chef_2.png`} alt="mario" />
                            <img id="adrian" src={process.env.PUBLIC_URL + `/images/chef_1.png`} alt="adrian" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage;