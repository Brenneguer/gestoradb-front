import React, { createContext, ReactNode, useState } from 'react';
import { Unity } from '../services/unityRestService';
import { Player } from '../services/playerRestService';

export type AdbContextType = {
  unityContext: Unity | undefined;
  playerContext: Player | undefined;
  currentUnity: (unity: Unity) => void;
  currentPlayer: (player: Player) => void;
}

type AdbContextProviderProps = {
  children: ReactNode
}

export const AdbContext = createContext({} as AdbContextType);
export function AdbContextProvider(props: AdbContextProviderProps) {
  const { children } = props;
  const [unityContext, setUnity] = useState<Unity>();
  const [playerContext, setPlayer] = useState<Player>();

  const currentUnity = (unity: Unity) => setUnity(unity);
  const currentPlayer = (player: Player) => setPlayer(player);

  return (
    <AdbContext.Provider value={{
      unityContext,
      playerContext,
      currentUnity,
      currentPlayer,
    }}
    >
      {children}
    </AdbContext.Provider>
  );
}
