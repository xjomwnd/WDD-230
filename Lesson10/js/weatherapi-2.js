const weather = document.querySelector('.weatherInfo');


  //////////////////////////
  //  Capitalize letters  //
  //////////////////////////

  function capital_letter(str) 
  {
      str = str.split(" ");

      for (var i = 0; i < str.length; i++) {
          str[i] = `${str[i][0].toUpperCase()}${str[i].substr(1)}`;
      }
      return str.join(" ");
  }

  /////////////////////////
  //       Display       //
  /////////////////////////

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
    

    // TEMPERATURE

    currentText.textContent = 'Current condition & ICON';

    const tF = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = `Current temperature in Fairbanks, Alaska is <strong>${tF}</strong> &deg;F`;

    weatherCard.appendChild(currentText);
    weatherCard.appendChild(currentTemp);


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

    // LATITUDE & LONGITUDE

    
    

    document.querySelector('.weatherInfo').appendChild(weatherCard);
  }


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