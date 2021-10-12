import axios from 'axios';
import { firebaseConfig } from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

async function getTrackers() {
  const trackerList = await axios.get(`${dbURL}/.json`);

  return trackerList.data ? Object.values(trackerList.data) : {};
}

async function createTracker(obj) {
  const newTracker = await axios.post(`${dbURL}/.json`, obj);
  const firebaseKey = newTracker.data.name;
  await axios.patch(`${dbURL}/${firebaseKey}.json`, { firebaseKey });
  const currentTrackers = await getTrackers();

  return currentTrackers;
}

export { getTrackers, createTracker };
