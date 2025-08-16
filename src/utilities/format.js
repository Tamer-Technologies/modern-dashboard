export function numToUSD(num) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(num);
}

export function numToUSDCollapse(num) {
	const THOUSAND = 1000;
	const MILLION = 1000000;
	const BILLION = 1000000000;

	if (num >= THOUSAND && num < MILLION) {
		return numToUSD((num / THOUSAND).toFixed(2)) + 'K';
	}
	if (num >= MILLION && num < BILLION) {
		return numToUSD((num / MILLION).toFixed(2)) + 'M';
	}
	if (num >= BILLION) {
		return numToUSD((num / BILLION).toFixed(2)) + 'B';
	}
	return numToUSD(num);
}

export function numToPercentage(num) {
	return num.toFixed(2) + '%';
}

export function toUpperFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
