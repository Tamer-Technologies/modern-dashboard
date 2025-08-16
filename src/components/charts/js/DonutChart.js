import { createChartBody } from './ChartBody';
import { createChartHeader } from './ChartHeader';

export function createDonutChart(title, type, id, chartLegends) {
	const chart = `
    <div class="donut-chart-container">
      ${createChartHeader(title, chartLegends)}
      
      ${createChartBody(type, id)}
    </div>
  `;

	return chart;
}
