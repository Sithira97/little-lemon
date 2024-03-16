import Header from '../_layouts/Header.js';
import BookingForm from './BookingForm.js';
import Footer from '../_layouts/Footer.js';
import { fetchAPI, submitAPI } from '../API.js';
import React, { useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Heading } from '@chakra-ui/react'



function BookingPage() {
    const formData = {
        _res_date: '',
        _res_time: '',
        _guests: '1',
        _occasion: '',
        _notes: '',
    };

    const reducer = (state, action) => {
        if (action.type === 'UPDATE_TIMES') {
            if (submitAPI(action)) {
                return fetchAPI(new Date(action.value));
            }
            else {
                return initializeTimes;
            }
        }
        return state;
    }

    const initializeTimes = []
    const [availableTimes, updateTimes] = useReducer(reducer, initializeTimes)

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        const response = submitAPI(values);
        console.log(values);
        if (response) {
            navigate('/booking/success');
        } else {
            navigate('/booking');
            alert("Data Submission Failed");
        }

    };

    return (
        <>
            <Header />
            <Heading as='h1' size='4xl' className='title'>Booking Details</Heading>
            <Card m='2rem' w='50%' alignSelf='center' px='4rem'>
                <CardBody>
                    < BookingForm
                        formData={formData}
                        availableTimes={availableTimes}
                        updateTimes={updateTimes}
                        handleSubmit={handleSubmit} />
                </CardBody>
            </Card>
            <Footer />
        </>
    )
}

export default BookingPage;