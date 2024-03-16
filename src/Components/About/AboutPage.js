import Header from '../_layouts/Header.js';
import Footer from '../_layouts/Footer.js';
import { Box, Heading, Text } from '@chakra-ui/react'

function AboutPage() {
    return (
        <>
            <Header />
            <main className="main">
                <Box className="container">
                    <Box className="about-container" id='about-container'>
                        <Box className="about">
                            <Heading as='h1' size='4xl' >Little Lemon</Heading>
                            <Heading as='h2' size='3xl' >Chicago</Heading>
                            <Text>
                                Based in Chicago, Illinois, Little Lemon is a family owned
                                Mediterranean restaurant, focused on traditional recipes served with a
                                modern twist.
                            </Text>
                            <Text>
                                The chefs draw inspiration from Italian, Greek, and Turkish culture
                                and have a menu of 12-15 items that they rotate seasonally.
                            </Text>
                            <Text>
                                The restaurant has a rustic and relaxed atmosphere with moderate
                                prices, making it a popular place for a meal any time of the day.
                            </Text>
                            <Text>
                                Little Lemon is owned by two Italian brothers, Mario and Adrian, who
                                moved to the United States to pursue their shared dream of owning a
                                restaurant.
                            </Text>
                            <Text>
                                To craft the menu, Mario relies on family recipes and his experience
                                as a chef in Italy.
                            </Text>
                            <Text>
                                Adrian does all the marketing for the restaurant and led the effort to
                                expand the menu beyond classic Italian to incorporate additional
                                cuisines from the mediterranean region.
                            </Text>
                        </Box>
                        <Box className="chef-images">
                            <img id="mario" src={process.env.PUBLIC_URL + `/images/chef_2.png`} alt="mario" />
                            <img id="adrian" src={process.env.PUBLIC_URL + `/images/chef_1.png`} alt="adrian" />
                        </Box>
                    </Box>
                </Box>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage;