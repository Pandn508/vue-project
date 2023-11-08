import { ref } from 'vue';
import { defineStore } from 'pinia';
import { defaultConfig } from './defaultConfig';
import { AppConfigType } from './types';

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
    // 持久化存储
    persist: [
      {
        key: process.env.TOKEN_NAME || 'token',
        paths: ['token']
      }
    ]
  }
);
