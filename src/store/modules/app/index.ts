import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore(
  'app',
  () => {
    const token = ref<string>();
    const setToken = (tokenStr: string) => {
      token.value = tokenStr;
    };

    const permissionIds = ref<string[]>([]);
    const setPermissionIds = (ids: string[]) => {
      permissionIds.value = ids;
    };
    return {
      token,
      setToken,
      permissionIds,
      setPermissionIds
    };
  },
  {
    persist: {
      // 持久化存储
      paths: ['token']
    }
  }
);
