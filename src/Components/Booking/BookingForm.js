import { Formik } from 'formik';

function BookingForm({ formData, setFormData, availableTimes, updateTimes, handleSubmit }) {

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        if (field === 'resDate') {
            updateTimes({ type: 'UPDATE_TIMES', value: value });
        }
    };

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}

            >
                <div className="form-container">
                    <h1>Booking Details</h1>
                    <main className="main">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='res-date'>Choose Date:</label>
                                <input className='form-control' type='date' name='_res-date' id='res-date'
                                    value={formData.resDate}
                                    onChange={(e) => handleInputChange('resDate', e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='res-time'>Choose Time:</label>
                                <select className='form-control' name='_res-time' id='res-time'
                                    value={formData.resTime}
                                    onChange={(e) => handleInputChange('resTime', e.target.value)} required>
                                    {availableTimes.map(availableTime => (
                                        <option key={availableTime}>{availableTime}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor='guests'>Numbe of Guests:</label>
                                <input className='form-control' type='number' placeholder="1" name='_guests' id='guests'
                                    value={formData.guestsNo}
                                    onChange={(e) => handleInputChange('guestsNo', e.target.value)} min="1" max="8" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="occasion">Occasion</label>
                                <select className='form-control' name='_occasion' id="occasion"
                                    value={formData.occasion}
                                    onChange={(e) => handleInputChange('occasion', e.target.value)}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor='notes'>Notes:</label>
                                <textarea className='form-control' type='text' name='_notes' id='notes'
                                    value={formData.otherNotes} rows={2}
                                    onChange={(e) => handleInputChange('otherNotes', e.target.value)} />
                            </div>
                            <div className="form-group">
                                <button type='submit'>Book Now!</button>
                            </div>
                        </form>
                    </main>
                </div>
            </Formik>
        </>
    )
}

export default BookingForm;