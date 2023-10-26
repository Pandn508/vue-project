import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  rules: [],
  shortcuts: [],
  presets: [presetUno()],
  transformers: [transformerDirectives()]
});