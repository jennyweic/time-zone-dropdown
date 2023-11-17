function showCity(event) {
  if (event.target.value === "paris") {
    alert("");
  }

  if (event.target.value === "tokyo") {
    alert("");
  }

  if (event.target.value === "sydney") {
    alert("");
  }
}
let selectedCity = document.querySelector("#city");
selectedCity.addEventListener("change", showCity);

//return paris current date and time
let parisTimeDate = moment()
  .tz("Europe/Paris")
  .format("[It is ]dddd DD, MMMM YYYY, HH:mm:s A [in] ${tz}");
let parisElement = document.querySelector("#paris");
parisElement.innerHTML = parisTimeDate;

//return tokyo current date and time
let tokyoTimeDate = moment()
  .tz("Asia/Tokyo")
  .format("[It is ]dddd DD, MMMM YYYY, HH:mm:s A [in] ${tz}");
let tokyoElement = document.querySelector("#tokyo");
tokyoElement.innerHTML = tokyoTimeDate;

//return sydney current date and time
let sydneyTimeDate = moment()
  .tz("Australia/Sydney")
  .format("[It is ]dddd DD, MMMM YYYY, HH:mm:s A [in] ${tz}");
let sydneyElement = document.querySelector("#sydney");
sydneyElement.innerHTML = sydneyTimeDate;
