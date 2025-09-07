import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { fetchWeatherReport } from '../reducers/weatherReportReducer';
import { addWeatherHistory } from '../reducers/weatherHistoryReducer';
import { setNotification } from '../reducers/notificationReducer';

const CitySearchBox = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getWeather = async () => {
    const response = await dispatch(fetchWeatherReport(search));
    if (response.payload !== undefined) {
      const cityName = response.payload.name;
      dispatch(addWeatherHistory(cityName));
      setSearch('');
    } else {
      dispatch(setNotification('No city found with that name'));
    }
  };

  return (
    <div className="Find-city">
      City: <input name="search" value={search} onChange={handleSearchChange} />{' '}
      <button onClick={() => getWeather()}>show weather</button>
    </div>
  );
};

export default CitySearchBox;
