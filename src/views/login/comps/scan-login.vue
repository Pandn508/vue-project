<template>
  <div class="flex justify-center flex-col items-center w-full h-302">
    <a-qrcode value="http://www.antdv.com" :size="195" @refresh="() => console.log('refresh')" />
    <div class="mt-24">
      <img src="~@/assets/images/login/wechat.png" />
      <span>请使用微信扫码登录</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
