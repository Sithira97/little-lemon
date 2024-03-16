import Header from '../_layouts/Header.js';
import Footer from '../_layouts/Footer.js';


function MenuPage() {
    let specials = require('../../menu.json');
    return (
        <>
            <Header />
            <h1 className='title mb-2'>Menu</h1>
            <main className="main">
                <div className="container">
                    <section className='menupage'>
                        {specials.map((item, index) => {
                            return (
                                <div key={index} className="card">
                                    <img className="card-image" src={process.env.PUBLIC_URL + `/images/${item.image}.jpg`} alt={item.title} />
                                    <div className="card-content">
                                        <div className="card-title">
                                            <h4>{item.title}</h4>
                                            <h5>$ {item.price}</h5>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                        }</section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MenuPage;