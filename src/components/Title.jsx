import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Title({ headline }) {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        marginTop={ 8 }
      >
        {headline}
      </Typography>
    </Box>
  );
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
