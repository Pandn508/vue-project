<template>
  <micro-app
    :name="appInfo.name"
    :url="url"
    disable-memory-router
    iframe
    :baseroute="props.appInfo.baseroute"
  ></micro-app>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { SubApp } from './store';

  const props = withDefaults(
    defineProps<{
      appInfo: SubApp;
    }>(),
    {}
  );
  const url = computed(() => {
    if (props.appInfo.url.startsWith('http')) return props.appInfo.url;
    if (props.appInfo.url.startsWith('//')) {
      return window.location.protocol + props.appInfo.url;
    }
    return `${window.location.protocol}//${window.location.host}${props.appInfo.url}`;
  });
</script>
