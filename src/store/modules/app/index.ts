import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { themeTokens, ThemeTypes } from '@/theme';
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
    // 主题
    const themeType = ref<ThemeTypes>(ThemeTypes.Blue);
    const setThemeType = (theme: ThemeTypes) => {
      themeType.value = theme;
    };
    const themeToken = computed(() => {
      return themeTokens[themeType.value] || themeTokens[ThemeTypes.Blue];
    });
    // 水印
    const watermark = ref<string>('');
    const setWatermark = (watermarkStr: string) => {
      watermark.value = watermarkStr;
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
      setAppConfig,
      themeType,
      setThemeType,
      themeToken,
      watermark,
      setWatermark
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
