<template>
  <a-layout class="h-screen w-screen">
    <HeaderMenus v-if="!fullScreen"></HeaderMenus>
    <a-layout v-if="!fullScreen">
      <SiderMenus></SiderMenus>
      <LayoutContent></LayoutContent>
    </a-layout>
    <RouterView v-if="fullScreen"></RouterView>
  </a-layout>
</template>

<script setup lang="ts">
  import { useMenusStore } from '@/store';
  import { useRoute } from 'vue-router';
  import { computed, watchEffect } from 'vue';
  import type { RouteItemType } from '@/store/modules/menus/types';
  import HeaderMenus from './comps/header-menus.vue';
  import SiderMenus from './comps/sider-menus.vue';
  import LayoutContent from './comps/layout-content.vue';

  const menusStore = useMenusStore();
  const route = useRoute();
  watchEffect(() => {
    const routes = route.meta.parentRoutes as RouteItemType[];
    menusStore.setActiveRoutes(routes);
  });

  const fullScreen = computed(() => {
    return route.meta.fullScreen;
  });
</script>
