import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from './types';

export default defineStore(
  'app',
  () => {
    const user = ref<User>();
    const updateUser = (info: User) => {
      user.value = info;
    };
    const token = ref<string>();
    const setToken = (tokenStr: string) => {
      token.value = tokenStr;
    };

    return {
      user,
      updateUser,
      token,
      setToken
    };
  },
  {
    persist: {
      // 持久化存储
      paths: ['token']
    }
  }
);
