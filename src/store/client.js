import { defineStore } from 'pinia';
import { addNewClient } from '../api/fetchUrl';
import { errorToast, successToast } from '../utils/toast';

export const useClientStore = defineStore('client', {
  state: () => {
    return {
      client:{},
      loading: false
    };
  },
  actions: {
    async createClient(payload) {
      try {
        this.loading = true;
        const res = await addNewClient(payload);
        if (res?.data?.status !== 200) {
          return;
        }
        console.log(res.data);
        this.loading = false;

        successToast("Successfully")
      } catch (error) {
        errorToast('Invalid creadentials!');
      } finally {
        this.loading = false;
      }
    }
    }
});
