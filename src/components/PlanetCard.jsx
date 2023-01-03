import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './PlanetCard.scss';
import Grid from '@mui/material/Grid';

function PlanetCard({ planetName, planetImage }) {
  return (
    <Grid xs={ 12 } sm={ 6 } md={ 3 } lg={ 3 }>
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
        } }
      >
        <Typography
          className="PlanetCard__title"
          variant="h5"
          component="h2"
          gutterBottom
        >
          {planetName}

        </Typography>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className="PlanetStatus"
        />
      </Box>
    </Grid>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
