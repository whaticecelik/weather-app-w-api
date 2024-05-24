function getData() {
  const city = document.querySelector('.city').value;
  const apiKey = '741ee73580a50fdcc13c40c8fb0287be';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.cod === 200) {
              const result = `
                  <h2>${data.name}, ${data.sys.country}</h2>
                  <p>Temperature: ${data.main.temp}°C</p>
                  <p>Weather: ${data.weather[0].description}</p>
                  <p>Humidity: ${data.main.humidity}%</p>
                  <p>Wind Speed: ${data.wind.speed} m/s</p>
              `;
              document.querySelector('.result').innerHTML = result;
          } else {
              document.querySelector('.result').innerHTML = `<p class="error">City not found!</p>`;
          }
      })
      .catch(error => {
          document.querySelector('.result').innerHTML = `<p class="error">Error fetching weather data!</p>`;
      });
};


document.querySelector('.city').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      getData();
  }
});
document.querySelector('button').addEventListener('click', getData);



