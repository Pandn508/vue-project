import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { loadEnv } from './utils';

const env = loadEnv();

export default defineConfig({
  base: env?.BASE_PATH || '/',
  plugins: [
    vue(
      // micro 按需生成
      {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => /^micro-app/.test(tag)
          }
        }
      }
    ),
    UnoCSS(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src')
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js' // compile template
      }
    ],
    extensions: ['.ts', '.js']
  },
  define: {
    'process.env': JSON.stringify(env)
  },
  css: {}
});
