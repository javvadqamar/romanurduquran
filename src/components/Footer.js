// Footer.js

import React from 'react';
import { Box, Typography, Link, styled } from '@mui/material';

const StyledFooter = styled(Box)({
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderTop: '1px solid #ccc',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#fff', // Set the background color as needed
});

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2">
        Translation: Abul Aala Maududi
      </Typography>
      <Typography variant="body2">
        Developed by{' '}
        <Link href="https://github.com/javvadqamar" color="inherit" target="_blank" rel="noopener noreferrer">
          Javvad
        </Link>
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
