import { toUpperFirst } from '../../../utilities/format';
import { createChartBody } from '../../charts/js/ChartBody';

export function createMetricCard(value, title, duration, chartId) {
	const component = `
    <div class="metrics-card">
      <div class="metrics-card__header">
        <h6 class="metrics-card__title">${title
					.split(' ')
					.map((word) => toUpperFirst(word))
					.join(' ')}</h6>
        <span class="metrics-card__duration">${duration}</span>
      </div>
      <div class="metrics-card__body">
        <div class="metrics-card__value">
        ${value}
        </div>
        ${createChartBody('metrics-card', chartId)}
      </div>
    </div>
  `;

	return component;
}
