import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw,
  type RouteRecordSingleView
} from 'vue-router';
import type { RouteItemType } from '@/store/modules/menus/types';
import routes from './routes';
import { setupPermissionGuard } from './guard';

function pruneRoute(route: RouteRecordRaw): RouteRecordRaw {
  const { children, ...rest } = route;
  return rest as RouteRecordRaw;
}

// 把多层路由转换成平级路由 思路来自 smart-pro 工程
function routeToArr(routesData: RouteRecordRaw[]) {
  const waterRoutes: RouteRecordRaw[] = [];
  function setRouteToMap(_routes: RouteRecordRaw[], parents: RouteItemType[]) {
    _routes.forEach((item) => {
      if (!/^\//.test(item.path)) {
        // 拼接路由路径
        const parentsPath = parents[0]?.path ?? '';
        item.path = `${parentsPath}/${item.path}`;
      }
      const routeItems = [
        {
          path: item.path,
          title: item?.meta?.title || ''
        } as RouteItemType,
        ...parents
      ];
      item.meta = {
        ...item.meta,
        parentRoutes: routeItems
      };
      waterRoutes.push(pruneRoute(item));
      if (item.children) {
        setRouteToMap(item.children, routeItems);
      }
    });
  }
  setRouteToMap(routesData, []);
  return waterRoutes;
}

const waterRoutes = routeToArr(routes);
const router = createRouter({
  history: process.env.HISTORY_TYPE === 'history' ? createWebHistory() : createWebHashHistory(),
  routes: waterRoutes
});

setupPermissionGuard(router);
export default router;
