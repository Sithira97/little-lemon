export default function TestimonialsSection({ testimonials }) {
    return (
        <>
            <div className="testimonials">
                <div className="container">
                    <h3>Testimonials</h3>
                    <section className="slider">
                        {testimonials.map((item, index) => {
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
                                <div key={index} className="card">
                                    <div className="card-content">
                                        <div className="user-rate">
                                            {stars.map((star, index) => (<svg key={index} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">{star}</svg>))}
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
                </div>
            </div>
        </>
    )
}