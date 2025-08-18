import { createChartBody } from './ChartBody';
import { createChartHeader } from './ChartHeader';

export function createDonutChart(title, type, id, labels) {
	const chart = `
    <div class="donut-chart-container">
      ${createChartHeader(title, labels)}
      
      ${createChartBody(type, id)}
    </div>
  `;

	return chart;
}
