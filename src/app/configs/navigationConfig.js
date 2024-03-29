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
    icon: 'material-outline:dashboard',
    url: 'dashboards/analytics',
  },
  {
    id: 'example-component22',
    title: 'nu Crashes',
    type: 'item',
    icon: 'material-outline:new_releases',
    url: 'crashes',
  },
  {
    id: 'example-component2',
    title: 'Crashes',
    type: 'item',
    icon: 'material-outline:new_releases',
    url: 'dashboards/project',
  },
  {
    id: 'example-component3',
    title: 'Performance',
    type: 'item',
    icon: 'material-outline:speed',
    url: 'performance',
  },
  {
    id: 'example-component4',
    title: 'Bugs',
    type: 'item',
    icon: 'material-outline:bug_report',
    url: 'bugs',
  },
  {
    id: 'example-component5',
    title: 'QA Coverage',
    type: 'item',
    icon: 'material-outline:rule',
    url: 'coverage',
  },
];

export default navigationConfig;
