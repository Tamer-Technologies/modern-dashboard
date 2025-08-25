export function initLeftSidebarSearch() {
	const searchInput = document.querySelector('#sidebar__search-input');
	const pages = document.querySelectorAll('.sidebar__nav-item');

	searchInput.addEventListener('input', (e) => {
		const value = e.target.value.toLowerCase();
		pages.forEach((page) => {
			const pageTitle = page.dataset.pageTitle;
			const isVisible = pageTitle.toLowerCase().includes(value);
			page.classList.toggle('hide', !isVisible);
		});
	});
}
