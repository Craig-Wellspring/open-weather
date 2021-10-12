import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getWeatherData from '../api/data/weatherData';

const initialWeatherData = {
  temp: 0,
  weatherDesc: 'Blank',
  weatherIcon: '03n',
  weatherAlt: 'weather',
};

export default function WeatherCard({ meta }) {
  const [weatherState, setWeatherState] = useState(initialWeatherData);

  useEffect(() => {
    getWeatherData(meta.location).then((weatherData) => {
      const refinedData = weatherData[3][0];
      setWeatherState({
        temp: ((refinedData.main.temp - 273.15) * 1.8 + 32).toFixed(),
        weatherDesc: refinedData.weather[0].description,
        weatherIcon: refinedData.weather[0].icon,
        weatherAlt: refinedData.weather[0].main,
      });
    });
  }, []);

  return (
    <div className="weather-card">
      <img
        src={`http://openweathermap.org/img/wn/${weatherState.weatherIcon}@2x.png`}
        alt={weatherState.weatherAlt}
      />
      <div>{meta.location}</div>
      <br />
      <h2>{weatherState.temp}°</h2>
      <div>{weatherState.weatherDesc}</div>
    </div>
  );
}

WeatherCard.propTypes = {
  meta: PropTypes.shape().isRequired,
};
