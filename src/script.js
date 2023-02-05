let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDate = document.querySelector(".dayDate");
currentDate.innerHTML = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonth = document.querySelector(".month");
currentMonth.innerHTML = months[now.getMonth()];

let currentDay = document.querySelector("#date");
currentDay.innerHTML = now.getDate();

let currentYear = document.querySelector(".year");
currentYear.innerHTML = now.getFullYear();

let currentTime = document.querySelector(".time");
currentTime.innerHTML = now.toLocaleTimeString();

function search(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#search-bar-input");
  let city = document.querySelector(".city");
  city.innerHTML = `${searchResult.value}`;
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", search);

function changeTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let todayTemp = document.querySelector(".todayTemp");
  todayTemp.innerHTML = `${temperature}`;
}

function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-bar-input");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "8162863e41464fd592f11e15d36fa1a3";
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCity).then(changeTemperature);
}
let form = document.querySelector("#search-bar");
form.addEventListener("submit", changeCity);
