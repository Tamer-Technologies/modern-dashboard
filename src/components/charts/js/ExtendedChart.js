import { createChartBody } from './ChartBody';
import { createChartHeader } from './ChartHeader';

export function createExtendedChart(title, type, id, chartLegends) {
	const chart = `
  <div class="extended-chart-container">
		${createChartHeader(title, chartLegends)}

		${createChartBody(type, id)}
	</div>
  `;

	return chart;
}
