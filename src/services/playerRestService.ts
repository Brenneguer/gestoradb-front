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

async function findPlayerById(id: number) {
    if (!playerIdValido(id)) return;
    const user = await axios({
        method: 'GET',
        url: `${url}/players/${id}`
    }).then((response) => response.data);
    return user;
}

async function findAllPlayersByIdUnity(idUnity: number) {
    const players = axios({
        method: 'GET',
        url: `${url}/players`,
        params: { unity: idUnity }
    }).then((response) => response.data)
        .catch((error) => console.log(error.data))
    return players;
}

async function createPlayer(player: Player) {
    const response = axios({
        method: 'POST',
        url: `${url}/players`,
        data: player,
        params: { 'unity': player.unity.id }
    }).then((response) => response.data);
    return response;
}

async function updatePlayer(player: Player) {
    if (!playerIdValido(player.id)) return;
    const response = axios({
        method: 'PUT',
        url: `${url}/players/${player.id}`,
        data: player,
    }).then((response) => response.data);
    return response;
}

async function deletePlayer(player: Player) {
    if (!playerIdValido(player.id)) return;
    const response = axios({
        method: 'DELETE',
        url: `${url}/players/${player.id}`
    })
    return response;
}

const playerIdValido = (id: any) => {
    if (id === undefined || 0) {
        return false;
    }
    return true;
}

export { findPlayerById, findAllPlayersByIdUnity };