import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/MissionCard.scss';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="MissionCard">
        <p className="Titulo" data-testid="mission-name">{name}</p>
        <hr />
        <div className="datas">

          <div className="separaAi">
            <i className="fa-regular fa-calendar-days" />
            <p data-testid="mission-year">{year}</p>
          </div>

          <div className="separaAi">
            <i className="fa-regular fa-flag" />
            <p data-testid="mission-country">{country}</p>
          </div>

          <div className="separaAi">
            <i className="fa-solid fa-earth-europe" />
            <p data-testid="mission-destination">{destination}</p>
          </div>

        </div>

      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
