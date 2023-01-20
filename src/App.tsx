import { Route, Routes } from 'react-router-dom';
import SidebarTest01 from './features/sidebarTest01/SidebarTest01';
import MeatballsMenu from './Menu';
import NotificationTest01 from './pages/NotificationTest01';
import SwitchBoardTest from './pages/SwitchBoardTest';

function App() {
  return (
    <main>
      <div className="fixed top-5 right-5">
        <MeatballsMenu />
      </div>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/sidebar-test-01" element={<SidebarTest01 />} />
        <Route path="/switchboards-test-01" element={<SwitchBoardTest />} />
        <Route path="/notification-test-01" element={<NotificationTest01 />} />
      </Routes>
    </main>
  );
}

export default App;
