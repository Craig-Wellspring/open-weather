import React, { useState, useEffect } from 'react';
import { getTrackers } from '../api/data/weatherTrackers';
import Header from './Header';
import NewLocationForm from './NewLocationForm';
import WeatherCardContainer from './WeatherCardContainer';

// const sampleData1 = {
//   location1: {
//     locationName: 'Nashville',
//     temp: 55,
//     weatherDesc: 'Cloudy',
//   },
//   location2: {
//     locationName: 'St. Louis',
//     temp: 75,
//     weatherDesc: 'Sunny',
//   },
// };

function Initialize() {
  const [trackerState, setTrackerState] = useState({});
  useEffect(
    () => setTrackerState((currentState) => {
      getTrackers().then((trackerList) => ({
        ...currentState,
        ...trackerList,
      }));
    }),
    [],
  );

  return (
    <>
      <Header text="Weather Forecast" />
      <WeatherCardContainer state={trackerState} />
      <NewLocationForm />
    </>
  );
}

export default Initialize;
