import { module1 as webdev1 } from "./mapel/webdev/module1";
import { module2 as webdev2 } from "./mapel/webdev/module2";
import { module3 as webdev3 } from "./mapel/webdev/module3";
import { module4 as webdev4 } from "./mapel/webdev/module4";
import { module1 as dasarpplg1 } from "./mapel/dasarpplg/module1";
import { module1 as basisdata1 } from "./mapel/basisdata/module1";
import { module2 as basisdata2 } from "./mapel/basisdata/module2";

const courseDetails = {
	1: {
		modules: [dasarpplg1],
	},
	2: {
		modules: [webdev1, webdev2, webdev3, webdev4],
	},
	3: {
		modules: [basisdata1, basisdata2],
	},
};

export default courseDetails;
