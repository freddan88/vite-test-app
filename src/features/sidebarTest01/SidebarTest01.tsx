import { FC, useContext } from 'react';
import MeatballsMenu from '../../components/MeatballsMenu';
import TabNavigation from '../../components/tabNavigation/TabNavigation';
import { DataContext } from '../dataContextProvider/DataContextProvider';
import useNotification from '../useNotification';
import Sidebar from './sidebar/Sidebar';

const SidebarTest01: FC = () => {
  const { newNotification } = useNotification();
  const [state, dispatch] = useContext(DataContext);

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
          <br />
          <br />
          <button
            type="button"
            className="rounded-lg bg-slate-300 px-2 py-4 font-bold shadow-md"
            onClick={() => newNotification()}
          >
            New Notification
          </button>
        </section>
        {state.notifications}
      </main>
    </div>
  );
};

export default SidebarTest01;
