const API_KEY = "97a3dc52e681bc1fde391fbeff99d2e8";
const lang = "kr"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}`
    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        console.log(data.name, data.weather[0].main);
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;

    }))
}

function onGeoError () {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
