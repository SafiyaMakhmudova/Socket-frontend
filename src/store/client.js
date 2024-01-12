import { defineStore } from 'pinia';
import { addNewClient } from '../api/fetchUrl';
import { errorToast, successToast } from '../utils/toast';

export const useClientStore = defineStore('client', {
  state: () => {
    return {
      client:{},
    };
  },
  actions: {
    async createClient(payload) {
      try {
        const res = await addNewClient(payload);
        if (res?.status != 201) {
          return;
        }
        successToast("Successfully")
      } catch (error) {
        errorToast('Invalid creadentials!');
      }
    }
    }
});
