const weather = document.querySelector('.weatherInfo'); 
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=70576274fb494d1b32471985c55c97f3'; 

async function apiFetch() {
    try {
      console.log('inside fetch beforeURL');
      
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
//capitalize
function capitalize(string) {
    return '${string.charAt(0).toUpperCase()}${string.slice(1)}';
}
//display the results
 function displayResults(weatherData) {
    let weatherCard = document.createElement('section');
    let currentText = document.createElement('h2');
    let currentTemp = document.createElement('p');
    let currentTextLL = document.createElement('h2');
const tF = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = `Current temperature in Fairbanks, Alaska is <strong>${tF}</strong> &deg;F`;
    weatherCard.appendChild(currentText);
    weatherCard.appendChild(currentTemp);
document.querySelector('.weatherInfo').appendChild(weatherCard);
// WEATHER ICON - multiple weather events

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

  }  


 
  