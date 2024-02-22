import React from "react";
import './App.css';
import './custom.css';
import HomePage from './Components/Home/HomePage.js';
import BookingPage from './Components/Booking/BookingPage.js';
import ConfirmedBooking from './Components/Booking/ConfirmedBooking.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/booking/success" element={<ConfirmedBooking />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
