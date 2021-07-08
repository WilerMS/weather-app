let latitude = 40.4167;
let longitude = -3.70325;

navigator.geolocation.getCurrentPosition(position => {  
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
});

export {latitude, longitude};