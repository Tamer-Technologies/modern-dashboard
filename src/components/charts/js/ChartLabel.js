export function createChartLabel(label) {
	const labelhtml = `
    <div class="chart-label">
      <div class="chart-label__color" style="background-color: ${
				label.color
			}"></div>
      <span class="chart-label__color-representation">${label.title.toLowerCase()}</span>
    </div>
  `;

	return labelhtml;
}
