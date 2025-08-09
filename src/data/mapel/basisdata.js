import { module1 } from "./basisdata/module1";
import { module2 } from "./basisdata/module2";

export const class3 = {
	id: "3",
	title: "Basis Data",
	description:
		"Membuat sebuah sistem struktur data yang menyimpan, mengelola, dan mengakses informasi secara mudah.",
	image: "/pembelajaran/img/paul-hanaoka-s0XabTAKvak-unsplash.jpg",
	disabled: true,
	modules: [module1, module2],
};
