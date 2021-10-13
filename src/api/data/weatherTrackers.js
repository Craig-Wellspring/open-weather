import axios from 'axios';
import { firebaseConfig } from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

async function getTrackers() {
  const trackerList = await axios.get(`${dbURL}/.json`);

  return trackerList.data ? trackerList.data : {};
}

async function createTracker(obj) {
  const newTracker = await axios.post(`${dbURL}/.json`, obj);
  const firebaseKey = newTracker.data.name;
  await axios.patch(`${dbURL}/${firebaseKey}.json`, { firebaseKey });

  return getTrackers();
}

export { getTrackers, createTracker };
