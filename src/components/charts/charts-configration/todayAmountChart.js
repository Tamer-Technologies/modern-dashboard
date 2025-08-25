import Chart from 'chart.js/auto';
import analyticData from '../../../../analytic-data.json';

export function renderTodayAmountChart() {
	const data = analyticData.metrics.overview.changeToday;
	const dataColor = '#b9fd60';

	const ctx = document.getElementById('today-amount-chart').getContext('2d');

	function getGradientColor(color) {
		const gradient = ctx.createLinearGradient(0, 0, 0, 400);
		gradient.addColorStop(0, `${color}4d`);
		gradient.addColorStop(0.5, `${color}26`);
		gradient.addColorStop(1, `${color}0d`);

		return gradient;
	}

	const myChart = new Chart(ctx, {
		type: 'bar',

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
				tooltip: {
					callbacks: {
						label: function (context) {
							return '$' + context.parsed.y;
						},
					},
				},
			},
		},
		data: {
			labels: ['changeToday'],
			datasets: [
				{
					data: [data.amount],
					borderColor: dataColor,
					backgroundColor: getGradientColor(dataColor),
					borderWidth: 2,
					barThickness: 30,
				},
			],
		},
	});
}
