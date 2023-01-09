import { Link, Route, Routes } from 'react-router-dom';
import MeatballsMenu from './components/MeatballsMenu';
import SidebarTest01 from './features/sidebarTest01/SidebarTest01';

function App() {
  return (
    <div className="h-screen overflow-hidden bg-slate-200">
      <Routes>
        <Route path="sidebar-test-01" element={<SidebarTest01 />} />
        <Route path="/" element={<p>Home</p>} />
      </Routes>
      <div className="fixed top-5 right-5">
        <MeatballsMenu />
      </div>
    </div>
  );
}

export default App;
