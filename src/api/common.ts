import { AppConfigType } from '@/store/modules/app/types';
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
  return ['base::home:index', 'base::example:index', 'base::example:add', 'base::submenu1:index'];
}

// 获取网站配置
export async function getWebsiteConfig(): Promise<
  Omit<
    AppConfigType,
    Extract<keyof AppConfigType, keyof { title?: string; subtitle?: string; logo?: string; loginBg?: string }>
  >
> {
  return {
    // 登录配置
    scanCode: true, // 扫码登录
    refreshScanCode: 20, // 二维码刷新时间，单位秒
    verificationCode: false, // 图片验证码
    phoneCode: true, // 手机验证码
    login2FA: false, // 双因子登录
    loginProtocol: 'https://www.dbappsecurity.com.cn/', // 协议
    register: false, // 注册
    forgotPassword: false // 忘记密码
  };
}
