function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  /* console.log(searchInput.value); */
  let cityElement = document.querySelector("#main-city");
  cityElement.innerHTML = searchInput.value;
}
// call the API
// search for the city

let searchFormElement = document.querySelector("#search-city");
searchFormElement.addEventListener("submit", handleSearchSubmit);

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
