function updateTempData(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#main-city");
  let descriptionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon-image");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  timeElement.innerHTML = changedDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
}

function changedDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day}, ${hours}:${minutes},`;
}

function searchCity(city) {
  let apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  // console.log(apiUrl); // - check to see if its works
  axios.get(apiUrl).then(updateTempData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");

  searchCity(searchInput.value);
}
// call the API
// search for the city ;

let searchFormElement = document.querySelector("#search-city");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Toronto");
