<template>
  <a-layout>
    <a-breadcrumb>
      <a-breadcrumb-item v-for="item in activeBreadcrumb" :key="item.title">
        <template v-if="!item.path">
          {{ item.title }}
        </template>
        <template v-else>
          <RouterLink :to="item.path">{{ item.title }}</RouterLink>
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
  import { useMenusStore } from '@/store';
  import { storeToRefs } from 'pinia';
  import { RouterView } from 'vue-router';

  const menusStore = useMenusStore();
  const { activeBreadcrumb } = storeToRefs(menusStore);
</script>
