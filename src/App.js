import React, {useState, useEffect, useRef} from 'react';
import Header from './Components/Header'
import {latitude, longitude} from './const/GeoLocation'
import WeatherInfo from './Components/WeatherInfo'
import {Container} from './Elements/AppElements'
import MoreWeatherInfo from './Components/MoreWeatherInfo'
import mountains from './const/ImgMountains'
import Background from './Components/Background'

const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;
const App = () => {

  const [weather, setWeather] = useState({});
  const mountain = useRef(mountains[Math.floor(Math.random() * 9)]);

  useEffect(()=>{localStorage.getItem('lastCity') ? fetchWeather({city: localStorage.getItem('lastCity')}) 
                                                  : fetchWeather({latitude, longitude});}, []);
 
  const fetchWeather = ({city, latitude, longitude}) => {
    let API_URL = city ? `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no` 
                       : `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`;
    fetch(API_URL).then(response => response.json()).then(data => {
      const newWeather = {
        name: data.location.name, country: data.location.country,
        temp: data.current.temp_c, humidity: data.current.humidity, unixTime: data.location.localtime_epoch,
        description: data.current.condition.text, main: data.current.condition.code,
        tempMax: data.forecast.forecastday[0].day.maxtemp_c, tempMin: data.forecast.forecastday[0].day.mintemp_c,
        now: data.current.is_day, hours: []
      };
      //including higher hours to newWeather hours
      data.forecast.forecastday[0].hour.forEach(i=>{
        (newWeather.unixTime<=i.time_epoch) &&
          newWeather.hours.push({time: i.time, condition: i.condition.code, temp: i.temp_c});
      });
      console.log(newWeather)
      //update the mountain aleatory in every fetch requests
      mountain.current = mountains[Math.floor(Math.random() * 9)];
      // update the state
      setWeather(newWeather); 
      localStorage.setItem('lastCity', `${newWeather.name}, ${newWeather.country}`);
    }).catch(error=>console.log(error));
  }

  return (
      <Container className="App" now={weather.now}>
        <Header fetchWeather={fetchWeather} weather={weather}/>
        <WeatherInfo weather={weather}/>
        <MoreWeatherInfo weather={weather} />
        <Background weather={weather} mountain={mountain}/>
      </Container>
  );
}
export default App;
