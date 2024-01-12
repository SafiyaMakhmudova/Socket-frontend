import { useAdminStore } from '../store/admin';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

export const useAdmin = () => {
  const store = useAuthStore();
  const router = useRouter();
  const route = useRoute();

  const { loading , clients} = storeToRefs(store);
  const { fetchClient } = useAdminStore();

  return {
    fetchClient,
    loading,
    route,
    router,
    clients
  };
};
