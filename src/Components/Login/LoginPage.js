import Header from '../_layouts/Header.js';
import LoginForm from './LoginForm.js';
import Footer from '../_layouts/Footer.js';
import { Card, CardBody, Divider, Center, Text, Heading } from '@chakra-ui/react'


function LoginPage() {
    const formData = {
        email: '',
        passowrd: '',
    };

    const handleSubmit = (values) => {
        console.log('submitted');
    };

    return (
        <>
            <Header />
            <Card m='2rem' w='40%' alignSelf='center' px='3rem'>
                <CardBody>
                    <Center>
                        <Heading as='h1' size='4xl' noOfLines={1}>Login</Heading>
                    </Center>
                    < LoginForm
                        formData={formData}
                        handleSubmit={handleSubmit} />
                    <Text>Forgot Password?</Text>
                    <Divider />
                    <Center>
                        <Text >Not registered yet? <Text as='b'>Signup</Text></Text>
                    </Center>
                </CardBody>
            </Card>
            <Footer />
        </>
    )
}

export default LoginPage;