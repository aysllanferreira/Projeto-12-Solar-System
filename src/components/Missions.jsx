import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

function Missions() {
  return (
    <Box sx={ { flexGrow: 1 } }>
      <Title headline="Missões" />
      <Grid container spacing={ 3 }>
        {missions.map(({ name, year, country, destination }) => (
          <Grid xs={ 12 } sm={ 6 } key={ name }>
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Missions;
