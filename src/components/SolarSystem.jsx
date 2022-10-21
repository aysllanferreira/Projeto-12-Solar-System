import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../style/SolarSystem.scss';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <div className="Planeta">
          {planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          ))}
        </div>
      </div>
    );
  }
}
