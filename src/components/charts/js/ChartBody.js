export function createChartBody(type, id) {
	const chart = `
    <div class="chart-body">
      <canvas class="${type.toLowerCase()}-chart" id="${id}"></canvas>
    </div>
  `;

	return chart;
}
