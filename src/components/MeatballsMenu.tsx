import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { FC, RefObject, useEffect, useRef, useState } from 'react';
import TableContextMenu from './TableContextMenu';

interface IProps {}

let menuElementHeight = 0;

const MeatballsMenu: FC<IProps> = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuElement: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (menuElement.current) {
      const menuDiv = menuElement.current;
      menuElementHeight = menuDiv.getBoundingClientRect().height;
    }
  }, [menuElement.current]);

  return (
    <div
      tabIndex={0}
      ref={menuElement}
      className="relative inline-block cursor-pointer rounded-full bg-slate-100"
      onClick={() => setOpenMenu((prevValue) => !prevValue)}
      onBlur={(e) => {
        if (menuElement.current) {
          if (!menuElement.current.contains(e.relatedTarget))
            setOpenMenu(false);
        }
      }}
    >
      <Icon path={mdiDotsHorizontal} size={1} />
      {openMenu && <TableContextMenu menuPosition={menuElementHeight} />}
    </div>
  );
};

export default MeatballsMenu;
