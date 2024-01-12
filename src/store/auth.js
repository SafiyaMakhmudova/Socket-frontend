import { defineStore } from 'pinia';
import { signin } from '../api/fetchUrl';
import { errorToast, successToast } from '../utils/toast';
import router from '../router';
import { RT_LOGIN } from '../constants/routes/auth';

export const useAuthStore = defineStore('auth', {
  state: () => {
    
  },
  actions: {
    async login(payload) {
      try {
        const res = await signin(payload);
        if (res?.status !== 201) {
          return;
        }
        if (res.data.admin.is_admin) {
          router.replace('/list');
          this.saveUser(res?.data);
          return;
        }
        successToast("Successfully")
      } catch (error) {
        errorToast('Invalid creadentials!');
      }
    },
    saveUser(data) {
      localStorage.setItem('access_token', data?.tokens.access_token);
    },
    clearUser() {
      localStorage.removeItem('access_token');
      this.user = null;
      router.replace({ name: RT_LOGIN });
    }
  }
});
