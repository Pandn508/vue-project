<template>
  <a-layout>
    <div
      class="p2 pl-16 h-36 flex"
      :style="{ 'background-color': token.colorBgBase, borderLeft: `1px solid ${token.colorBorder}` }"
    >
      <div v-if="activeBreadcrumb.length > 1" class="pr-8">
        <ChevronLeftCircle :size="20" fill="#000" @click="router.back()" />
      </div>
      <a-breadcrumb>
        <template #separator>
          <ChevronRight style="vertical-align: sub" :size="16" fill="currentColor" />
        </template>
        <a-breadcrumb-item v-for="item in activeBreadcrumb" :key="item.title">
          <template v-if="!item.path">
            {{ item.title }}
          </template>
          <template v-else>
            <RouterLink :to="item.path">{{ item.title }}</RouterLink>
          </template>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <a-layout-content>
      <div class="h-full w-full p16px">
        <RouterView />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
  import { RouterView, useRouter } from 'vue-router';
  import { ChevronRight, ChevronLeftCircle } from '@ahcloud/icon-vue-next';
  import { theme } from 'ant-design-vue';
  import { storeToRefs } from 'pinia';
  import { useMenusStore } from '@/store';

  const { useToken } = theme;
  const { token } = useToken();

  const router = useRouter();
  const menusStore = useMenusStore();
  const { activeBreadcrumb } = storeToRefs(menusStore);
</script>
