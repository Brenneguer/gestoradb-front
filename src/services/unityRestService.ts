import axios from 'axios';

const url = process.env.REACT_APP_SERVER_URL;
export type Unity = {
    id?: string | number | undefined;
    name: string;
    description: string;
}

async function findUnityById(id: string | number) : Promise<Unity> {
  return axios({
    method: 'GET',
    url: `${url}/unity/${id}`,
  }).then((response) => response.data);
}

async function findAllUnities() : Promise<Unity[]> {
  return axios({
    method: 'GET',
    url: `${url}/unities`,
  }).then((response) => response.data);
}

async function createUnity(unity: Unity) : Promise<Unity> {
  return axios({
    method: 'POST',
    url: `${url}/unities`,
    data: unity,
  }).then((response) => response.data);
}

async function updateUnity(unity: Unity) : Promise<Unity> {
  return axios({
    method: 'PUT',
    url: `${url}/unities/${unity.id}`,
    data: unity,
  }).then((response) => response.data);
}

async function deleteUnity(unity: Unity) {
  axios({
    method: 'DELETE',
    url: `${url}/unities/${unity.id}`,
    data: unity,
  }).then((response) => response.data);
}

export {
  findUnityById, findAllUnities, createUnity, updateUnity, deleteUnity,
};
