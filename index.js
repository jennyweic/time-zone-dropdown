function showCity(event) {
  event.preventDefault();
  if (event.target.value === "paris") {
    updateParis();
  }

  if (event.target.value === "tokyo") {
    updateTokyo();
  }

  if (event.target.value === "sydney") {
    updateSydney();
  }
}
let selectedCity = document.querySelector("#city");
selectedCity.addEventListener("change", showCity);

function updateParis() {
  let parisTimeDate = moment()
    .tz("Europe/Paris")
    .format("dddd DD, MMMM YYYY, HH:mm a");
  alert(`It is ${parisTimeDate} in Paris`);
}

function updateTokyo() {
  let tokyoTimeDate = moment()
    .tz("Asia/Tokyo")
    .format("dddd DD, MMMM YYYY, HH:mm a");
  alert(`It is ${tokyoTimeDate} in Tokyo`);
}

function updateSydney() {
  let sydneyTimeDate = moment()
    .tz("Australia/Sydney")
    .format("dddd DD, MMMM YYYY, HH:mm a");
  alert(`It is ${sydneyTimeDate} in Sydney`);
}
