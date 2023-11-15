import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'base::home',
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      permissionId: 'base::home:index'
    }
  },
  {
    name: 'base::example',
    path: '/example',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: '示例',
      permissionId: 'base::example:index'
    },
    children: [
      {
        name: 'base::example:add',
        path: 'add',
        component: () => import('@/views/example/add.vue'),
        meta: {
          title: '添加',
          permissionId: 'base::example:add'
        }
      }
    ]
  },
  {
    name: 'base::submenu1',
    path: '/submenu1',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: '示例',
      permissionId: 'base::submenu1:index'
    }
  },
  {
    name: 'base::submenu2',
    path: '/submenu2',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: '示例',
      permissionId: 'base::submenu2:index'
    }
  }
];

const wihitetRoutes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      fullScreen: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/not-found/index.vue'),
    meta: {
      title: '404',
      fullScreen: true
    }
  }
];

export default [...routes, ...wihitetRoutes];
