const API_KEY = "VAAKWNSFT5BVPH2KVJ2BCPU46";

export async function getWeather(location) {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`,
  );
  const weatherData = await data.json();
  console.log(weatherData);
  
  return formatWeatherData(weatherData);
}

const formatWeatherData = (weatherData) => {
  const locationName = weatherData.resolvedAddress;
  const temperature = weatherData.currentConditions.temp;
  const state = weatherData.currentConditions.conditions;
  const windSpeed = weatherData.currentConditions.windspeed;
  const humidity = weatherData.currentConditions.humidity;

  return {
    locationName,
    temperature,
    state,
    windSpeed,
    humidity
  };
};
