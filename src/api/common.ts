import type { MenuType } from '@/store/modules/menus/types';

// 获取菜单数据
export async function getMenus(): Promise<MenuType[]> {
  return [
    {
      id: 'home',
      title: '首页',
      icon: 'WechatOutlined',
      path: '/home'
    },
    {
      id: 'example',
      title: '顶部菜单',
      icon: 'AlipayCircleOutlined',
      children: [
        {
          id: 'menu1',
          title: '侧边菜单',
          icon: 'TaobaoOutlined',
          path: '/example'
        },
        {
          id: 'menuSub',
          title: '菜单分类',
          children: [
            {
              id: 'menuSub1',
              title: '子菜单 1',
              path: '/submenu1'
            },
            {
              id: 'menuSub2',
              title: '子菜单 2',
              path: '/submenu2'
            }
          ]
        }
      ]
    }
  ];
}

// 获取权限数据
export async function getPermissions() {
  return [];
}
