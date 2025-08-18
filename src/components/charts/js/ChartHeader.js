import { toUpperFirst } from '../../../utilities/format';
import { createChartLabel } from './ChartLabel';

export function createChartHeader(title, labels) {
	const header = `
    <div class="chart-header">
		<span class="chart-header__chart-title">
    ${toUpperFirst(title)}
    </span>
		<div class="chart-header__chart-labels">
      ${labels.map((label) => createChartLabel(label)).join('')}
		</div>
	</div>
  `;

	return header;
}
