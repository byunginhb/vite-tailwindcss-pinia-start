import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useServiceStore = defineStore('service', () => {
  const isLogin = ref(false);
  const isLoading = ref(false);
  const user = ref({});

  return { isLogin, isLoading, user };
});
