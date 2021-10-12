import React from 'react';
import PropTypes from 'prop-types';
import getWeatherData from '../api/data/weatherData';

export default function WeatherCard({ meta }) {
  const weatherIcon = '03n';

  let temp = 0;
  let weatherDesc = 'Blank';

  getWeatherData(meta.location).then((weatherData) => {
    console.warn(weatherData);
    temp = 69;
    weatherDesc = 'Foggy';
  });

  return (
    <div className="weather-card">
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="Weather icon"
      />
      <div>{meta.location}</div>
      <br />
      <div>
        {temp}° | {weatherDesc}
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  meta: PropTypes.shape().isRequired,
};
