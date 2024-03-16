import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    Input, Button, Box,
    FormControl, FormErrorMessage, FormLabel
} from '@chakra-ui/react'

function LoginForm({ formData, handleSubmit }) {

    const loginFormSchema = Yup.object().shape({
        _email: Yup.string()
            .email('Must be a valid email')
            .required('Enter your registered email to login'),
        _password: Yup.string()
            .min(8, 'Minmum 8 characters should be on password!')
            .max(20, 'Maximum allowed password should have 20 characters!')
            .required('Enter your password to login'),
    });


    return (
        <>
            <Formik
                initialValues={formData}
                validationSchema={loginFormSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {(props) => (
                    <Form noValidate>
                        <Box className="form-group">
                            <Field name='_email'>
                                {({ field, meta, }) => (
                                    <FormControl isInvalid={meta.touched && meta.error} isRequired>
                                        <FormLabel htmlFor='email'><b>Email</b></FormLabel>
                                        <Input type='email' id='email' {...field} />
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box className="form-group">
                            <Field name='_password'>
                                {({ field, meta, }) => (
                                    <FormControl isInvalid={meta.touched && meta.error} isRequired>
                                        <FormLabel htmlFor='password'><b>Password</b></FormLabel>
                                        <Input type='password' id='password' {...field} />
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box className="form-group">
                            <Button className='btn-block btn-primary m-none' isLoading={props.isSubmitting} type='submit'>Login</Button>
                        </Box>
                    </Form>

                )}
            </Formik>
        </>
    )
}

export default LoginForm;