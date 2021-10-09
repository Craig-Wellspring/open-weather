import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';

export default function WeatherCardContainer({ state }) {
  return (
    <div id="weather-card-container">
      {Object.keys(state).map((key) => (
        <WeatherCard key={key} meta={state[key]} />
      ))}
    </div>
  );
}

WeatherCardContainer.propTypes = {
  state: PropTypes.shape().isRequired,
};
