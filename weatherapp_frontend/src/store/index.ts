import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import weatherReportReducer from '../reducers/weatherReportReducer';
import weatherHistoryReducer from '../reducers/weatherHistoryReducer';
import notificationReducer from '../reducers/notificationReducer';

const store = configureStore({
  reducer: {
    Notification: notificationReducer,
    WeatherHistory: weatherHistoryReducer,
    WeatherReport: weatherReportReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
