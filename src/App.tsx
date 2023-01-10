import { ReactNode, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MeatballsMenu from './components/MeatballsMenu';
import SidebarTest01 from './features/sidebarTest01/SidebarTest01';
import ToastNotification from './features/toastNotification/ToastNotification';

function App() {
  const [notifications, setNotifications] = useState<ReactNode[]>([]);

  return (
    <div className="h-screen overflow-hidden bg-slate-200">
      <Routes>
        <Route path="sidebar-test-01" element={<SidebarTest01 />} />
        <Route path="/" element={<p>Home</p>} />
      </Routes>
      <div className="fixed top-5 right-5">
        <MeatballsMenu />
      </div>
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
}

export default App;
