import { module1 as webdev1 } from './subject/webdev/module1';
import { module2 as webdev2 } from './subject/webdev/module2';
import { module3 as webdev3 } from './subject/webdev/module3';
import { module4 as webdev4 } from './subject/webdev/module4';
import { module1 as dasarpplg1 } from './subject/dasarpplg/module1';
import { module1 as basisdata1 } from './subject/basisdata/module1';
import { module2 as basisdata2 } from './subject/basisdata/module2';
import { module1 as desaingrafis1 } from './subject/desaingrafis/module1';
import { module2 as desaingrafis2 } from './subject/desaingrafis/module2';

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
	4: {
		modules: [desaingrafis1, desaingrafis2],
	},
};

export default courseDetails;
