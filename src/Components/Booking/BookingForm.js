import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function BookingForm({ formData, availableTimes, updateTimes, handleSubmit }) {

    const bookingFormSchema = Yup.object().shape({
        _res_date: Yup.date()
            .required('A date is required to make the reservation'),
        _res_time: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('A time is required to make the reservation'),
        _guests: Yup.number()
            .min(1, 'At least one guest is needed')
            .max(8, 'The maximum you can  have in a table is 8 people')
            .required('Number of guest is required to make the reservation'),
        _occasion: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
        _notes: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
    });

    return (
        <>
            <Formik
                initialValues={formData}
                validationSchema={bookingFormSchema}
                onSubmit={(values)=>handleSubmit(values)}
            >
                {({
                    errors,
                    touched,
                    validateForm,

                }) => (
                    <div className="form-container">
                        <h1>Booking Details</h1>
                        <main className="main">
                            <Form noValidate>
                                <div className="form-group">
                                    <label htmlFor='res-date'>Choose Date</label>
                                    <Field name='_res_date'>
                                        {({
                                            field,
                                            form: { setFieldValue },
                                            meta,
                                        }) => (
                                            <div className="input-group">
                                                <input className='form-control' type='date' name='_res_date' id='res_date' {...field}
                                                    onChange={(e) => {
                                                        updateTimes({ type: 'UPDATE_TIMES', value: e.target.value });
                                                        setFieldValue('_res_date', e.target.value);
                                                    }} />
                                                {meta.touched && meta.error && (
                                                    <div className="invalid-alert error">{meta.error}</div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='res-time'>Choose Time</label>
                                    <Field name='_res_time'>
                                        {({
                                            field,
                                            meta,
                                        }) => (
                                            <div className="input-group">
                                                <select className='form-control' name='_res_time' id='res_time'  {...field}>
                                                    {availableTimes.map(availableTime => (
                                                        <option key={availableTime}>{availableTime}</option>
                                                    ))}
                                                </select>
                                                {meta.touched && meta.error && (
                                                    <div className="invalid-alert error">{meta.error}</div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='guests'>Numbe of Guests</label>
                                    <Field name='_guests'>
                                        {({
                                            field,
                                            meta,
                                        }) => (
                                            <div className="input-group">
                                                <input className='form-control' type='number' name='_guests' id='guests' min="1" max="8" {...field}
                                                    placeholder='number of guests' />
                                                {meta.touched && meta.error && (
                                                    <div className="invalid-alert error">{meta.error}</div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="occasion">Occasion</label>
                                    <Field name='_occasion'>
                                        {({
                                            field,
                                            meta,
                                        }) => (
                                            <div className="input-group">
                                                <select className='form-control' name='_occasion' id="occasion" {...field}>
                                                    <option>Birthday</option>
                                                    <option>Anniversary</option>
                                                </select>
                                                {meta.touched && meta.error && (
                                                    <div className="invalid-alert error">{meta.error}</div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='notes'>Notes</label>
                                    <Field name='_notes'>
                                        {({
                                            field,
                                            meta,
                                        }) => (
                                            <div className="input-group">
                                                <textarea className='form-control' type='text' name='_notes' id='notes' {...field}
                                                    rows={2} />
                                                {meta.touched && meta.error && (
                                                    <div className="invalid-alert error">{meta.error}</div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <button className='btn btn-block btn-primary m-none' type='submit'>Book Now!</button>
                                </div>
                            </Form>
                        </main>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default BookingForm;