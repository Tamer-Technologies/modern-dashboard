import { toUpperFirst } from '../../../utilities/format';
import { createChartBody } from '../../charts/js/ChartBody';

export function createMetricCard(value, title, duration, chartId) {
	const component = `
    <div class="metrics-card">
            <div class="metrics-card__header">
              <h6 class="metrics-card__title">${title
								.split(' ')
								.map((word) => toUpperFirst(word.toLowerCase()))
								.join(' ')}</h6>
              <span class="metrics-card__time">${duration}</span>
            </div>
            <div class="metrics-card__body">
              <div class="metrics-card__value">
              ${value}
              </div>
              ${createChartBody('card', chartId)}
            </div>
          </div>
  `;

	return component;
}
