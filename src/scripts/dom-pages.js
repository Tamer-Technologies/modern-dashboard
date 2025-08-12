import { sidebarSectionsLeft } from './data';

export const pages = [];

sidebarSectionsLeft.forEach((section) => {
	section.list.forEach((page) => {
		pages.push({ title: page.title, html: page.html });
	});
});
