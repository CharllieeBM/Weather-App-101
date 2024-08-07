



function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-city");
    let city= document.querySelector("#main-city");
    city.innerHTML = searchInputElement.value;
  }

  function changedDay (date){
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
searchForm.addEventListener("submit", search);