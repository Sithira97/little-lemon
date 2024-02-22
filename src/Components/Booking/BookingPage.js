import Header from '../layouts/Header.js';
import BookingForm from './BookingForm.js';
import Footer from '../layouts/Footer.js';
import { fetchAPI, submitAPI } from '../API.js';
import React, { useState, useReducer } from "react";
import { useNavigate } from 'react-router-dom';

import './form.css';

function BookingPage() {
    const [formData, setFormData] = useState({
        resDate: '',
        resTime: '',
        guestsNo: '1',
        occasion: '',
        otherNotes: '',
    });

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

    const initializeTimes = ["--- Select a Time ---", '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const [availableTimes, updateTimes] = useReducer(reducer, initializeTimes)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        const response = submitAPI(e);
        if (response && validateReservation) {
            navigate('/booking/success');
        } else {
            navigate('/booking');
            alert("Data Submission Failed");
        }

    };


    const validateReservation = () => {
        if (formData.time !== '' &&
            formData.date !== '' &&
            formData.guestsNo !== '' &&
            formData.occasion !== '') {
            return true;
        }

        return false;
    }

    return (
        <>
            <Header />
            < BookingForm
                formData={formData}
                setFormData={setFormData}
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                handleSubmit={handleSubmit} />
            <Footer />
        </>
    )
}

export default BookingPage;