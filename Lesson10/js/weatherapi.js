// select output elements
const temperature = document.querySelector('#temperature');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');
// Get the weather data from the API - openweather.org
async function apiFetch(){
    try{
      console.log('inside fetch beforeURL');
      consturl='https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=70576274fb494d1b32471985c55c97f3';
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
  if (weather) { apiFetch();
   }



















