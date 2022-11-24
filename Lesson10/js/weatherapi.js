/*//////////////////////////////////////////////////////////////////
const weather = document.querySelector('.weatherInfo');
const temperature = document.querySelector('#temperature');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');
// Get the weather data from the API - openweather.org 
  function capital_letter(str) 
  {
      str = str.split(" ");

      for (var i = 0; i < str.length; i++) {
          str[i] = `${str[i][0].toUpperCase()}${str[i].substr(1)}`;
      }
      return str.join(" ");
  }
  function  displayResults(weatherData) { 

    let weatherCard = document.createElement('section');
    let currentText = document.createElement('h2');
    let currentTemp = document.createElement('p');
    let currentTextLL = document.createElement('h2');
    let latitudeLongitude = document.createElement('img');
        latitudeLongitude.classList.add('lonlat');
    let gridLL = document.createElement('div')
    let latitudeNumber = document.createElement('p');
    let longitudeNumber = document.createElement('p');

    currentText.textContent = 'Current condition & ICON';

    const tF = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = `Current temperature in Fairbanks, Alaska is <strong>${tF}</strong> &deg;F`;

    weatherCard.appendChild(currentText);
    weatherCard.appendChild(currentTemp);

    for (let i = 0; i < weatherData.weather.length; i++) {
      
      let weatherIcon = document.createElement('img');
      let captionDesc = document.createElement('figcaption');

      const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[i].icon}.png`;
      const desc = weatherData.weather[i].description;

      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', `Picture of ${desc}`);
      captionDesc.textContent = `ICON for "${capital_letter(desc)}"`;

      weatherCard.appendChild(weatherIcon);
      weatherCard.appendChild(captionDesc);

    }
    
    currentTextLL.textContent = 'Latitude & Longitude';

    const globe = 'images/cdn.ico';
    const descGlobe = 'Globe showing latitude and longitude';

    latitudeLongitude.setAttribute('src', globe);
    latitudeLongitude.setAttribute('alt', descGlobe);

    let latitude = weatherData.coord.lat;
    let longitude = weatherData.coord.lon;

    latitudeNumber.textContent = latitude;
    longitudeNumber.textContent = longitude;

    gridLL.appendChild(latitudeNumber);
    gridLL.appendChild(longitudeNumber);

    weatherCard.appendChild(currentTextLL);
    weatherCard.appendChild(latitudeLongitude);
    weatherCard.appendChild(gridLL);

    document.querySelector('.weatherInfo').appendChild(weatherCard);
  }
  async function apiFetch() {
    try {
      console.log('inside fetch beforeURL');
      const url = 'https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=70576274fb494d1b32471985c55c97f3';
      const response = await fetch(url);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  if (weather) { apiFetch(); }

//////////////////////////////////////////////////////////*/

// select HTML elements in the document
const weather = document.querySelector('.weatherInfo');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=70576274fb494d1b32471985c55c97f3';

// Get the weather data from the API - openweather.org 
function capital_letter(str) 
{
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = `${str[i][0].toUpperCase()}${str[i].substr(1)}`;
    }
    return str.join(" ");
}

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      // displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();
//capitalize
function capitalize(string) {
  return '${string.charAt(0).toUpperCase()}${string.slice(1)}';
}
