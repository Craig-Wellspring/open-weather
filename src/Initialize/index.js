import React from 'react';
import NewLocationForm from '../components/NewLocationForm';
// , { useState }

function Initialize() {
  return (
    <div className="App">
      <h2>Weather Forecast</h2>
      <div id="weather-card-container" />
      <NewLocationForm />
    </div>
  );
}

export default Initialize;
