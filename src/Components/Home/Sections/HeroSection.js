import { Link } from "react-router-dom";
import { Button, Box, Text, Heading, } from '@chakra-ui/react'

export default function HeroSection({ specials, testimonials }) {
    return (
        <>
            <Box className="hero-container">
                <Box className="darker-layer">
                    <Box className="container">
                        <Box className="hero">
                            <Heading as='h1' size='3xl'>Little Lemon</Heading>
                            <Heading as='h2' size='xl'>Chicago</Heading>
                            <Text>We are a family owned
                                Mediterranean restaurant,
                                focused on traditional
                                recipes served with a modern
                                twist.</Text>
                            <Link to="/booking"><Button mt={'1rem'}>Reserve a table</Button></Link>
                        </Box>
                        <img className="hero-image" src={process.env.PUBLIC_URL + '/images/restauranfood.jpg'} alt="hero" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
