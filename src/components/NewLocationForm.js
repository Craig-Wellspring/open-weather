import React, { useState } from 'react';
import { createTracker } from '../api/data/weatherTrackers';

export default function NewLocationForm() {
  const [inputText, setInputText] = useState('');

  function inputChanged(e) {
    setInputText((currentText) => ({
      ...currentText,
      [e.target.name]: e.target.value,
    }));
  }

  function submitButtonClick(e) {
    e.preventDefault();

    createTracker({
      locationName: inputText,
      temp: 69,
      weatherDesc: 'Overcast',
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
