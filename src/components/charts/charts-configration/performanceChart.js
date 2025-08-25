import Chart from 'chart.js/auto';
import analyticData from '../../../../analytic-data.json';

export function renderPerformanceChart() {
	const data = analyticData.monthlyPerformance;

	const ctx = document
		.getElementById('performance-track-chart')
		.getContext('2d');

	function getGradientColor(color) {
		const gradient = ctx.createLinearGradient(0, 0, 0, 400);
		gradient.addColorStop(0, `${color}4d`);
		gradient.addColorStop(0.5, `${color}26`);
		gradient.addColorStop(1, `${color}0d`);

		return gradient;
	}

	const myChart = new Chart(ctx, {
		type: 'line',

		options: {
			maintainAspectRatio: false,

			scales: {
				x: {
					grid: {
						display: false,
					},
				},
				y: {
					grid: {
						display: true,
						color: '#141414',
					},
				},
			},
			plugins: {
				legend: {
					display: false,
				},
			},
		},
		data: {
			labels: data.months,
			datasets: data.datasets.map((section) => ({
				label: section.label.title,
				data: section.values,
				borderColor: section.label.color,
				fill: true,
				backgroundColor: getGradientColor(section.label.color),
				borderWidth: 3,
				tension: 0.3,
				pointBackgroundColor: `#272727`,
				pointBorderColor: section.label.color,
				pointBorderWidth: 2,
				pointRadius: 5,
				pointHoverRadius: 8,
			})),
		},
	});
}
