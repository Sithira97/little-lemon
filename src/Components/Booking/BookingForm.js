import { Formik, Form, Field } from 'formik';
import {
    Select, Input, Textarea, Button, Box,
    FormControl, FormErrorMessage, FormLabel, HStack
} from '@chakra-ui/react'
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
                onSubmit={(values) => handleSubmit(values)}
            >
                {(props) => (
                    <Form noValidate>
                        <Box className="form-group">
                            <Field name='_res_date'>
                                {({ field, form, meta }) => (
                                    <FormControl isInvalid={meta.touched && meta.error} isRequired>
                                        <FormLabel htmlFor='res_date'>Choose Date</FormLabel>
                                        <Input type='date' id='res_date' {...field}
                                            onChange={(e) => {
                                                updateTimes({ type: 'UPDATE_TIMES', value: e.target.value });
                                                form.setFieldValue('_res_date', e.target.value);
                                                document.getElementById('res_time').disabled = false;
                                            }} />
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box className="form-group">
                            <Field name='_res_time'>
                                {({ field, meta, }) => (
                                    <FormControl isInvalid={meta.touched && meta.error} isRequired>
                                        <FormLabel htmlFor='res_time'>Choose Time</FormLabel>
                                        <Select id='res_time' placeholder='Select a Time' disabled {...field}>
                                            {availableTimes.map(availableTime => (
                                                <option key={availableTime}>{availableTime}</option>
                                            ))}
                                        </Select>
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box className="form-group">
                            <Field name='_guests'>
                                {({ field, meta, form }) => (
                                    <FormControl isInvalid={meta.touched && meta.error} isRequired isReadOnly>
                                        <FormLabel htmlFor='guests'>Numbe of Guests</FormLabel>
                                        <HStack>
                                            <Button w='100%' onClick={(e) => {
                                                let guests = parseInt(field.value, 10) - 1;
                                                if (guests >= 1) {
                                                    form.setFieldValue("_guests", guests);
                                                }
                                            }}>-</Button>
                                            <Input {...field} type='number' id='guests' textAlign={'center'} />
                                            <Button w='100%' onClick={(e) => {
                                                let guests = parseInt(field.value, 10) + 1;
                                                if (guests <= 8) {
                                                    form.setFieldValue("_guests", guests);
                                                }
                                            }}>+</Button>
                                        </HStack>
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box className="form-group">
                            <Field name='_occasion'>
                                {({ field, meta, }) => (
                                    <FormControl isInvalid={meta.touched && meta.error}>
                                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                                        <Select id="occasion" placeholder='Select a Occation' {...field}>
                                            <option>Birthday</option>
                                            <option>Anniversary</option>
                                        </Select>
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box className="form-group">
                            <Field name='_notes'>
                                {({ field, meta, }) => (
                                    <FormControl isInvalid={meta.touched && meta.error}>
                                        <FormLabel htmlFor='notes'>Notes</FormLabel>
                                        <Textarea id='notes' {...field} rows={2} />
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box className="form-group">
                            <Button className='btn-block btn-primary' isLoading={props.isSubmitting} type='submit'>Book Now!</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default BookingForm;