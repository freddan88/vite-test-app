import { mdiAccount, mdiCog, mdiHome } from '@mdi/js';

type TMenuData = typeof menuData;

export type TMenuItem = TMenuData[0];

export interface navigationItem {
  itemLabel: string;
  iconPath: string;
  pageLink: string;
}

export interface subMenuItem {
  itemLabel: string;
  iconPath: string;
  subMenu: navigationItem[];
}

export const menuData = [
  {
    itemLabel: 'Home',
    pageLink: '/dashboard',
    iconPath: mdiHome,
  },
  {
    itemLabel: 'Settings',
    iconPath: mdiCog,
    subMenu: [
      {
        itemLabel: 'Account',
        pageLink: '/settings/account',
        iconPath: mdiAccount,
      },
      {
        itemLabel: 'Account2',
        pageLink: '/settings/account2',
        iconPath: mdiAccount,
      },
    ],
  },
];
