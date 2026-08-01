export const DomElements = (() => {
  const weatherTemperature = document.querySelector(
    ".main-weather-temperature",
  );
  const locationName = document.querySelector(".main-weather-details h1");
  const locationDateTime = document.querySelector(".main-weather-details p");

  const searchBar = document.querySelector(".search-form-container form");
  const searchInput = searchBar.querySelector("input");

  const detailsWeatherState = document.querySelector(".weather-state");
  const detailsHumidityPercentage = document.querySelector(".humidity-percentage");
  const detailsWindSpeed = document.querySelector(".wind-speed");

  const recentSearches = document.querySelector(".recent-searches ul");

  // containers
  const weatherDetailsContainer = document.querySelector(".location-weather-details");
  const mainWeatherDataContainer = document.querySelector(".main-weather-data");
  return {
    weatherTemperature,
    locationName,
    locationDateTime,
    searchBar,
    searchInput,
    detailsWeatherState,
    detailsHumidityPercentage,
    detailsWindSpeed,
    weatherDetailsContainer,
    mainWeatherDataContainer,
    recentSearches
  };
})();
