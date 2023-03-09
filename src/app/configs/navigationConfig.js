import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Release Home',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },
  {
    id: 'example-component2',
    title: 'Crashes',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'crashes',
  },
  {
    id: 'example-component3',
    title: 'Performance',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'performance',
  },
  {
    id: 'example-component4',
    title: 'QA Coverage',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'coverage',
  },
];

export default navigationConfig;
