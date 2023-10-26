<template>
  <div class="h-full w-full flex flex justify-end items-center pr-80" :style="background">
    <BrandLogo></BrandLogo>
    <div class="w-110 p12 backdrop-filter backdrop-blur-4 border border-white border-solid rd-10px">
      <a-tabs centered>
        <a-tab-pane key="account">
          <template #tab>
            <span class="font-size-6">账号登录</span>
          </template>
          <AccountForm></AccountForm>
        </a-tab-pane>
        <a-tab-pane key="scan">
          <template #tab>
            <span class="font-size-6">扫码登录</span>
          </template>
          <ScanLogin></ScanLogin>
        </a-tab-pane>
      </a-tabs>
      <a-divider dashed class="border-color-#A2A8E4">
        <span class="font-size-4 color-#181818">其他登录方式</span>
      </a-divider>
      <div class="flex justify-between">
        <OtherLogin :icon="dingding" text="安恒内部演示账号登录"></OtherLogin>
        <OtherLogin :icon="phone" text="游客账号登录"></OtherLogin>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import dingding from '@/assets/images/login/dingding.png';
  import phone from '@/assets/images/login/phone.png';
  import AccountForm from './comps/account-form.vue';
  import OtherLogin from './comps/other-login.vue';
  import ScanLogin from './comps/scan-login.vue';
  import BrandLogo from './comps/brand-logo.vue';

  const appStore = useAppStore();
  const { appConfig } = storeToRefs(appStore);
  const background = computed(() => {
    return {
      'background-image': `url(${appConfig.value?.loginBg})`,
      'background-size': 'cover',
      'background-repeat': 'no-repeat'
    };
  });
</script>
