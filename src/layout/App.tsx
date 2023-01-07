import Sidebar from '../features/sidebar/Sidebar';

function App() {
  return (
    <div className="h-screen overflow-hidden bg-slate-200">
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1"></main>
      </div>
    </div>
  );
}

export default App;
