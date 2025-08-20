import analyticData from '../../../../analytic-data.json';
import {
	numToUSD,
	numToUSDCollapse,
	numToPercentage,
} from '../../../utilities/format';
import { createDonutChart } from '../../../components/charts/js/DonutChart';
import { createExtendedChart } from '../../../components/charts/js/ExtendedChart';
import { createMetricCard } from '../../../components/metric-card/js/MetricCard';
import { renderFinancialChart } from '../../../components/charts/charts-configration/financial-chart';
import { renderPerformanceChart } from '../../../components/charts/charts-configration/performance-chart';
import { renderAllocationChart } from '../../../components/charts/charts-configration/allocation-chart';

export function renderAnalytics() {
	const analytics = `
    <div class="analytics-section">
      <div class="analytics-section__metrics">
        <span class="analytics-section__current-value"
          >Current Value: 
          ${numToUSD(analyticData.metrics.overview.currentValue)}
          </span
        >
        <div class="analytics-section__metrics-cards">
          ${createMetricCard(
						numToUSD(analyticData.metrics.overview.changeToday.amount),
						'change today',
						'today',
						'today-amount-chart'
					)}
          ${createMetricCard(
						numToUSDCollapse(
							analyticData.metrics.overview.totalInvested.amount
						),
						'total invested',
						'last month',
						'total-invested-chart'
					)}
          ${createMetricCard(
						numToPercentage(
							analyticData.metrics.overview.portfolioReturn.percentage
						),
						'portfolio return',
						'last month',
						'portfolio-return-chart'
					)}
        </div>
      </div>
      <div class="analytics-section__analytic-charts">

        <div class="analytics-section__financial-track">
            ${createExtendedChart(
							'financial',
							'bar',
							'financial-track-chart',
							analyticData.monthlyBarChart.datasets.map((data) => data.label)
						)}
        </div>

        <div class="analytics-section__allocation-track">
          ${createDonutChart(
						'allocation',
						'donut',
						'allocation-chart',
						analyticData.donutChart.datasets.map((data) => data.label)
					)}
        </div>

        <div class="analytics-section__performance-track">
          ${createExtendedChart(
						'performance',
						'line',
						'performance-track-chart',
						analyticData.monthlyPerformance.datasets.map((data) => data.label)
					)}
        </div>

      </div>
    </div>
  `;

	setTimeout(() => {
		renderFinancialChart();
		renderPerformanceChart();
		renderAllocationChart();
	}, 0);

	return analytics;
}
