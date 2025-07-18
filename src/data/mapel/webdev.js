import { module1 } from "./webdev/module1";
import { module2 } from "./webdev/module2";
import { module3 } from "./webdev/module3";

export const class2 = {
	id: "2",
	name: "Web Development",
	description:
		"Memahami secara dasar untuk membangun sebuah website dengan HTML, CSS, dan Javascript.",
	image:
		"https://images.unsplash.com/photo-1733412505442-36cfa59a4240?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	disabled: false,
	modules: [module1, module2, module3],
};
