// import React from 'react';
import React, { useState } from 'react';
import Header from './Header';
import NewLocationForm from './NewLocationForm';
import WeatherCardContainer from './WeatherCardContainer';

const sampleData1 = {
  location1: {
    locationName: 'Nashville',
    temp: 55,
    weatherDesc: 'Cloudy',
  },
  location2: {
    locationName: 'St. Louis',
    temp: 75,
    weatherDesc: 'Sunny',
  },
};

// const sampleData2 = {
//   location1: {
//     locationName: 'Chicago',
//     temp: 40,
//     weatherDesc: 'Rainy',
//   },
// };

function Initialize() {
  const [trackerState, setTrackerState] = useState({});
  setTrackerState((currentState) => ({ ...currentState, sampleData1 }));
  // console.warn(setTrackerState);

  return (
    <>
      <Header text="Weather Forecast" />
      {/* <WeatherCardContainer state={sampleData} /> */}
      <WeatherCardContainer state={trackerState} />
      <NewLocationForm />
    </>
  );
}

export default Initialize;
