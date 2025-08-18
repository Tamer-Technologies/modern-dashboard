import { createChartBody } from './ChartBody';
import { createChartHeader } from './ChartHeader';

export function createExtendedChart(title, type, id, labels) {
	const chart = `
  <div class="extended-chart-container">
		${createChartHeader(title, labels)}

		${createChartBody(type, id)}
	</div>
  `;

	return chart;
}
