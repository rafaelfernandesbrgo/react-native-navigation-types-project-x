import { createContext, useContext } from 'react';
import { errorMessages } from '../errors';

interface DrawerContextType {
  toggleDrawer: () => void;
}

export const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error(errorMessages.hooks.useDrawer.contextError);
  }
  return context;
};
