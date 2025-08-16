import { toUpperFirst } from '../../../utilities/textFormat';
import { createChartColor } from './ChartColor';

export function createChartHeader(title, colors) {
	const header = `
    <div class="chart-header">
		<span class="chart-header__chart-title">
    ${toUpperFirst(title)}
    </span>
		<div class="chart-header__chart-colors">
      ${colors.map((color) => createChartColor(color)).join('')}
		</div>
	</div>
  `;

	return header;
}
