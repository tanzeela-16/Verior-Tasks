const apiKey = '203dc1b1702c86010d076f60f97ab348';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const errorMsg = document.getElementById('error');

const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();

  if (!city) {
    errorMsg.textContent = "Please enter a city name.";
    weatherDisplay.classList.add("hidden");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found.");
      }
      return response.json();
    })
    .then(data => {
      errorMsg.textContent = '';
      weatherDisplay.classList.remove("hidden");

      cityName.textContent = `${data.name}, ${data.sys.country}`;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temperature.textContent = data.main.temp;
      condition.textContent = data.weather[0].description;
      humidity.textContent = data.main.humidity;
      wind.textContent = data.wind.speed;
    })
    .catch(error => {
      weatherDisplay.classList.add("hidden");
      errorMsg.textContent = error.message;
    });
});
