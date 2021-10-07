import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherCard({ meta }) {
  return (
    <div className="weather-card">
      <div>{meta.locationName}</div>
      <br />
      <div>
        {meta.temp}° | {meta.weatherDesc}
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  meta: PropTypes.shape().isRequired,
};
