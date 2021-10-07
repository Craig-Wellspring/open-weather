import React from 'react';
import propTypes from 'prop-types';

export default function Header({ text }) {
  return (
    <div id="header">
      <h2>{text}</h2>
    </div>
  );
}

Header.propTypes = {
  text: propTypes.string.isRequired,
};
