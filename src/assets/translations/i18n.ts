import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import fr from './fr.json';
import sv from './sv.json';

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    fr: fr,
    sv: sv,
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})
