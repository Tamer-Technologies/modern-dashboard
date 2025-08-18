export function createChartLabel(label) {
	const labelhtml = `
    <div class="chart-label">
      <div class="chart-color__color" style="background-color: ${
				label.color
			}"></div>
      <span class="chart-color__color-representation">${label.title.toLowerCase()}</span>
    </div>
  `;

	return labelhtml;
}
