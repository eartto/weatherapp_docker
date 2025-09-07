import { createSlice, Dispatch } from '@reduxjs/toolkit';

const initialState = {
  message: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      const notification = action.payload;
      state.message = notification;
    },
  },
});

export const setNotification = (message: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setMessage(message));
    setTimeout(() => {
      dispatch(setMessage(null));
    }, 5000);
  };
};

export const { setMessage } = notificationSlice.actions;

const notificationReducer = notificationSlice.reducer;

export default notificationReducer;
