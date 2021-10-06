import React from 'react';
// import WeatherCard from './WeatherCard';

function submitButtonClick() {
  console.warn('Submit clicked');
  // document.getElementById('weather-card-container').appendChild(<WeatherCard locationName="test" />);
}

export default function NewLocationForm() {
  return (
    <div id="new-location-form">
      <div>Track New Location</div>
      <input type="text" />
      <button
        type="button"
        id="submit-button"
        className="btn btn-info"
        onClick={submitButtonClick}
      >
        Submit
      </button>
    </div>
  );
}
