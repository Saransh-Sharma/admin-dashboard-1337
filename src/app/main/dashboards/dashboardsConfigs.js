import AnalyticsDashboardAppConfig from './analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './project/ProjectDashboardAppConfig';
// import FinanceDashboardAppConfig from './finance/FinanceDashboardAppConfig';
import CrashesDashboardApp from './crashesDashboard/CrashesDashboardAppConfig';

const dashboardsConfigs = [
  AnalyticsDashboardAppConfig,
  ProjectDashboardAppConfig,
  CrashesDashboardApp,
  // FinanceDashboardAppConfig,
];

export default dashboardsConfigs;
