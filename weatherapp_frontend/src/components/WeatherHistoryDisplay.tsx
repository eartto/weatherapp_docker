import React from 'react';
import { useAppDispatch, useTypedSelector } from '../store/index';
import { fetchWeatherReport } from '../reducers/weatherReportReducer';

const WeatherHistoryDisplay = () => {
  const dispatch = useAppDispatch();
  const weatherHistory = useTypedSelector((state) => state.WeatherHistory);

  return (
    <div className="Weather-History-display">
      <ul>
        {weatherHistory.map((city) => (
          <li key={city.city}>
            <button
              type="button"
              onClick={() => {
                dispatch(fetchWeatherReport(city.city));
              }}
            >
              {city.city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherHistoryDisplay;
