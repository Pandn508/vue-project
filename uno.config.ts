import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
export default defineConfig({
  rules: [],
  shortcuts: [],
  presets: [
    presetRemToPx({
      baseFontSize: 4
    }),
    presetUno()
  ],
  transformers: [transformerDirectives()]
});
