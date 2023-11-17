<template>
  <h1>home</h1>
  <a-flex gap="16">
    <a-button @click="changeColorPrimary('blue')">
      <div class="w-16 h-16 bg-#134bea"></div>
    </a-button>
    <a-button @click="changeColorPrimary('red')">
      <div class="w-16 h-16 bg-#c41424"></div>
    </a-button>
  </a-flex>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store';

  const appStore = useAppStore();

  const changeColorPrimary = (type: string) => {
    appStore.setThemeTokenType(type);
  };
</script>
