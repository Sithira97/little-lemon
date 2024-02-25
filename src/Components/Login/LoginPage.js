import Header from '../_layouts/Header.js';
import LoginForm from './LoginForm.js';
import Footer from '../_layouts/Footer.js';
import React, { useState} from "react";


function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        passowrd: ''
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    };

    return (
        <>
            <Header />
            < LoginForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit} />
            <Footer />
        </>
    )
}

export default LoginPage;