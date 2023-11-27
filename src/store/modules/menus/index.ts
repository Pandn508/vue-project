import { computed, h, PropType, ref, type VNode } from 'vue';
import * as Icons from '@ahcloud/icon-vue-next';
import type { MenuProps } from 'ant-design-vue';
import { defineStore } from 'pinia';
import type { MenuType, RouteItemType } from './types';

function renderIcon(name?: string): VNode {
  // @ts-ignore
  if (!Icons[name]) return () => h(Icons.ViewModule, { size: 16, fill: 'currentColor' });
  // @ts-ignore
  return () => h(Icons[name], { size: 16, fill: 'currentColor' });
}

function dataToMenuIems(data: MenuType[], type: 'header' | 'all' = 'all'): MenuProps['items'] {
  return data.map((itme) => {
    if (itme.children && itme.children.length > 0 && type === 'all') {
      return {
        key: itme.id,
        title: itme.title,
        label: itme.title,
        icon: renderIcon(itme.icon),
        children: dataToMenuIems(itme.children)
      };
    }
    return {
      key: itme.id,
      title: itme.title,
      label: itme.title,
      path: itme.path,
      icon: renderIcon(itme.icon)
    };
  });
}

function dataToMenuMap(menus: MenuType[], map: Map<string, MenuType[]>, parents: MenuType[] = []) {
  menus.forEach((item) => {
    if (item.path) {
      map.set(item.path, [item, ...parents]);
    }
    if (item.children && item.children.length > 0) {
      dataToMenuMap(item.children, map, [item, ...parents]);
    }
  });
}

export default defineStore('menus', () => {
  // 菜单处理
  const menusData = ref<MenuType[]>([]);
  const menusMap = new Map<string, MenuType[]>();
  const setMenus = (menus: MenuType[]) => {
    menusData.value = menus;
    dataToMenuMap(menus, menusMap);
  };
  const findFistSiderMenu = (id?: string): MenuType | undefined => {
    // 深度搜索算法 查找菜单下第一个可用子菜单，注意 reverse() 使用
    let siderMenus: MenuType[] = [];
    if (!id) {
      siderMenus = [...[...menusData.value].reverse()];
    } else {
      const headerMenu = menusData.value.find((item) => item.id === id);
      if (!headerMenu || !headerMenu.children || headerMenu.children.length === 0) {
        return;
      }
      siderMenus = [...[...headerMenu.children].reverse()];
    }
    let targetMenu: MenuType | undefined;
    while (!targetMenu && siderMenus.length > 0) {
      const menu = siderMenus.pop();
      if (menu?.path) {
        targetMenu = menu;
        break;
      }
      if (menu?.children) {
        siderMenus.push(...[...menu.children].reverse());
      }
    }
    return targetMenu;
  };
  // 过滤并转换第一层大菜单数据
  const headerMenus = computed(() => {
    return dataToMenuIems(menusData.value, 'header');
  });
  // 激活路由的层级关系
  const activeRoutes = ref<RouteItemType[]>([]);
  const setActiveRoutes = (routes: RouteItemType[] = []) => {
    activeRoutes.value = routes.filter((route) => route.component);
  };
  // 依据最高层的路由路径反向查找激活菜单
  const activeMenus = computed(() => {
    if (activeRoutes.value.length === 0) return [];
    const lastRoute = activeRoutes.value[activeRoutes.value.length - 1];
    const menusArr = menusMap.get(lastRoute.path);
    return menusArr ?? [];
  });
  // 通过激活菜单的第一层数据筛选出二层及以下的菜单数据进行计算转换
  const siderMenus = computed<MenuProps['items']>(() => {
    const headerMenu = activeMenus.value[activeMenus.value.length - 1];
    if (!headerMenu) return [];
    const activeMenu = menusData.value.find((item) => item.id === headerMenu.id);
    if (!activeMenu || !activeMenu.children) return [];
    return dataToMenuIems(activeMenu.children, 'all');
  });
  // 路由层级+菜单层级 = 面包屑
  const activeBreadcrumb = computed(() => {
    return [...[...activeMenus.value].reverse(), ...activeRoutes.value.slice(0, activeRoutes.value.length - 1)];
  });

  const reset = () => {
    menusData.value = [];
    menusMap.clear();
    activeRoutes.value = [];
  };
  return {
    reset,
    menusData,
    setMenus,
    headerMenus,
    setActiveRoutes,
    activeBreadcrumb,
    activeMenus,
    siderMenus,
    findFistSiderMenu
  };
});
