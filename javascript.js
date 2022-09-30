// weather api key //

const api= '2c79c9ade4bd3fa5c29e7dbfcf365eee';


const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

// event listener & geolocation data collection //
window.addEventListener('load',() => {
    let long;
    let lat;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const base = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&long={long}&appid=2c79c9ade4bd3fa5c29e7dbfcf365eee';
// fetching data //
            fetch(base)
                .then((response) => {
                    return response.json
                })
                .then((data) => {
                    const {temp}=data.main;
                    const place=data.name;
                    const {description, icon}=data.weather[0];
                    const {sunrise, sunset}=data.sys;
                    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                    const fahrenheit = (temp*9)/5+32;
                    const sunriseGMT = new Date(sunrise * 1000);
                    const sunsetGMT = new Date(sunset * 1000);
// interact with DOM 
                    iconImg.src = iconUrl;     
                    loc.textContent = `${place}`;
                    desc.textContent = `${description}`;
                    tempC.textContent = `${temp.toFixed(2)} °C`;
                    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
                    sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                    sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;               
                });
        });
    }
} );
