import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function MissionCard({ name, year, country, destination }) {
  return (
    <Box
      sx={ {
        flexGrow: 1,
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '35px 0',
      } }
    >
      <Grid
        container
        rowSpacing={ 1 }
        columnSpacing={ { xs: 1, sm: 2, md: 3 } }
        height="120px"
      >
        <Grid xs={ 12 } sm={ 12 } md={ 12 }>
          <Box
            sx={ {
              textAlign: 'center',
              height: '100%',
            } }
          >
            <Typography
              variant="h5"
              component="h2"
              marginBottom="12px"
            >
              {name}
            </Typography>
            <hr />
          </Box>
        </Grid>
        <Grid xs={ 12 } sm={ 4 } md={ 4 }>
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              gap: '12px',
              justifyContent: 'center',
            } }
          >
            <i className="fa-regular fa-calendar-days" />
            <p data-testid="mission-year">{year}</p>
          </Box>
        </Grid>

        <Grid xs={ 12 } sm={ 4 } md={ 4 }>
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              gap: '12px',
              justifyContent: 'center',
            } }
          >
            <i className="fa-regular fa-flag" />
            <p data-testid="mission-country">{country}</p>
          </Box>
        </Grid>

        <Grid xs={ 12 } sm={ 4 } md={ 4 }>
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              gap: '12px',
              justifyContent: 'center',
            } }
          >
            <i className="fa-solid fa-earth-europe" />
            <p data-testid="mission-destination">{destination}</p>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
