export default function AboutSection() {
    return (
        <>
            <div className="container">
                <div className="about-container" id='about-container'>
                    <div className="about">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            Little Lemon, a Chicago-based, family-owned Mediterranean restaurant,
                            offers a unique twist on tradition. The brothers, Mario and Adrian, combine
                            family recipes with Italian, Greek, and Turkish influences in their 12-15 seasonally
                            rotating menu. With a rustic ambiance and reasonable prices, Little Lemon caters to any meal,
                            reflecting the brothers' shared dream come true.
                        </p>
                    </div>
                    <div className="chef-images">
                        <img id="mario" src={process.env.PUBLIC_URL + `/images/chef_2.png`} alt="mario" />
                        <img id="adrian" src={process.env.PUBLIC_URL + `/images/chef_1.png`} alt="adrian" />
                    </div>
                </div>
            </div>
        </>
    )
}