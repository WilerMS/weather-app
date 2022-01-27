import React, {useEffect} from 'react';
import Header from './Components/Header'
import WeatherInfo from './Components/WeatherInfo'
import {Container} from './Elements/AppElements'
import MoreWeatherInfo from './Components/MoreWeatherInfo'
import Background from './Components/Background'

import useWeather from './hooks/useWeather'

const App = () => {

  const {fetchWeather, weather, mountain} = useWeather();
  // eslint-disable-next-line
  useEffect(fetchWeather, []);

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
