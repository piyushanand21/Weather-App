const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'efa8090677msh382873b3163ad98p1d5ba0jsn7cbc70270c02',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

        .then((response) => response.json())
        .then((response) => {
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            feels_like.innerHTML = response.feels_like
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

const cities = ["London", "New York", "Beijing", "Tokyo", "Dubai"]

cities.map((city) => {

    document.getElementById(city).innerHTML = city

    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)

        .then(response => response.json())
        .then(response => {
            document.getElementById(`${city}Feels`).innerHTML = response.feels_like
            document.getElementById(`${city}Humidity`).innerHTML = response.humidity
            document.getElementById(`${city}Max_temp`).innerHTML = response.max_temp
            document.getElementById(`${city}Min_temp`).innerHTML = response.min_temp
            document.getElementById(`${city}Sunrise`).innerHTML = response.sunrise
            document.getElementById(`${city}Sunset`).innerHTML = response.sunset
            document.getElementById(`${city}Temp`).innerHTML = response.temp
            document.getElementById(`${city}Wind_speed`).innerHTML = response.wind_speed
            document.getElementById(`${city}Wind_degrees`).innerHTML = response.wind_degrees
        }
        )
    return;
})