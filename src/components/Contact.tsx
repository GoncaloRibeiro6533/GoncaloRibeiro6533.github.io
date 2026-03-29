import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen.</p>
          <Box className="contact_card">
            <a className="contact_email" href="mailto:goncaloribeirocs@gmail.com" aria-label="Send email to Gonçalo Ribeiro">
              <MailOutlineIcon />
              <span>goncaloribeirocs@gmail.com</span>
            </a>
            <Button
              component="a"
              href="mailto:goncaloribeirocs@gmail.com"
              variant="contained"
              className="contact_button"
            >
              Send Email
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;