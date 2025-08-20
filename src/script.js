import './styles/base-css-entry-point.css';
import './components/layout/js/LayoutEntryPoint';
import './components/sidebar/js/SidebarEntryPoint';
import './components/charts/js/Charts';
import './features/pageNavigation';
import './components/metric-card/css/metrics-card.css';
import './pages/analytics/css/analytics-page.css';
import { showPage } from './features/pageNavigation';

showPage('Analytics');
