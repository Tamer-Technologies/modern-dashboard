import Chart from 'chart.js/auto';
import analyticData from '../../../../analytic-data.json';

export function renderAllocationChart() {
	const data = analyticData.donutChart;

	const ctx = document.getElementById('allocation-chart');
	const myChart = new Chart(ctx, {
		type: 'doughnut',

		options: {
			maintainAspectRatio: false,
			borderWidth: 10,
			hoverBorderWidth: 2,

			scales: {
				x: {
					display: false,
				},
				y: {
					display: false,
				},
			},
			plugins: {
				legend: {
					display: false,
				},
			},
		},
		data: {
			labels: data.datasets.map((section) => section.label.title),
			datasets: [
				{
					borderColor: '#272727',
					hoverOffset: 10,
					data: data.datasets.map((section) => section.amount),
					backgroundColor: data.datasets.map((section) => section.label.color),
				},
			],
		},
	});
}
