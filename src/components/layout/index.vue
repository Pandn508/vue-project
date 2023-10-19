<template>
  <a-layout>
    <a-layout-header>
      <div class="text-white">VUE3-TS-WEBPACK-PROJECT</div>
      <a-menu></a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <a-menu></a-menu>
      </a-layout-sider>
    </a-layout>
    <a-layout>
      <a-breadcrumb></a-breadcrumb>
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts"></script>
