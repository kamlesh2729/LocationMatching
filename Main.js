
// let url = 'https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=
// ';
let latitude = document.querySelector('[data-lat]');
let longitude = document.querySelector('[data-lon]');
let altitude = document.querySelector("[data-alt]");

function GetLocation() {
    navigator.geolocation.getCurrentPosition(
        (data) => {
            console.log(data.coords);
            latitude.innerHTML = data.coords.latitude;
            longitude.innerHTML = data.coords.longitude;
            altitude.innerHTML = data.coords.accuracy;
            // console.log(`"latitude code is :" ${data.coords.latitude}`);
            // console.log(`"longitude code is :" ${data.coords.longitude}`);
            // console.log(`"altitude code is :" ${data.coords.accuracy}`);
        },
        (e) => { },
        {enableHighAccuracy: true, timeout: 3000}
    );
}