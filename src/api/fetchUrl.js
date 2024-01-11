import api from '../plugins/axios';

const url = import.meta.env.VITE_BASE_URL;


export function addNewClient(client) {
  return api.post(url + `/client/create`, client);
}

export function getClient() {
  return api.get(url + `/client`);
}

export function signin(data) {
  return api.post(url + `/user/signin`, data);
}


