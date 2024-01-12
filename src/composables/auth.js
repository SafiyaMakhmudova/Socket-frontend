import { useAuthStore } from '../store/auth';
import { useRouter, useRoute } from 'vue-router';

export const useAuth = () => {
  const router = useRouter();
  const route = useRoute();

  const { login } = useAuthStore();

  return {
    login,
    route,
    router
  };
};
