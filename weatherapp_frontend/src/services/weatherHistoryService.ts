import axios from 'axios';
import { URL } from '../constants/urls';
import { weatherHistory } from '../@types/weatherHistory';

const getAll = async () => {
  const weatherHistory = await axios.get(URL.WEATHERHISTORY);
  return weatherHistory.data;
};

const create = async (cityName: string) => {
  const newCity: weatherHistory = {
    city: cityName,
  };
  const result = await axios.post(URL.WEATHERHISTORY, newCity);
  return result.data;
};

const remove = () => {
  return axios.delete(URL.WEATHERHISTORY);
};

export default { getAll, create, remove };
