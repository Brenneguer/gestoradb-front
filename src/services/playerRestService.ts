import axios from 'axios';
import { Unity } from './unityRestService';

const url = process.env.REACT_APP_SERVER_URL;

export type Player = {
    id?: string | number | undefined;
    nick: string;
    birth: Date;
    bio: string;
    unity: Unity;
}

async function findPlayerById(id: number) : Promise<Player> {
  return axios({
    method: 'GET',
    url: `${url}/players/${id}`,
  }).then((response) => response.data);
}

async function findAllPlayersByIdUnity(idUnity: number) : Promise<Player> {
  return axios({
    method: 'GET',
    url: `${url}/players`,
    params: { unity: idUnity },
  }).then((response) => response.data)
    .catch((error) => console.log(error.data));
}

async function createPlayer(player: Player) : Promise<Player> {
  return axios({
    method: 'POST',
    url: `${url}/players`,
    data: player,
    params: { unity: player.unity.id },
  }).then((response) => response.data);
}

async function updatePlayer(player: Player) : Promise<Player> {
  return axios({
    method: 'PUT',
    url: `${url}/players/${player.id}`,
    data: player,
  }).then((response) => response.data);
}

async function deletePlayer(player: Player) {
  await axios({
    method: 'DELETE',
    url: `${url}/players/${player.id}`,
  });
}

export {
  findPlayerById, findAllPlayersByIdUnity, createPlayer, updatePlayer, deletePlayer,
};
