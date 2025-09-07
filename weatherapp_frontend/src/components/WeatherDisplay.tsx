import React from 'react';
import { useTypedSelector } from '../store/index';

const WeatherDisplay = () => {
  const weatherReport = useTypedSelector(
    (state) => state.WeatherReport.weatherReport
  );

  if (weatherReport?.weather === (null || undefined)) {
    return <div className="Weather-display"></div>;
  }

  return (
    <div className="Weather-display">
      <div>Weather in {weatherReport.name}</div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherReport.weather![0].icon}@4x.png`}
          alt="weather icon"
        />
      </div>
      <div>{weatherReport.weather![0].description}</div>
      <div>{weatherReport.main!.temp} °C</div>
      <div>&emsp;</div>
      <div>feels like {weatherReport.main!.feels_like} °C</div>
      <div>wind: {weatherReport.wind!.speed} m/s</div>
    </div>
  );
};

export default WeatherDisplay;
