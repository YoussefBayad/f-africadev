import React from 'react';
import { Container, Box } from 'theme-ui';
import contact from 'assets/contact.svg';
import ContactForm from '../components/contactForm';
import TextFeature from '../components/text-feature';

const data = {
  subTitle: 'Contact Us',
  title: 'AFRICAN BUSINESS DEVELOPMENT',
};
const Contact = () => (
  <section id='contact'>
    <Container>
      <TextFeature subTitle={data.subTitle} title={data.title} />{' '}
      <Box sx={styles.wrapper}>
        <Box sx={styles.details}>
          <ContactForm />
        </Box>
        <Box sx={styles.thumbnail}>
          <img
            src={contact}
            alt='I’m John and I’m a Backend & Devops engineer!'
          />
        </Box>
      </Box>
    </Container>
  </section>
);

export default Contact;

const styles = {
  wrapper: {
    padding: '4rem 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '@media (max-width: 960px) ': {
      flexDirection: 'column',
    },
  },
  details: {
    flex: '1',
    pr: '2rem',

    ' @media (max-width: 960px)': {
      pr: 0,
      width: '100%',
      order: '1',
    },

    h1: {
      marginBottom: '2rem',
      fontSize: '26pt',
      color: '#212121',
    },

    p: {
      marginBottom: '2.5rem',
      fontSize: '20pt',
      fontWeight: 'normal',
      lineHeight: '1.3',
      color: '#707070',
    },
  },
  thumbnail: {
    flex: '1',

    '@media (max-width: 960px) ': {
      width: '100%',
      marginBottom: '2rem',
    },

    img: {
      width: '100%',
    },
  },
};
