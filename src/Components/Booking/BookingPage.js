import Header from '../_layouts/Header.js';
import BookingForm from './BookingForm.js';
import Footer from '../_layouts/Footer.js';
import { fetchAPI, submitAPI } from '../API.js';
import React, { useReducer } from "react";
import { useNavigate } from 'react-router-dom';



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

    const initializeTimes = ["--- Select a Time ---", '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const [availableTimes, updateTimes] = useReducer(reducer, initializeTimes)

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        const response = submitAPI(values);
        console.log('submitted');
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
            < BookingForm
                formData={formData}
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                handleSubmit={handleSubmit} />
            <Footer />
        </>
    )
}

export default BookingPage;