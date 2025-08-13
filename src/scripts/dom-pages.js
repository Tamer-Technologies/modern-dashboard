import { sidebarSectionsLeft } from './data';

export function getPage(pageTitle) {
	for (const section of sidebarSectionsLeft) {
		const page = section.list.find((page) => page.title === pageTitle);
		if (page) return page;
	}
}
