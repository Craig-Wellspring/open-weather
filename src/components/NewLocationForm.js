import React, { useRef } from 'react';

export default function NewLocationForm() {
  const inputRef = useRef();

  function submitButtonClick() {
    const locationInput = inputRef.current.value;
    console.warn(locationInput);
    inputRef.current.value = null;
  }

  return (
    <div id="new-location-form">
      <div>Track New Location</div>
      <input type="text" ref={inputRef} />
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
