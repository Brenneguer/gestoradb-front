import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { findAllPlayersByIdUnity, Player } from '../services/playerRestService';
import { Unity } from '../services/unityRestService';

export type PlayersProps = {
  unity: Unity | undefined;
}

export function Players(props: PlayersProps) {
  const { unity } = props;
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function findPlayers() {
      const result = await findAllPlayersByIdUnity(unity?.id);
      setPlayers(result);
    }
    if (players.length === 0) {
      findPlayers().then();
    }
  });

  const dateFormat = (date: string):string => `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth</th>
            <th>Bio</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            players?.map(
              (player) => (
                <tr key={player.id}>
                  <td>{player.nick}</td>
                  <td>{dateFormat(player.birth)}</td>
                  <td>{player.bio}</td>
                  <td>Open</td>
                </tr>
              ),
            )
          }
        </tbody>
      </Table>
    </div>
  );
}
