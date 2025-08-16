export function createChartColor(colorName) {
	const colorItem = `
    <div class="chart-color">
      <div class="chart-color__color"></div>
      <span class="chart-color__color-representation">${colorName}</span>
    </div>
  `;

	return colorItem;
}
