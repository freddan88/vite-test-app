import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { FC, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import MenuLinks from './MenuLinks';

let menuElementHeight = 0;

const Menu: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuElement: RefObject<HTMLDivElement> = useRef(null);

  const handleScroll = useCallback(() => {
    setOpenMenu(false);
  }, []);

  useEffect(() => {
    if (menuElement.current) {
      const menuDiv = menuElement.current;
      menuElementHeight = menuDiv.getBoundingClientRect().height;
    }
  }, [menuElement.current]);

  useEffect(() => {
    if (openMenu) {
      document.addEventListener('scroll', handleScroll);
    } else {
      document.removeEventListener('scroll', handleScroll);
    }
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [openMenu]);

  return (
    <div
      tabIndex={0}
      ref={menuElement}
      className="relative inline-block cursor-pointer select-none rounded-full bg-slate-100"
      onClick={() => setOpenMenu((prevValue) => !prevValue)}
      onBlur={(e) => {
        if (menuElement.current) {
          if (!menuElement.current.contains(e.relatedTarget)) {
            setOpenMenu(false);
          }
        }
      }}
    >
      <Icon path={mdiDotsHorizontal} size={1} />
      {openMenu && <MenuLinks menuPosition={menuElementHeight} />}
    </div>
  );
};

export default Menu;
