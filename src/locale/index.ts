import { createI18n } from '@international/vue3-i18n';
import en from '../../.kiwi/en-US';
import zh from '../../.kiwi/zh-CN';

export default function i18n(app: any) {
  const i18nIns = createI18n(app, {
    autoDetect: false,
    messages: {
      zh: { I18N: zh },
      en: { I18N: en }
    },
    kiwi: {
      zh,
      en
    }
  });
  app.use(i18nIns);
}
