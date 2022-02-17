import React from "react";
import axios from "axios";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./form/button";
import Input from "./form/input";
import Error from "./form/error";
import { Box, Textarea } from "theme-ui";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        success: false,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Full name field is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email field is required"),
        message: Yup.string().required("Message field is required"),
      })}
      onSubmit={async (
        { name, email, message },
        { setSubmitting, resetForm, setFieldValue }
      ) => {
        try {
          const data = JSON.stringify({
            name,
            email,
            message,
          });
          const config = {
            "Content-Type": "application/json",
          };

          const response = await fetch(
            "https://api.formium.io/submit/5fd4e3d79f50150001bac31d/africadev",
            {
              method: "POST",
              body: data,
              headers: config,
            }
          );
          console.log("rr", response);

          setSubmitting(false);
          setFieldValue("success", true);
          setTimeout(() => resetForm(), 1000);
        } catch (err) {
          setSubmitting(false);
          setFieldValue("success", false);
          alert(`Something went wrong, please try again ${err}`); // eslint-disable-line
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <Box sx={styles.inputField}>
            <Input
              as={FastField}
              type="text"
              name="name"
              component="input"
              aria-label="name"
              placeholder="Full name*"
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name="name" />
          </Box>
          <Box sx={styles.inputField}>
            <Input
              id="email"
              aria-label="email"
              component="input"
              as={FastField}
              type="email"
              name="email"
              placeholder="Email*"
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name="email" />
          </Box>
          {
            <Box sx={styles.inputField}>
              <Input
                as={FastField}
                component="textarea"
                aria-label="message"
                id="message"
                rows="8"
                type="textarea "
                name="message"
                placeholder="Message*"
                error={touched.message && errors.message}
              />
              <ErrorMessage component={Error} name="message" />
            </Box>
          }

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
            <Button>Submit</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

const styles = {
  input: {
    width: " 100%",
    boxSizing: "border-box",
    border: "2px solid ",
    borderColor: "accent",
    padding: " 0.8rem 1rem",
    borderRadius: "7px",
    marginBottom: "0.5rem",
    transition: "0.3s",

    error: {
      borderColor: "#ff4136",
    },

    "&:placeholder": {
      color: "#a7a7a7",
    },
  },
  center: {
    textAlign: "left",

    h4: {
      fontWeight: "normal",
    },
  },

  inputField: {
    position: "relative",
    marginBottom: "1rem",
  },
};

export default ContactForm;
