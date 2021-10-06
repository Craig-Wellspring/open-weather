import React from 'react';
import NewLocationForm /* , { useState } */ from './NewLocationForm';

function WeatherCardContainer() {
  return (
    <div className="App">
      <h2>Weather Forecast</h2>
      <div id="weather-card-container" />
      <NewLocationForm />
    </div>
  );
}

export default WeatherCardContainer;
