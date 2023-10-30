import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import compressPlugin from 'vite-plugin-compression';
import configImageminPlugin from './plugin/imagemin';

export default mergeConfig(
  {
    mode: 'production',
    plugins: [
      compressPlugin({
        ext: '.gz'
      }),
      configImageminPlugin()
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia']
          }
        }
      },
      chunkSizeWarningLimit: 2000
    }
  },
  baseConfig
);
