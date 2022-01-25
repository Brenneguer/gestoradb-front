import axios from 'axios';

const url = process.env.REACT_APP_SERVER_URL
export type Unity = {
    id?: string | number | undefined;
    nome: string;
    description: string;
}

async function findUnityById(id: string | number ) {
    if (!unityIdValido(id)) return;
    const response = axios({
        method: 'GET',
        url: `${url}/unity/${id}`
    });
}

async function findAllUnities() {
    return axios({
        method: 'GET',
        url: `${url}/unities`
    }).then((response) => response.data);
}

async function createUnity(unity: Unity) {
    const response = axios({
        method: 'POST',
        url: `${url}/unities`,
        data: unity
    }).then((response) => response.data);
}

async function updateUnity(unity: Unity) {
    if (!unityIdValido(unity.id)) return;
    const response = axios({
        method: 'PUT',
        url: `${url}/unities/${unity.id}`,
        data: unity
    }).then((response) => response.data);
}

async function deleteUnity(unity: Unity) {
    if (!unityIdValido(unity.id)) return;
    const response = axios({
        method: 'DELETE',
        url: `${url}/unities/${unity.id}`,
        data: unity
    }).then((response) => response.data);
}

const unityIdValido = (id: any) => {
    if (id === undefined || id === 0) {
        return false;
    }
    return true;
}

export { findUnityById, findAllUnities }