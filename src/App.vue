<template>
  <a-config-provider
    :locale="zhCN"
    :theme="{
      token: themeToken
    }"
  >
    <Layout>
      <RouterView></RouterView>
    </Layout>
  </a-config-provider>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import { storeToRefs } from 'pinia';
  import Layout from './components/layout/index.vue';
  import { getWebsiteConfig } from './api/common';
  import { useAppStore } from './store';
  import { AppConfigType } from './store/modules/app/types';

  const appStore = useAppStore();
  // 主题
  const { themeToken } = storeToRefs(appStore);

  getWebsiteConfig()
    .then((data) => {
      appStore.setAppConfig(data as AppConfigType);
    })
    .catch((error) => {
      console.log(error);
    });
</script>
