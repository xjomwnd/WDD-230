/*//////////////////////////////////////////////////////////////////////////////////////////////////////////
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=2152558&appid=70576274fb494d1b32471985c55c97f3'
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#temp').textContent = temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    let wind = jsObject.wind.speed;
    document.querySelector('#wind').textContent = wind;

    let temp_int = parseInt(temp);
    let wind_int = parseInt(wind);
    windchill(temp_int, wind_int);
};

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(0);
}

const windchill = (temp, wind) => {
    const windchill = document.querySelector('#windchill');
    const windDegree = document.querySelector('#windDegree');

    windchill.textContent = 'N/A';

    if (temp <= 50 && wind >= 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
        windchill.textContent = chill.toFixed(0);
        windDegree.innerHTML = '&#8457;';
    }

}

getWeather();

//////////////////////////////////////////////////////////////////////////////////////////////////*/
const apiURL ='https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=70576274fb494d1b32471985c55c97f3';

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
/*///////////////////////////////////////////////////////////////////////////////////////////