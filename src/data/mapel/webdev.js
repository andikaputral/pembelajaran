import { module1 } from "./webdev/module1";
import { module2 } from "./webdev/module2";
import { module3 } from "./webdev/module3";
import { module4 } from "./webdev/module4";

export const class2 = {
	id: "2",
	title: "Web Development",
	description:
		"Memahami secara dasar untuk membangun sebuah website dengan HTML, CSS, dan Javascript.",
	image: "/pembelajaran/img/mohammad-rahmani-oXlXu2qukGE-unsplash.jpg",
	disabled: false,
	modules: [module1, module2, module3, module4],
};
