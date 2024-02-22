import { render, screen } from '@testing-library/react';
//import App from './App';
import BookingForm from './Components/BookingForm.js';
import BookingPage from './Components/BookingPage.js';

let formData = {
  resDate: '',
  resTime: '',
  guestsNo: '',
  occasion: '',
  otherNotes: '',
}
let availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

test('Renders the BookingForm button', () => {
  render(<BookingForm formData={formData} availableTimes={availableTimes} />);
  const buttonElement = screen.getByText("Book Now!");
  return expect(buttonElement).toBeInTheDocument();
})

test('Renders the BookingPage heading', () => {
  render(<BookingPage />);
  const buttonElement = screen.getByText("Book Now!");
  return expect(buttonElement).toBeInTheDocument();
})