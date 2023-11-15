import { ref } from 'vue';
import { defineStore } from 'pinia';

export interface SubApp {
  name: string;
  url: string;
  baseroute: string;
  custom?: boolean;
}

export const useMicroStore = defineStore('micro', () => {
  const apps = ref<SubApp[]>([
    {
      name: 'ailpha::*',
      url: 'http://127.0.0.1:5174',
      baseroute: '/ailpha'
    }
  ]);
  return {
    apps
  };
});
