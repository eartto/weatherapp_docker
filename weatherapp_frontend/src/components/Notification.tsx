import React from 'react';
import { useTypedSelector } from '../store';

const Notification = () => {
  const notification = useTypedSelector((state) => state.Notification.message);

  if (notification === null) {
    return <div className="Notification"></div>;
  }
  return <div className="Notification">{notification}</div>;
};

export default Notification;
