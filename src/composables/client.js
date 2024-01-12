import { useClientStore } from '../store/client';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

export const useClient = () => {
  const store = useClientStore();
  const router = useRouter();
  const route = useRoute();
  const yes = ref('false')
  const no = ref('true')

  const {client} = storeToRefs(store);
  const { createClient } = useClientStore();

  function iconBtn() {
    if (yes.value == false) {
      yes.value = true
    } else {
      yes.value = false
    }
    if (no.value == true) {
      no.value = false
    } else {
      no.value = true
    }
  }

  return {
    createClient,
    route,
    router,
    client,
    yes,
    iconBtn,
    no,
  };
};
