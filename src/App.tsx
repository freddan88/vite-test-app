import { ReactNode, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MeatballsMenu from './components/MeatballsMenu';
import SwitchBoardFilter from './components/switchBoardFilter/SwitchBoardFilter';
import SwitchBoardFilterNew from './components/SwitchBoardFilterNew';
import SidebarTest01 from './features/sidebarTest01/SidebarTest01';
import ToastNotification from './features/toastNotification/ToastNotification';

const switchBoardData = [
  {
    label: 'Test 1',
    value: 1,
  },
  {
    label: 'Test 2',
    value: 2,
  },
  {
    label: 'Test 3',
    value: 3,
  },
  {
    label: 'Test 4',
    value: 4,
  },
];

function App() {
  const [notifications, setNotifications] = useState<ReactNode[]>([]);

  return (
    <div className="h-screen overflow-hidden bg-slate-200">
      <SwitchBoardFilter
        value={1}
        name="test"
        data={switchBoardData}
        onChange={(value) => console.log(value)}
      />
      <br />
      <br />
      <SwitchBoardFilterNew
        filterData={switchBoardData}
        filterName="newSwitchboard"
        filterValue={1}
        onFilterChange={(e) => console.log(e)}
      />
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
