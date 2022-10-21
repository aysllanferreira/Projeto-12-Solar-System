import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/PlanetCard.scss';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="PlanetCard">
        <p data-testid="planet-name" className="PlanetStatus PlanetPar">{planetName}</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className="PlanetStatus"
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
