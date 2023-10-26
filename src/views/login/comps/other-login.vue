<template>
  <div class="cursor-pointer h-27px inline-block">
    <img class="w-27px" :src="props.icon" />
    <span class="color-#555B66 ml-1 line-height-27px font-size-12px">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  });
</script>
