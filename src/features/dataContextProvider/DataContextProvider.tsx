import React, { createContext, ReactNode, useReducer } from 'react';
import { dataReducer, initialState, TActions, TState } from './dataReducer';

interface IProps {
  children: ReactNode;
}

export const DataContext = createContext<[TState, React.Dispatch<TActions>]>([
  initialState,
  () => {},
]);

const DataContextProvider: React.FC<IProps> = ({ children }) => {
  const reducerState = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={reducerState}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
