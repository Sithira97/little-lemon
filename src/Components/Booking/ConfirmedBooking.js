import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';

function ConfirmedBooking() {
    return (
        <>
            <Header />
            <>
                <div className="container confirm-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
                        <g fill="none" stroke="#22AE73" strokeWidth={2}>
                            <circle
                                cx={77}
                                cy={77}
                                r={72}
                                style={{ strokeDasharray: "480px, 480px", strokeDashoffset: 960 }}
                            />
                            <circle
                                id="colored"
                                fill="#22AE73"
                                cx={77}
                                cy={77}
                                r={72}
                                style={{ strokeDasharray: "480px, 480px", strokeDashoffset: 960 }}
                            />
                            <polyline
                                className="st0"
                                stroke="#fff"
                                strokeWidth={10}
                                points="43.5,77.8 63.7,97.9 112.2,49.4 "
                                style={{ strokeDasharray: "100px, 100px", strokeDashoffset: 200 }}
                            />
                        </g>
                    </svg>
                    <h2>Booking Confirmed</h2>
                    <p>Thank you for reserving at our restaurant!</p>
                    <button onClick={() => window.location.href = "/"}>Go to Home</button>
                </div>
            </>
            <Footer />
        </>
    )
}


export default ConfirmedBooking;