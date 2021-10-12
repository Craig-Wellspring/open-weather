import React, { useState, useEffect } from 'react';
import { getTrackers } from '../api/data/weatherTrackers';
import Header from './Header';
import NewLocationForm from './NewLocationForm';
import WeatherCardContainer from './WeatherCardContainer';

function Initialize() {
  const [trackerState, setTrackerState] = useState({});

  useEffect(() => {
    getTrackers().then((trackerList) => {
      setTrackerState({ ...trackerState, ...trackerList });
    });
  }, []);

  return (
    <>
      <Header text="Weather Forecast" />
      <WeatherCardContainer state={trackerState} />
      <NewLocationForm />
    </>
  );
}

export default Initialize;
