import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getWeatherData from '../api/data/weatherData';
import { createTracker } from '../api/data/weatherTrackers';

export default function NewLocationForm({ setTrackerState }) {
  const [inputText, setInputText] = useState('');

  function inputChanged(e) {
    setInputText((currentText) => ({
      ...currentText,
      [e.target.name]: e.target.value,
    }));
  }

  function submitButtonClick(e) {
    e.preventDefault();

    getWeatherData(inputText.location)
      .then(() => {
        createTracker({
          ...inputText,
        }).then(setTrackerState);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        window.alert('Could not find weather for location provided.');
      });
  }

  return (
    <form onSubmit={submitButtonClick} id="new-location-form">
      <div>Track New Location</div>
      <label htmlFor="location">
        <input name="location" id="location" onChange={inputChanged} />
      </label>
      <button type="submit" id="submit-button" className="btn btn-info">
        Submit
      </button>
    </form>
  );
}

NewLocationForm.propTypes = {
  setTrackerState: PropTypes.func.isRequired,
};
