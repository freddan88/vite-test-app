import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {}

let timeoutTimer: number;

export const Toast: React.FC<{ id: number; onClick: () => void }> = (props) => {
  return (
    <div className="m-4 max-w-md bg-slate-800 p-6 text-slate-100">
      <div className="flex items-center justify-between pb-8">
        <h2>Test Notification</h2>
        <button onClick={() => props.onClick()}>
          <Icon path={mdiClose} size={1} />
        </button>
      </div>
      <p>Notification for id: {props.id}</p>
    </div>
  );
};

const ToastNotification: React.FC<{
  id: number;
}> = (props) => {
  const [isShowing, setIsShowing] = useState<boolean>(true);

  const domNode = document.getElementById('modal') as HTMLDivElement;

  useEffect(() => {
    timeoutTimer = setTimeout(() => {
      setIsShowing(false);
    }, 5000);
    return () => {
      clearTimeout(timeoutTimer);
    };
  }, []);

  if (isShowing) {
    return createPortal(
      <Toast
        id={props.id}
        onClick={() => {
          setIsShowing(false);
          clearTimeout(timeoutTimer);
        }}
      />,
      domNode
    );
  }

  return null;
};

export default ToastNotification;
