import { FC } from 'react';
import MeatballsMenu from '../components/MeatballsMenu';
import TabNavigation from '../components/tabNavigation/TabNavigation';
import Sidebar from '../features/sidebar/Sidebar';

const SidebarTest01: FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <section className="mx-auto h-full w-11/12 bg-slate-900 p-8">
          <h1 className="text-center font-serif text-5xl text-slate-200">
            Hello
          </h1>
          <TabNavigation />
          <br />
          <br />
          <MeatballsMenu />
          <br />
          <br />
          <MeatballsMenu />
        </section>
      </main>
    </div>
  );
};

export default SidebarTest01;
