import React from 'react';
import Grid from '@mui/material/Grid';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <Grid container spacing={ 1 }>
      {planets.map(({ name, image }) => (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      ))}
    </Grid>
  );
}

export default SolarSystem;
