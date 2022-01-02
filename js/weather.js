
const API_KEY = 'aa869d91c875f43d941e54db924fd835';


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log("You live in", lat, lon, url);
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        
        weather.innerHTML =`${data.weather[0].main} (${data.main.temp} ℃)`;
        city.innerHTML = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
 