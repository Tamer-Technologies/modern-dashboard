const openNavButton = document.querySelector('#open-nav-button');
const closeNavButton = document.querySelector('#close-nav-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

openNavButton.addEventListener('click', openSidebar);
closeNavButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function closeSidebar() {
	sidebar.classList.toggle('sidebar-show', false);
}

function openSidebar() {
	sidebar.classList.toggle('sidebar-show', true);
}
