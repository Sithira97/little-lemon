import Header from '../_layouts/Header.js';
import Footer from '../_layouts/Footer.js';
import { Box, Button, Heading, Text, Card, CardBody, } from '@chakra-ui/react'

function ConfirmedBooking() {
    return (
        <>
            <Header />
            <>
                <Box className="container confirm-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px"
                        style={{ position: 'relative', top: '35px', zIndex: 2, filter: 'drop-shadow(0px 0px 5px #22AE73)' }}>
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
                    <Card>
                        <CardBody align="center" justify="center" p='2rem'>
                            <Heading Heading as='h2' size='3xl' >Booking Confirmed</Heading>
                            <Text >Thank you for reserving at our restaurant!</Text>
                            <Box mt={'1rem'}>
                                <Button onClick={() => window.location.href = "/booking"} className='btn btn-outline'>Reserve another</Button>
                                <Button onClick={() => window.location.href = "/"} className='btn btn-primary'>Go to Home</Button>
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
            </>
            <Footer />
        </>
    )
}


export default ConfirmedBooking;