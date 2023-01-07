import { mdiAccount, mdiCog, mdiHome } from '@mdi/js';

export const menuData = [
  {
    label: 'Home',
    link: '/dashboard',
    iconPath: mdiHome,
  },
  {
    label: 'Settings',
    iconPath: mdiCog,
    subMenu: [
      {
        label: 'Account',
        parentLabel: 'Settings',
        link: '/settings/account',
        iconPath: mdiAccount,
      },
      {
        label: 'Account2',
        parentLabel: 'Settings',
        link: '/settings/account2',
        iconPath: mdiAccount,
      },
      // {
      //   label: 'Account3',
      //   parentLabel: 'Settings',
      //   link: '/settings/account3',
      //   iconPath: mdiAccount,
      // },
    ],
  },
];
