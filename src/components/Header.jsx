import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import './Header.scss';

function Header() {
  return (
    <Box
      align="center"
      marginBottom={ 5 }
      className="Header"
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
      >
        <StarIcon />
        {' '}
        Solar System
        {' '}
        <StarIcon />
      </Typography>
    </Box>
  );
}

export default Header;
