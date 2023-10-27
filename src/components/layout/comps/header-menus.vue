<template>
  <a-layout-header>
    <div class="flex">
      <div>
        <img src="/logo.png" class="h-32" />
        <span class="text-white">VUE3-TS-WEBPACK-PROJECT</span>
      </div>
      <div class="flex-1 px-16">
        <a-menu
          v-model:selectedKeys="selectMenuId"
          :items="headerMenus"
          theme="dark"
          :style="{ lineHeight: '64px' }"
          mode="horizontal"
          @click="handleSelect"
        ></a-menu>
      </div>
      <div>
        <a-dropdown>
          <div class="cursor-pointer">
            <a-space>
              <a-avatar>
                <template #icon>
                  <LogoGithubFilled :size="28" fill="#fff" />
                </template>
              </a-avatar>
              <span class="text-white"> Admin </span>
            </a-space>
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">个人信息</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="handleLogout">退出登录</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
  import { useAppStore, useMenusStore } from '@/store';
  import { storeToRefs } from 'pinia';
  import { ref, watchEffect } from 'vue';
  import { LogoGithubFilled } from '@ahcloud/icon-vue-next';
  import { useRouter } from 'vue-router';

  const menusStore = useMenusStore();
  const appStore = useAppStore();
  const { headerMenus, activeMenus } = storeToRefs(menusStore);
  const selectMenuId = ref<string[]>([]);
  watchEffect(() => {
    if (activeMenus.value.length > 0) {
      const active = activeMenus.value[activeMenus.value.length - 1];
      selectMenuId.value = [active?.id];
    }
  });

  const router = useRouter();
  // @ts-ignore
  const handleSelect = ({ item, key }) => {
    if (item.path) {
      router.push(item.path);
      return;
    }
    const menu = menusStore.findFistSiderMenu(key);
    if (menu && menu.path) {
      router.push(menu.path);
    }
  };

  // 退出登录
  const handleLogout = () => {
    menusStore.reset();
    appStore.reset();
    router.push('/login');
  };
</script>
