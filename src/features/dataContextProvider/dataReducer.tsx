import { ReactNode } from 'react';
import ToastNotification from '../toastNotification/ToastNotification';

type TNotification = {
  type: 'NEW_NOTIFICATION' | 'DELETE_NOTIFICATION';
  payload: any;
};

export type TActions = TNotification;

export const initialState = {
  notifications: [],
};

export type TState = { notifications: ReactNode[] | [] };

export const dataReducer = (state: TState, action: TActions) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION': {
      return {
        notifications: action.payload,
      };
    }
    default:
      return state;
  }
};
