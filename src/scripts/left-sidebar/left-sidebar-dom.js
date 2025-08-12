import { user, sidebarSectionsLeft } from '../data';

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
	sidebarSectionsLeft.forEach((section) => {
		let pages = '';
		section.list.forEach((page) => {
			pages += `
        <li class="sidebar-left__nav-item" data-page-title="${page.title}">
          ${page.svgIcon}
          <span class="sidebar-left__nav-text">${page.title}</span>
        </li>
      `;
		});

		sidebarSectionsHTML += `
      <div class="sidebar-left__section">
						<span class="sidebar-left__section-title">${section.title}</span>
						<nav class="sidebar-left__nav">
							<ul class="sidebar-left__nav-list">
								${pages}
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
