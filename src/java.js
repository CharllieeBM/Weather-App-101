function updateTempData(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#main-city");
  let descriptionElement = document.querySelector("#condition");

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
  console.log(response.data.condition.description);
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

/* function changedDay (date){
    let hours = date.getHours();  
    if (hours < 10) {
      hours = `0${hours}`;
    } 
    let minutes = date.getMinutes(); 
    if (minutes < 10) {
      minutes = `0${minutes}`;
    } 
    let day = date.getDay();
    
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  }
  
  let changedDay = days[day];
  return `${changedDay} ${hours}:${minutes}`;
}

let currentDate = new Date();
currentDateELement.innerHTML = changedDay(currentDate);

let searchForm = document.querySelector(".searchCity");
searchForm.addEventListener("submit", search); */
