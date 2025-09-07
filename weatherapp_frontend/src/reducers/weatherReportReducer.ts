import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import weatherService from '../services/weatherService';
import { WeatherReportState } from '../@types/weatherReport';

const initialState: WeatherReportState = {
  weatherReport: null,
  loading: 'idle',
  error: null,
};

const weatherReportSlice = createSlice({
  name: 'weatherReport',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      const weatherReport = action.payload;
      state.weatherReport = weatherReport;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherReport.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchWeatherReport.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.weatherReport = action.payload;
    });
    builder.addCase(fetchWeatherReport.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    });
  },
});

export const fetchWeatherReport = createAsyncThunk(
  'weatherReport/fetchWeatherReport',
  async (city: string) => {
    const response = await weatherService.getCity(city);
    return response;
  }
);

export const { setWeather } = weatherReportSlice.actions;

const weatherReportReducer = weatherReportSlice.reducer;

export default weatherReportReducer;
