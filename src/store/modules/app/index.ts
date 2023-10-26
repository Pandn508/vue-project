import { defineStore } from 'pinia';
import { ref } from 'vue';
import { AppConfigType } from './types';
import { defaultConfig } from './defaultConfig';

export default defineStore(
  'app',
  () => {
    // token
    const token = ref<string>();
    const setToken = (tokenStr: string) => {
      token.value = tokenStr;
    };
    // 权限 code
    const permissionIds = ref<string[]>([]);
    const setPermissionIds = (ids: string[]) => {
      permissionIds.value = ids;
    };
    // 系统配置
    const appConfig = ref<AppConfigType>();
    const setAppConfig = (config: AppConfigType) => {
      const value = { ...defaultConfig, ...config };
      appConfig.value = value;
    };
    // 重置数据
    const reset = () => {
      token.value = '';
      permissionIds.value = [];
    };
    return {
      reset,
      token,
      setToken,
      permissionIds,
      setPermissionIds,
      appConfig,
      setAppConfig
    };
  },
  {
    persist: {
      // 持久化存储
      paths: ['token']
    }
  }
);
