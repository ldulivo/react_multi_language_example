import i18next from 'i18next';

import en_global from './translate/en/global.json';
import en_home from './translate/en/home.json';
import en_aboutme from './translate/en/aboutme.json';
import en_contactme from './translate/en/contactme.json';

import es_global from './translate/es/global.json';
import es_home from './translate/es/home.json';
import es_aboutme from './translate/es/aboutme.json';
import es_contactme from './translate/es/contactme.json';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: en_global,
      home: en_home,
      aboutme: en_aboutme,
      contactme: en_contactme
    },
    es: {
      global: es_global,
      home: es_home,
      aboutme: es_aboutme,
      contactme: es_contactme
    },
  }
});

export default i18next