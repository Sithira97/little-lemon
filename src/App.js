import React from "react";
import './App.css';
import './custom.css';
import HomePage from './Components/HomePage.js';
import BookingPage  from './Components/BookingPage .js';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage  />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
