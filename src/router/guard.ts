import { getMenus, getPermissions } from '@/api/common';
import { useAppStore, useMenusStore } from '@/store';
import { Router } from 'vue-router';

export const WHITE_LIST: string[] = ['/404', '/login'];

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const appStore = useAppStore();
    const menusStore = useMenusStore();
    if (WHITE_LIST.includes(to.path)) {
      if (to.path === '/login' && appStore.token) {
        next({ path: '/' });
      }
      next();
    } else if (appStore.token) {
      // 判断是否登录
      // 判断是否获取菜单权限
      if (!menusStore.menusData.length) {
        const menusData = await getMenus();
        menusStore.setMenus(menusData);
      }
      // 判断是否获取权限 ids;
      if (!appStore.permissionIds.length) {
        const permissionIds = await getPermissions();
        appStore.setPermissionIds(permissionIds);
      }
      if (to.path === '/') {
        const firstMenu = menusStore.findFistSiderMenu();
        if (firstMenu && firstMenu.path) {
          next(firstMenu.path);
          return;
        }
        next('/404');
        return;
      }
      if (!appStore.permissionIds.includes(to.meta.permissionId as string)) {
        next('/404');
        return;
      }
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  });
}
