import { useContext } from 'react';
import { AdbContext, AdbContextType } from '../context/AdbContext';

export function useAdb(): AdbContextType {
  return useContext(AdbContext);
}
