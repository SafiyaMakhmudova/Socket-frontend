import { defineStore } from 'pinia';
import { signin } from '../api/fetchUrl';
import { errorToast, successToast } from '../utils/toast';
import decodeJwt from '../function/tokenParser';
import router from '../router';
import { RT_LOGIN } from '../constants/routes/auth';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user,
      loading: false
    };
  },
  actions: {
    async login(payload) {
      try {
        this.loading = true;
        const res = await signin(payload);
        if (res?.data?.status !== 200) {
          return;
        }
        console.log(res.data);
        this.loading = false;
        const decodedJwt = decodeJwt(res?.data?.token);

        if (decodedJwt.is_admin) {
          router.replace('/list');
          this.saveUser(res?.data);
          return;
        }
        successToast("Successfully")
      } catch (error) {
        errorToast('Invalid creadentials!');
      } finally {
        this.loading = false;
      }
    },
    saveUser(data) {
      localStorage.setItem('access_token', data?.token);
      this.user = data?.person;
    },
    clearUser() {
      localStorage.removeItem('access_token');
      this.user = null;
      router.replace({ name: RT_LOGIN });
    }
  }
});
