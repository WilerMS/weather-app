const location = {latitude: 40.4167,longitude: -3.70325};
navigator.geolocation.getCurrentPosition(position => {  
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
});

export default location;