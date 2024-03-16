import React from "react";
import './App.css';
import './custom.css';
import './form.css';
import HomePage from './Components/Home/HomePage.js';
import AboutPage from './Components/About/AboutPage.js';
import MenuPage from './Components/Menu/MenuPage.js';
import OrderOnline from './Components/Menu/OrderOnline.js';
import BookingPage from './Components/Booking/BookingPage.js';
import ConfirmedBooking from './Components/Booking/ConfirmedBooking.js';
import LoginPage from "./Components/Login/LoginPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/booking/success" element={<ConfirmedBooking />}></Route>
            <Route path="/order" element={<OrderOnline />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </Router>
      </ChakraProvider>

    </>
  );
}

export default App;
