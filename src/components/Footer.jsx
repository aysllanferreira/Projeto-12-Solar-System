import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Footer() {
  const getDate = new Date().getFullYear();
  return (
    <Box
      sx={ {
        textAlign: 'center',
        marginTop: '20px',
      } }
    >
      <Typography
        variant="h6"
        component="p"
      >

        Made with
        {' '}
        <span style={ { color: 'red' } }>
          ♥
        </span>
        {' '}
        by:
        {' '}
        <Link
          href="https://www.linkedin.com/in/aysllan-ferreira-61aa58228/"
          target="_blank"
          rel="noreferrer"
          sx={ {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          } }
        >
          Aysllan Ferreira

        </Link>
        {' '}
        {`${getDate}`}
      </Typography>
    </Box>
  );
}

export default Footer;
