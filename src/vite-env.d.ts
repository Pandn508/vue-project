/// <reference types="vite/client" />
declare module '*.vue' {
  // 引入vue模块中ts的方法
  import type { DefineComponent } from 'vue';
  // 定义vue组件以及类型注解
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
