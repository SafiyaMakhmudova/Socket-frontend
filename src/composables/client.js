import { useClientStore } from '../store/client';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

export const useClient = () => {
  const store = useAuthStore();
  const router = useRouter();
  const route = useRoute();

  const { loading , client} = storeToRefs(store);
  const { createClient } = useClientStore();

  return {
    createClient,
    loading,
    route,
    router,
    client
  };
};
