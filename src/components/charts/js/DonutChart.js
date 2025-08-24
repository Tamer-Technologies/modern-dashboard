import { createChartBody } from './ChartBody';
import { createChartHeader } from './ChartHeader';
import { createChartLabel } from './ChartLabel';

export function createDonutChart(title, type, id, labels, valueLabels) {
	const chart = `
    <div class="donut-chart-container">
      ${createChartHeader(title, labels)}
      <div class="donut-chart">
        ${createChartBody(type, id)}
        <div class="donut-chart__labels">
          ${valueLabels.map((label) => createChartLabel(label)).join('')}
        </div>
      </div>
    </div>
  `;

	return chart;
}
