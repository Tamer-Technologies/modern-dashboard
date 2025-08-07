export function initLeftSidebarSearch() {
	const searchInput = document.querySelector('#sidebar-left__search-input');
	const listItems = document.querySelectorAll('.sidebar-left__nav-item');

	searchInput.addEventListener('input', (e) => {
		const value = e.target.value.toLowerCase();
		listItems.forEach((item) => {
			const isVisible = item.innerText.toLowerCase().includes(value);
			item.classList.toggle('hide', !isVisible);
		});
	});
}
