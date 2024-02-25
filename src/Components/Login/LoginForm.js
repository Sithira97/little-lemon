import { Formik } from 'formik';

function LoginForm({ formData, setFormData, handleSubmit }) {

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
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
                    <h1>Login</h1>
                    <main className="main">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input className='form-control' type='email' name='_email' id='email'
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='guests'>Password</label>
                                <input className='form-control' type='password' placeholder="Enter Password" name='_password' id='password'
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}required />
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

export default LoginForm;