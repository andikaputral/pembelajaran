import courseData from "../data/mapel";
import { ClassCard } from "../components/ClassCard";
import Footer from "../components/Footer";

export default function ClassList() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white pt-12">
				Mata Pelajaran
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
				{courseData.map((course) => (
					<ClassCard key={course.id} course={course} />
				))}
			</div>
			<Footer />
		</div>
	);
}
