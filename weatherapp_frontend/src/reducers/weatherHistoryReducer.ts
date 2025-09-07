import { createSlice, Dispatch } from '@reduxjs/toolkit';
import weatherHistoryService from '../services/weatherHistoryService';
import { weatherHistory } from '../@types/weatherHistory';

const initialState = [] as weatherHistory[];

const weatherHistorySlice = createSlice({
  name: 'weatherHistory',
  initialState,
  reducers: {
    setHistory: (state, action) => {
      const history = action.payload;
      state = history.reverse();
      return state;
    },
    addHistory: (state, action) => {
      const city = action.payload;
      state.push(city);
    },
    removeHistory: (state) => {
      weatherHistoryService.remove();
      state.pop();
    },
  },
});

export const fetchWeatherHistory = () => {
  return async (dispatch: Dispatch) => {
    const weatherHistory = await weatherHistoryService.getAll();
    dispatch(setHistory(weatherHistory));
  };
};

export const addWeatherHistory = (city: string) => {
  return async (dispatch: Dispatch) => {
    const cities = (await weatherHistoryService.getAll()) as weatherHistory[];
    if (!cities.some((c) => c.city === city)) {
      const newCity = await weatherHistoryService.create(city);
      dispatch(setHistory(cities));
      dispatch(addHistory(newCity));
      dispatch(removeHistory());
    }
  };
};

export const { setHistory, addHistory, removeHistory } =
  weatherHistorySlice.actions;

const weatherHistoryReducer = weatherHistorySlice.reducer;

export default weatherHistoryReducer;
