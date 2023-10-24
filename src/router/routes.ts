import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      permissionId: 'home:index'
    }
  },
  {
    name: 'example',
    path: '/example',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: '示例',
      permissionId: 'example:index'
    },
    children: [
      {
        name: 'example-add',
        path: 'add',
        component: () => import('@/views/example/add.vue'),
        meta: {
          title: '添加',
          permissionId: 'example:add'
        }
      }
    ]
  },
  {
    name: 'submenu1',
    path: '/submenu1',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: '示例',
      permissionId: 'submenu1:index'
    }
  },
  {
    name: 'submenu2',
    path: '/submenu2',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: '示例',
      permissionId: 'submenu2:index'
    }
  }
];

export default routes;
