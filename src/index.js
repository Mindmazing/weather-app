import "./css/reset.css";
import "./css/style.css";

import { getWeather } from "./js/weather-data.js";
import { DomElements } from "./js/dom-elements.js";

const recentSearches = [];

function displayRecentSearches() {
  // delete everything from recent searches
  DomElements.recentSearches.innerHTML = "";
  // add only first 5 searches
  for (let i = 0; i < 5; i++) {
    const recentSearchElement = document.createElement("li");
    recentSearchElement.textContent = recentSearches[i];
    DomElements.recentSearches.appendChild(recentSearchElement);
  }
}

function displayWeather(location) {
  DomElements.mainWeatherDataContainer.classList.add("loading-effect");
  DomElements.weatherDetailsContainer.classList.add("loading-effect");
  DomElements.locationName.style.filter = "blur(5px)";

  // trigger get weather function
  getWeather(location)
    .then((weatherData) => {
      // End loading state
      DomElements.mainWeatherDataContainer.classList.remove("loading-effect");
      DomElements.weatherDetailsContainer.classList.remove("loading-effect");
      DomElements.locationName.style.filter = "none";

      // change weather temperature and location
      DomElements.locationName.textContent = weatherData.locationName;
      DomElements.weatherTemperature.textContent =
        weatherData.temperature + "\u00B0C";
      DomElements.locationDateTime.textContent = weatherData.dateTime;

      // change weather details
      DomElements.detailsWeatherState.querySelector("span").textContent =
        weatherData.state;
      DomElements.detailsWindSpeed.querySelector(
        "span:last-child",
      ).textContent = weatherData.windSpeed + " km/h";

      DomElements.detailsHumidityPercentage.querySelector(
        "span:last-child",
      ).textContent = weatherData.humidity + "%";

      // update recent searches
      recentSearches.unshift(weatherData.locationName);
      displayRecentSearches();
    })
    .catch((error) => {
      DomElements.locationName.textContent = "No location found";
      DomElements.locationName.style.filter = "none";
      DomElements.weatherTemperature.textContent = "00.0" + "\u00B0C";
    });
}

displayWeather("Taipei");

DomElements.searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  // get input value
  const location = DomElements.searchInput.value;
  // Start Loading State
  displayWeather(location);
});
