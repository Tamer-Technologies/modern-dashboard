import Chart from 'chart.js/auto';
import analyticData from '../../../../analytic-data.json';

export function renderTotalInvestedChart() {
	const data = analyticData.metrics.overview.totalInvested;
	const dataColor = '#b9fd60';

	const ctx = document.getElementById('total-invested-chart').getContext('2d');

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
			labels: ['Last Month', 'Current'],
			datasets: [
				{
					data: [data.lastMonth.amount, data.amount],
					borderColor: dataColor,
					fill: true,
					backgroundColor: getGradientColor(dataColor),
					borderWidth: 3,
					tension: 0.3,
					pointBackgroundColor: `#272727`,
					pointBorderColor: dataColor,
					pointBorderWidth: 2,
					pointRadius: 5,
					pointHoverRadius: 8,
				},
			],
		},
	});
}
