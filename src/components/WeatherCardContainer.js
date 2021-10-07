import React from 'react';
import WeatherCard from './WeatherCard';

const sampleData = {
  location1: {
    locationName: 'Nashville',
    temp: 55,
    weatherDesc: 'Cloudy',
  },
  location2: {
    locationName: 'St. Louis',
    temp: 75,
    weatherDesc: 'Sunny',
  },
};

class WeatherCardContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      weatherData: sampleData,
    };
  }

  render() {
    const { weatherData } = this.state;
    return (
      <div id="weather-card-container">
        {Object.keys(weatherData).map((key) => (
          <WeatherCard key={key} meta={weatherData[key]} />
        ))}
      </div>
    );
  }
}

export default WeatherCardContainer;
