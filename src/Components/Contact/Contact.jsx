import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Desc,
  ErrorText,
  Title,
  Wrapper
} from './ContactStyled';

const Contact = () => {
  const [open, setOpen] = useState(false);

  // Form state for controlled inputs
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Object to store validation errors
  const [errors, setErrors] = useState({});

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s()]{10,20}$/;

  // onChange handlers with live validation
  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (!val) {
        newErrors.email = 'Email is required';
      } else if (!emailRegex.test(val)) {
        newErrors.email = 'Invalid email address';
      } else {
        delete newErrors.email;
      }
      return newErrors;
    });
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (!val) {
        newErrors.name = 'Name is required';
      } else if (val.length < 3) {
        newErrors.name = 'Name must be at least 3 characters';
      } else {
        delete newErrors.name;
      }
      return newErrors;
    });
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setPhone(val);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (!val) {
        newErrors.phone = 'Contact number is required';
      } else if (!phoneRegex.test(val)) {
        newErrors.phone = 'Invalid phone number';
      } else {
        delete newErrors.phone;
      }
      return newErrors;
    });
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setMessage(val);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (!val) {
        newErrors.message = 'Message is required';
      } else if (val.length < 3) {
        newErrors.message = 'Message must be at least 5 characters';
      } else {
        delete newErrors.message;
      }
      return newErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Re-run validation on submit to catch any untouched or invalid fields.
    let validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!name) {
      validationErrors.name = 'Name is required';
    } else if (name.length < 3) {
      validationErrors.name = 'Name must be at least 3 characters';
    }

    if (!phone) {
      validationErrors.phone = 'Contact number is required';
    } else if (!phoneRegex.test(phone)) {
      validationErrors.phone = 'Invalid phone number';
    }

    if (!message) {
      validationErrors.message = 'Message is required';
    } else if (message.length < 5) {
      validationErrors.message = 'Message must be at least 5 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // EmailJS parameters
    const serviceID = 'service_g1vypdw';
    const templateID = 'template_ky0m9q2';
    const publicID = 'iJ8C5xen08mRnFQsz';

    const templateParams = {
      from_email: email,
      from_name: name,
      from_phone: phone,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicID)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setOpen(true);
        // Clear the form fields after a successful send
        setEmail('');
        setName('');
        setPhone('');
        setMessage('');
        setErrors({});
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
      });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
          <ContactInput
            placeholder="Your Name"
            name="from_name"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
          <ContactInput
            placeholder="Contact Number"
            name="from_phone"
            type='number'
            value={phone}
            onChange={handlePhoneChange}
          />
          {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={9000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          onClose={handleSnackbarClose}
          PaperProps={{
            sx: { zIndex: 1000 },
          }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Email sent successfully!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
