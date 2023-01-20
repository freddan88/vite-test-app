import React, { ReactNode, useState } from 'react';
import ToastNotification from '../features/toastNotification/ToastNotification';

const NotificationTest01: React.FC = () => {
  const [notifications, setNotifications] = useState<ReactNode[]>([]);

  return (
    <div>
      <button
        className="m-4 rounded-lg bg-slate-800 p-2 text-white"
        onClick={() => {
          setNotifications((prevNotifications) => [
            ...prevNotifications,
            <ToastNotification
              id={prevNotifications.length}
              key={prevNotifications.length}
            />,
          ]);
        }}
      >
        Create Notification
      </button>
      {notifications}
    </div>
  );
};

export default NotificationTest01;
