import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CitySearchBox from './components/CitySearchBox';
import Notification from './components/Notification';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherHistoryHeader from './components/WeatherHistoryHeader';
import WeatherHistoryDisplay from './components/WeatherHistoryDisplay';
import Buffer from './components/Buffer';
import { useAppDispatch } from './store';
import { fetchWeatherHistory } from './reducers/weatherHistoryReducer';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeatherHistory());
  }, []);

  return (
    <div className="App">
      <Header />
      <CitySearchBox />
      <Notification />
      <WeatherDisplay />
      <WeatherHistoryHeader />
      <WeatherHistoryDisplay />
      <Buffer />
    </div>
  );
};

export default App;
