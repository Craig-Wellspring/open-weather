import axios from 'axios';
import { openWeatherConfig } from '../apiKeys';

const apiCall = 'https://api.openweathermap.org/data/2.5/forecast';

export default async function getWeatherData(locationName) {
  const weatherData = await axios.get(
    `${apiCall}?q=${locationName}&appid=${openWeatherConfig.apiKey}`,
  );

  return Object.values(weatherData.data);
}
