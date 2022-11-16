const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=70576274fb494d1b32471985c55c97f3";
//Info for weather widget
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("temp").textContent =
      jsObject.list[0].main.temp.toFixed(0);
    document.getElementById("currently").textContent =
      jsObject.list[0].weather[0].main;
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;
    document.getElementById("windSpd").textContent =
      jsObject.list[0].wind.speed;
  });

//5 day forecast
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const noon = jsObject.list.filter((x) => x.dt_txt.includes("12:00:00"));
    let day = 0;
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    noon.forEach((forecast) => {
      let theDate = new Date(forecast.dt_txt);
      document.querySelector(`#dayofweek${day + 1}`).textContent = weekdays[theDate.getDay()];
      document.querySelector(`#forecast${day + 1}`).textContent = `${forecast.main.temp.toFixed(0)}℉`;

      const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      const desc = forecast.weather[0].description;
      document.getElementById(`img${day + 1}`).setAttribute("src", imagesrc);
      document.getElementById(`img${day + 1}`).setAttribute("alt", desc);
      day++;
    });
  });

// windChill factor
const temp = parseFloat(document.querySelector("#temp").textContent);
const windSpd = parseFloat(document.querySelector("#windSpd").textContent);
const windChill = document.querySelector("#windChill");
const f =
  35.74 +
  0.6215 * temp -
  35.775 * Math.pow(windSpd, 0.16) +
  0.4275 * temp * Math.pow(windSpd, 0.16);
if (temp < 50 && windSpd > 10) {
  windChill.textContent = f.toFixed(1) + "℉";
}
