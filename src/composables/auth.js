import { useAuthStore } from '../store/auth';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

export const useAuth = () => {
  const store = useAuthStore();
  const router = useRouter();
  const route = useRoute();

  const { loading } = storeToRefs(store);
  const { login } = useAuthStore();

  return {
    login,
    loading,
    route,
    router
  };
};
