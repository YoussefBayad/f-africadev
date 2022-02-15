import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
// import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import Button from './form/button';
import Input from './form/input';
import Error from './form/error';
import { Box } from 'theme-ui';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        recaptcha: '',
        success: false,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Full name field is required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Email field is required'),
        message: Yup.string().required('Message field is required'),
        recaptcha: Yup.string().required('Robots are not welcome yet!'),
      })}
      onSubmit={async (
        { name, email, message },
        { setSubmitting, resetForm, setFieldValue }
      ) => {
        try {
          await axios({
            method: 'POST',
            url: `${process.env.FORMIK_ENDPOINT}`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({
              name,
              email,
              message,
            }),
          });
          setSubmitting(false);
          setFieldValue('success', true);
          setTimeout(() => resetForm(), 6000);
        } catch (err) {
          setSubmitting(false);
          setFieldValue('success', false);
          alert('Something went wrong, please try again!'); // eslint-disable-line
        }
      }}>
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <Box sx={styles.inputField}>
            <Input
              as={FastField}
              type='text'
              name='name'
              component='input'
              aria-label='name'
              placeholder='Full name*'
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name='name' />
          </Box>
          <Box sx={styles.inputField}>
            <Input
              id='email'
              aria-label='email'
              component='input'
              as={FastField}
              type='email'
              name='email'
              placeholder='Email*'
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name='email' />
          </Box>
          <Box sx={styles.inputField}>
            <Input
              as={FastField}
              as='textarea'
              aria-label='message'
              id='message'
              rows='8'
              type='text'
              name='message'
              placeholder='Message*'
              error={touched.message && errors.message}
            />
            <ErrorMessage component={Error} name='message' />
          </Box>
          {/* {values.name && values.email && values.message && (
            <Box sx={styles.inputField}>
              <FastField
                component={Recaptcha}
                sitekey={process.env.RECAPTCHA_KEY}
                name='recaptcha'
                onChange={(value) => setFieldValue('recaptcha', value)}
              />
              <ErrorMessage component={Error} name='recaptcha' />
            </Box>
          )} */}
          {values.success && (
            <Box sx={styles.inputField}>
              <Box sx={styles.center}>
                <h4>
                  Your message has been successfully sent, I will get back to
                  you ASAP!
                </h4>
              </Box>
            </Box>
          )}
          <Box sx={styles.center}>
            <Button secondary type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

const styles = {
  center: {
    textAlign: 'left',

    h4: {
      fontWeight: 'normal',
    },
  },

  inputField: {
    position: 'relative',
    marginBottom: '1rem',
  },
};

export default ContactForm;
