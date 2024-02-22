export default function HighLightSection({ specials }) {
    return (
        <>
            <div className="highlight container">
                <div className="title-bar">
                    <h2>This weeks specials!</h2>
                    <button>Online Menu</button>
                </div>
                <section id="menu">
                    {specials.map((item, index) => {
                        return (
                            <div key={index} className="card">
                                <img className="card-image" src={process.env.PUBLIC_URL + `/images/special_${item.image}.jpg`} alt={item.title} />
                                <div className="card-content">
                                    <div className="card-title">
                                        <h4>{item.title}</h4>
                                        <h5>$ {item.price}</h5>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="card-footer"><button>Order a delivery &gt;&gt;&gt;</button></div>
                            </div>
                        )
                    })
                    }
                </section>
            </div>
        </>
    )
}
