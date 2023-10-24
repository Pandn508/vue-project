<template>
  <a-config-provider :locale="zhCN">
    <Layout>
      <RouterView></RouterView>
    </Layout>
  </a-config-provider>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import { getMenus } from '@/api/common';
  import Layout from './components/layout/index.vue';
  import { useMenusStore } from './store';

  const menusStore = useMenusStore();
  getMenus()
    .then((data) => {
      menusStore.setMenus(data);
    })
    .catch((err) => {
      console.log(err);
    });
</script>
