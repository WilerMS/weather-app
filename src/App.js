import React, {useState, useEffect, useRef} from 'react';
import Form from './Components/Form';
import ButtonEditCity from './Elements/ButtonEditCity'
import CityName from './Elements/CityName'
import location from './const/GeoLocation'
import Svg from './Components/Svg'
import WeatherInfo from './Components/WeatherInfo'
import {Container} from './Elements/AppElements'
import MoreWeatherInfo from './Components/MoreWeatherInfo'
import Particle from './Components/Particle'
import Mountain from './Components/Mountain'
import mountains from './const/ImgMountains'
import ShowMore from './Elements/ShowMore.jsx'

const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [enableFormCity, setEnableFormCity] = useState(false);

  const mountain = useRef(mountains[Math.floor(Math.random() * 9)]);

  useEffect(()=>{
    if (localStorage.getItem('lastCity')) {
      let lastCity = localStorage.getItem('lastCity');
      fetchWeather({city: lastCity})
    } else {
      fetchWeather({latitude: location.latitude, longitude: location.longitude})
    }
  }, []);
 
  const fetchWeather = ({city, latitude, longitude}) => {
    let API_URL = city ? `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no` 
                       : `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`;
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const newWeather = {
        name: data.location.name,
        country: data.location.country,
        latitude: data.location.lat,
        longitude: data.location.lon,
        date: data.location.localtime,
        clouds: data.current.cloud,
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        description: data.current.condition.text,
        main: data.current.condition.code,
        tempMax: data.forecast.forecastday[0].day.maxtemp_c,
        tempMin: data.forecast.forecastday[0].day.mintemp_c,
        now: data.current.is_day,
        unixTime: data.location.localtime_epoch,
        hours: []
      };

        //including higher hours to newWeather hours
        data.forecast.forecastday[0].hour.forEach(i=>{
          (newWeather.unixTime<i.time_epoch) &&
            newWeather.hours.push({time: i.time, condition: i.condition.code, temp: i.temp_c});
        });

      //update the mountain aleatory in every fetch requests
      mountain.current = mountains[Math.floor(Math.random() * 9)];

      // update the state
      setWeather(newWeather); 

      localStorage.setItem('lastCity', `${newWeather.name}, ${newWeather.country}`);
    })
    .catch(error=>console.log(error));
  }

  return (
    <Container className="App" now={weather.now}>
      <div className="header">
        {enableFormCity ? (<Form 
              enableFormCity={enableFormCity}
              setEnableFormCity={setEnableFormCity}
              setCity={setCity}
              city={city}
              fetchWeather={fetchWeather} />):
        (<><CityName name={weather.name} country={weather.country}/>
              <ButtonEditCity enableFormCity={enableFormCity} setEnableFormCity={setEnableFormCity}/>
        </>)}
      </div>
      <WeatherInfo weather={weather}/>
      <MoreWeatherInfo weather={weather} />
      <Svg now={weather.now}/>
      <Mountain mountain={mountain} weather={weather}/>
      <Particle now={weather.now} main={weather.main}/>
      <ShowMore/>
    </Container>
  );
}

export default App;
