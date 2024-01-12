import { defineStore } from 'pinia';
import { errorToast } from '../utils/toast'
import { getClient } from '../api/fetchUrl';

export const useAdminStore = defineStore('admin', {
  state: () => ({
    clients: [],
    loading: false
  }),

  actions: {
    async fetchClient() {
      this.loading = true;
      try {
        const res = await getClient()

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.clients = res.data;
      } catch (error) {
        errorToast(error.message)
      } finally {
        this.loading = false;
      }
    },


  }
})