import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherCard({ locationName }) {
  return <div className="weather-card">{locationName}</div>;
}

WeatherCard.propTypes = {
  locationName: PropTypes.string.isRequired,
};
