// weather api key //

const api= '2c79c9ade4bd3fa5c29e7dbfcf365eee';

// event listener & geolocation data collection //
window.addEventListener('load',() => {
    let long;
    let lat;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long=position.coords.longitude;
            lat=position.coords.lat;
            const base = 'https://api.openweathermap.org/data/2.5/weather?lat=$%7Blat%7D&lon=$%7Blong%7D&appid=$%7Bapi%7D&units=metric';
// fetching data //
            fetch(base)
                .then((response) => {
                    return response.json
                })
                .then((data) => {
                    console.log(data);
                    const {temp}=data.main;
                    const {place}=data.name;
                    const {description, icon}=data.weather[0];
                    const {sunrise, sunset}=data.sys;
                    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
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

// query the API //