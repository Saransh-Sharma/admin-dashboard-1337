import { lazy } from 'react';

const CrashesDashboardApp = lazy(() => import('./CrashesDashboardApp'));

const CrashesDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'crashes',
      element: <CrashesDashboardApp />,
    },
  ],
};

export default CrashesDashboardAppConfig;
