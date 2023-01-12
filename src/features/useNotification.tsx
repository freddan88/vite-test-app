import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { DataContext } from './dataContextProvider/DataContextProvider';
import ToastNotification from './toastNotification/ToastNotification';

interface IProps {
  notifications: ReactNode[];
}

const Notify: FC<IProps> = ({ notifications }) => {
  const el = document.getElementById('modal')!;
  return createPortal(notifications, el);
};

const useNotification = () => {
  const [notifications, setNotifications] = useState<ReactNode[]>([]);
  const [state, dispatch] = useContext(DataContext);

  const newNotification = () => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      <ToastNotification
        id={prevNotifications.length}
        key={prevNotifications.length}
      />,
    ]);
  };

  <Notify notifications={notifications} />;

  return { newNotification };
};

export default useNotification;
