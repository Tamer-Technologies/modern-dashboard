import { sidebarSections } from '../core/data';

export function getPage(pageTitle) {
	for (const section of sidebarSections) {
		const page = section.list.find((page) => page.title === pageTitle);
		if (page) return page;
	}
}
