import axios from 'axios';
import { URL } from '../constants/urls';

const getCity = async (cityName: string) => {
  const response = await axios.get(URL.WEATHER, {
    // params is extracted as "query" on serverside
    params: {
      city: cityName,
    },
  });
  return response.data;
};

export default { getCity };
