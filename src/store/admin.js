import {defineStore} from 'pinia';

import { getClient } from '../api/fetchUrl';

export const useAdminStore  = defineStore('admin',{
  state: ()=> ({
    clients:[],
    loading: false
  }),
  
  actions: {
    async fetchClient() {
      this.loading = true;
      try {
        const res = await getClient()
        console.log(res.data);
        
        if (!res.data?.client && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.clients = res.data;
      } catch (error) {
        if (error instanceof Error) {
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    
  }
})