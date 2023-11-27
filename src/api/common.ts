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
      id: 'theme',
      title: '主题演示',
      icon: 'WechatOutlined',
      path: '/theme'
    },
    {
      id: 'sum-one',
      title: '一层菜单',
      icon: 'WechatOutlined',
      path: '/sum-one'
    },
    {
      id: 'sum-more',
      title: '多层菜单',
      icon: 'WechatOutlined',
      children: [
        {
          id: 'sum-more-0',
          title: '二级菜单',
          path: '/sum-more-0'
        },
        {
          id: 'sum-more-1',
          title: '二级菜单分类1',
          children: [
            {
              id: 'sum-more-1-0',
              title: '三级菜单',
              path: '/sum-more-1-0'
            },
            {
              id: 'sum-more-1-1',
              title: '自动添加前缀三级菜单',
              path: '/sum-more/sum-more-1-1'
            },
            {
              id: 'sum-more-1-2',
              title: '有前缀三级菜单',
              path: '/sum-more/sum-more-1-2'
            }
          ]
        },
        {
          id: 'sum-more-2',
          title: '二级菜单分类2',
          children: [
            {
              id: 'sum-more-2-1',
              title: '自动添加多个前缀三级菜单',
              path: '/sum-more/sum-more-2/sum-more-2-1'
            }
          ]
        }
      ]
    }
  ];
}

// 获取权限数据
export async function getPermissions() {
  return ['base::home:index', 'base::theme:index', 'sum-one', 'sum-two', 'sum-more'];
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
