import Chart from 'chart.js/auto';
import analyticData from '../../../../analytic-data.json';

export function renderFinancialChart() {
	const data = analyticData.monthlyBarChart;

	const ctx = document.getElementById('financial-track-chart');
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
			},
		},
		data: {
			labels: data.months,
			datasets: data.datasets.map((section) => ({
				label: section.label.title,
				data: section.values,
				borderRadius: 9999,
				barThickness: 5,
				backgroundColor: section.label.color,
			})),
		},
	});
}
