// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = 'https://openweathermap.org/api'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=city_name&units=metric&appid=${apiKey}`;

// Select the element where you want to display the weather data
const weatherDataElement = document.querySelector('.weather-data');

// Fetch weather data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data and update the HTML
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHTML = `
      <p>City: ${cityName}</p>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;

    weatherDataElement.innerHTML = weatherHTML;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    weatherDataElement.innerHTML = '<p>Error fetching weather data</p>';
  });

  // ...

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  // Process and update the HTML as before
})
.catch(error => {
  console.error('Error fetching weather data:', error);
  weatherDataElement.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
});

