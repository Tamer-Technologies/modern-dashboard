import { pages } from './dom-pages';

const container = document.querySelector('.main__section');
const pageNavButton = document.querySelectorAll('.sidebar-left__nav-item');

function showPage(pageTitle) {
	const page = pages.find((page) => page.title === pageTitle);
	container.replaceChildren();
	container.innerHTML = `
    <h2 class="main__section-title">${page.title.toUpperCase()}</h2>
		<div class="main__section-body">${page.html}</div>
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
