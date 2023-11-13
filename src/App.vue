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
  import { ref } from 'vue';
  import Layout from './components/layout/index.vue';
  import { getWebsiteConfig } from './api/common';
  import { useAppStore } from './store';
  import { AppConfigType } from './store/modules/app/types';

  import buleToken from './theme/blue';
  // import redToken from './theme/red';

  const themeToken = ref(buleToken);

  // 获取主题 TODO

  // 切换主题 TODO

  const appStore = useAppStore();
  getWebsiteConfig()
    .then((data) => {
      appStore.setAppConfig(data as AppConfigType);
    })
    .catch((error) => {
      console.log(error);
    });
</script>
