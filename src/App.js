import React, {useState, useEffect, useRef} from 'react';
import Form from './Components/Form';
import ButtonEditCity from './Elements/ButtonEditCity'
import CityName from './Elements/CityName'
import location from './const/GeoLocation'
import Svg from './Components/Svg'
import WeatherInfo from './Components/WeatherInfo'
import InitialWeather from './const/InitialWeather'
import {Container} from './Elements/AppElements'
import MoreWeatherInfo from './Components/MoreWeatherInfo'
import Particle from './Components/Particle'
import Mountain from './Components/Mountain'
import mountains from './const/ImgMountains'
import ShowMore from './Elements/ShowMore.jsx'

const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {

  

  const [weather, setWeather] = useState(InitialWeather);
  const [city, setCity] = useState('');
  const [enableFormCity, setEnableFormCity] = useState(false);

  const mountain = useRef(mountains[Math.floor(Math.random() * 9)]);

  useEffect(()=>fetchWeather({
    latitude: location.latitude, longitude: location.longitude
  }), []);

  const fetchWeather = ({city, latitude, longitude}) => {
    let API_URL = city ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}` 
                       : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const newWeather = {
        name: data.name,
        clouds: data.clouds.all,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        temp: data.main.temp,
        humidity: data.main.humidity,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        country: data.sys.country,
        description: data.weather[0].description,
        main: data.weather[0].main,
        unixTime: data.dt,
        now: 'day'
      };

        // Parsing the Unix Time to an aprox time in this country
      let date = new Date();
      let actualTime = date.getUTCHours() + date.getUTCMinutes()/60;
      newWeather.time = (actualTime + 1 + Math.round(newWeather.longitude/15));

        //setting weather.now to day or night depend of the hours
      if (newWeather.time > 19 || newWeather.time < 7) { 
        newWeather.now = 'night';
      } else  {
        newWeather.now = 'day';
      }

      //update the mountain aleatory in every fetch requests
      mountain.current = mountains[Math.floor(Math.random() * 9)];

      // update the state
      setWeather(newWeather);
      console.log(newWeather);
    })
    .catch(error=>console.log(error));
  }

  return (
    <Container className="App" now={weather.now}>
      <div className="header">
        {enableFormCity ?
          (<Form 
              enableFormCity={enableFormCity}
              setEnableFormCity={setEnableFormCity}
              setCity={setCity}
              city={city}
              fetchWeather={fetchWeather}
            />
          ):(
            <>
              <CityName name={weather.name} country={weather.country}/>
              <ButtonEditCity
                enableFormCity={enableFormCity}
                setEnableFormCity={setEnableFormCity}
              />
            </>
          )
        }
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
