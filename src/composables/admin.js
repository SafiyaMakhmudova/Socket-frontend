import { useAdminStore } from '../store/admin';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { onMounted } from 'vue';

export const useAdmin = () => {
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const { loading , clients} = storeToRefs(store);
  const { fetchClient } = useAdminStore();

  onMounted(async()=> {
    await fetchClient();
  })

  return {
    loading,
    route,
    router,
    clients
  };
};
