function fetchTheWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=b2a1637dc461239099cfd34e97cebb6a")
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data)
            const weatherConditions = document.querySelector("#weatherConditions");
            weatherConditions.innerText = data.weather[0].description;
        });
}

function fetchWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=b2a1637dc461239099cfd34e97cebb6a&units=imperial")
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data)

            const tempEl = document.querySelector("#temp");
            tempEl.innerText = data.main.temp
            
                
        });
}

fetchTheWeather();
fetchWeather();
