/*//////////////////////////////////////////////////////////////////////////////
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=70576274fb494d1b32471985c55c97f3'

const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#current-temp').textContent = temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

};

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(2);
}

getWeather();


/*////////////////////////////////////////////////////////////////////////////*/
const temperature = document.querySelector('#temperature');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');
// Get the weather data from the API - openweather.org
async function apiFetch() {
    try {
      console.log('inside fetch beforeURL');
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=766cc4c5847dc1e46a5927930e1b85f6';
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
