import { user, sidebarSectionLeft } from './data';

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
      <span class="sidebar-left__user-name">${user.name}</span>
    `;

	const containerClass = 'sidebar-left__user';

	renderSidebarData(containerClass, sidebarUserHTML);
}

function renderSidebarSections() {
	let sidebarSectionsHTML = '';
	sidebarSectionLeft.forEach((section) => {
		let listItems = '';
		section.list.forEach((list) => {
			listItems += `
        <li class="sidebar-left__nav-item">
          ${list.svgIcon}
          <span class="sidebar-left__nav-text">${list.title}</span>
        </li>
      `;
		});

		sidebarSectionsHTML += `
      <div class="sidebar-left__section">
						<span class="sidebar-left__section-title">${section.section}</span>
						<nav class="sidebar-left__nav">
							<ul class="sidebar-left__nav-list">
								${listItems}
							</ul>
						</nav>
					</div>
    `;
	});

	const containerClass = 'sidebar-left__nav-sections';

	renderSidebarData(containerClass, sidebarSectionsHTML);
}

export function renderSidebar() {
	renderSidebarUser();
	renderSidebarSections();
}
