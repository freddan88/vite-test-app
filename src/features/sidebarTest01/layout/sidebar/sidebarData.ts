import { mdiAccount, mdiCog, mdiHome } from '@mdi/js';

type TMenuData = typeof menuData;

export type TMenuItem = TMenuData[0];

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
        parentLabel: 'Settings',
        pageLink: '/settings/account',
        iconPath: mdiAccount,
      },
      {
        itemLabel: 'Account2',
        parentLabel: 'Settings',
        pageLink: '/settings/account2',
        iconPath: mdiAccount,
      },
    ],
  },
];
