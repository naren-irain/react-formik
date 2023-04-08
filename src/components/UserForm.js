import React from 'react';
import { Formik } from 'formik';
import { Container, Box, TextField, Button } from '@mui/material';
import { store } from '../store/store';
import {
    useNavigate
} from "react-router-dom";

const formValidation = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'First Name is Required';
    } else if (!values.lastName) {
        errors.lastName = 'Last Name is Required';
    } else if (!values.email) {
        errors.email = 'Email is Required';
    } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const UserForm = () => {
    const navigate = useNavigate();

    return (
    <Container maxWidth="sm">
        <h1>Add a User</h1>
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validate={values => formValidation(values)}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    store.dispatch({ type: 'addUser', data: values });
                    setSubmitting(false);
                    navigate("/users")
                }, 400);
            }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField 
                        error={errors.firstName && touched.firstName}
                        id="firstName" 
                        label="First Name" 
                        variant="filled" 
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        helperText={errors.firstName && touched.firstName && errors.firstName}
                    />
                </Box>
                <Box mb={2}>
                    <TextField 
                        error={errors.lastName && touched.lastName}
                        id="lastName" 
                        label="Last Name" 
                        variant="filled" 
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        helperText={errors.lastName && touched.lastName && errors.lastName}
                    />
                </Box>
                <Box mb={2}>
                    <TextField 
                        error={errors.email && touched.email}
                        id="email" 
                        label="Email" 
                        variant="filled" 
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        helperText={errors.email && touched.email && errors.email}
                    />
                </Box>
                <Box mb={2}>
                    <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        variant="outlined"
                    >Submit</Button>
                </Box>
            </form>
        )}
        </Formik>
  </Container>
)};

export default UserForm;