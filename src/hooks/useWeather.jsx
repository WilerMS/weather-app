import {useState, useRef} from 'react';
import mountains from './../const/ImgMountains'
import {latitude, longitude} from './../const/GeoLocation'


const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;


const useWeather = () => {

    const [weather, setWeather] = useState({});
    const mountain = useRef(mountains[Math.floor(Math.random() * 9)]);
  
    const fetchWeather = (param = null) => {

        const city = param ? param : localStorage.getItem('lastCity');
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=1&aqi=no&alerts=no`;
        const query = city ? city : `${latitude},${longitude}`;
        
        fetch(`${API_URL}&q=${query}`)
          .then(response => response.json())
          .then(({location, current, forecast}) => {
            console.log(forecast)
            const newWeather = {
              name: location.name, 
              country: location.country,
              temp: current.temp_c, 
              humidity: current.humidity, 
              unixTime: location.localtime_epoch,
              description: current.condition.text, 
              main: current.condition.code,
              tempMax: forecast.forecastday[0].day.maxtemp_c, 
              tempMin: forecast.forecastday[0].day.mintemp_c,
              now: current.is_day, hours: []
            };
            // //including higher hours to newWeather hours
            // forecast.forecastday[0].hour.forEach(i=>{
            //   (newWeather.unixTime<=i.time_epoch) &&
            //     newWeather.hours.push({time: i.time, condition: i.condition.code, temp: i.temp_c});
            // });
            
            //update the mountain aleatory in every fetch requests
            mountain.current = mountains[Math.floor(Math.random() * 9)];
            // update the state
            setWeather(newWeather); 
            localStorage.setItem('lastCity', `${newWeather.name}, ${newWeather.country}`);
          }).catch(error=>console.log(error));
      }

      return {fetchWeather, weather, mountain }
};

export default useWeather;
