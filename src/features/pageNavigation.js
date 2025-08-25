import { getPage } from '../services/getPage';

const container = document.querySelector('.main__section');
const pageNavButton = document.querySelectorAll('.sidebar__nav-item');

export function showPage(pageTitle) {
	const page = getPage(pageTitle);
	container.replaceChildren();
	container.innerHTML = `
    <h2 class="main__section-title">${page.title.toUpperCase()}</h2>
		<div class="main__section-body">${page.renderPage()}</div>
  `;
}

pageNavButton.forEach((page) => {
	const pageTitle = page.dataset.pageTitle;

	page.addEventListener('click', () => {
		pageNavButton.forEach((page) =>
			page.classList.toggle('nav-item-focus', false)
		);
		page.classList.toggle('nav-item-focus', true);
		showPage(pageTitle);
	});
});
