import { Link } from "react-router-dom";

export default function HighLightSection({ specials }) {
    return (
        <>
            <div className="highlight container">
                <div className="title-bar">
                    <h2>This weeks specials!</h2>
                    <Link to="/menu"><button>Online Menu</button></Link>
                </div>
                <section id="menu">
                    {specials.map((item, index) => {
                        if (item.featured){
                            return (
                                <div key={index} className="card">
                                    <img className="card-image" src={process.env.PUBLIC_URL + `/images/${item.image}.jpg`} alt={item.title} />
                                    <div className="card-content">
                                        <div className="card-title">
                                            <h4>{item.title}</h4>
                                            <h5>$ {item.price}</h5>
                                        </div>
                                        <p className='card-description'>{item.description}</p>
                                    </div>
                                    <div className="card-footer"><button>Order a delivery &gt;&gt;&gt;</button></div>
                                </div>
                            )
                        }
                        return null
                    })
                    }
                </section>
            </div>
        </>
    )
}
