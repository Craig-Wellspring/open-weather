import React from 'react';

function submitButtonClick() {
  console.warn('Submit clicked');
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
