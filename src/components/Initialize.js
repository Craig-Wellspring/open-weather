import React from 'react';
import Header from './Header';
import NewLocationForm from './NewLocationForm';
import WeatherCardContainer from './WeatherCardContainer';

function Initialize() {
  return (
    <>
      <Header text="Weather Forecast" />
      <WeatherCardContainer />
      <NewLocationForm />
    </>
  );
}

export default Initialize;
