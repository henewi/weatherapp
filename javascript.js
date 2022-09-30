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

            fetch(base)
                .then((response) => {
                    return response.json
                })
                .then((data) => {
                    const {temp}=data.main;
                    const {place}=data.name;
                    const {description, icon}=data.weather[0];
                    const {sunrise. sunset}=data.sys;
                });
        });
    }
} );

// query the API //