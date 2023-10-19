<template>
  <a-config-provider :locale="zhCN">
    <Layout>
      <RouterView></RouterView>
    </Layout>
  </a-config-provider>
</template>
<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Layout from './components/layout/index.vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>
