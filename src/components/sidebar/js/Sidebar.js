import { user, sidebarSections } from '../../../core/data';
import { initLeftSidebarSearch } from './sidebarSearch';

function renderSidebarData(containerClass, htmlString) {
	const containerDOM = document.querySelector(`.${containerClass}`);
	containerDOM.replaceChildren();
	containerDOM.innerHTML = htmlString;
}

function renderSidebarUser() {
	const sidebarUserHTML = `
      <div class="user-status-border">
        <div class="user-img-container">
          <img
            src="${user.profilePic}"
            alt="man face"
            class="user-img"
          />
        </div>
      </div>
      <span class="sidebar__user-name">${user.name}</span>
    `;

	const containerClass = 'sidebar__user';

	renderSidebarData(containerClass, sidebarUserHTML);
}

function renderSidebarSections() {
	let sidebarSectionsHTML = '';
	sidebarSections.forEach((section) => {
		let pages = '';
		section.list.forEach((page) => {
			pages += `
        <li class="sidebar__nav-item" data-page-title="${page.title}">
          ${page.svgIcon}
          <span class="sidebar__nav-text">${page.title}</span>
        </li>
      `;
		});

		sidebarSectionsHTML += `
      <div class="sidebar__section">
						<span class="sidebar__section-title">${section.title}</span>
						<nav class="sidebar__nav">
							<ul class="sidebar__nav-list">
								${pages}
							</ul>
						</nav>
					</div>
    `;
	});

	const containerClass = 'sidebar__nav-sections';

	renderSidebarData(containerClass, sidebarSectionsHTML);
}

function renderSidebar() {
	renderSidebarUser();
	renderSidebarSections();
}

renderSidebar();
initLeftSidebarSearch();
