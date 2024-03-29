import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import useAppStore from './modules/app';
import useMenusStore from './modules/menus';
import useUserStore from './modules/user';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // 使用 pinia 数据持久化插件

export { useAppStore, useUserStore, useMenusStore };
export default pinia;
