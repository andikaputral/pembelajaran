import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import courseData from "../data/mapel";
import { Sidebar } from "../components/Sidebar";
import { Content } from "../components/Content";

export default function ClassView() {
	const { classId, lessonId } = useParams();
	const navigate = useNavigate();

	const course = useMemo(
		() => courseData.find((c) => c.id === classId),
		[classId]
	);

	const flatLessons = useMemo(() => {
		if (!course) return [];
		return course.modules
			.filter((module) => !module.disabled)
			.flatMap((module) => module.lessons);
	}, [course]);

	const lesson = useMemo(
		() => flatLessons.find((l) => l.id === lessonId),
		[lessonId, flatLessons]
	);

	const currentLessonIndex = useMemo(() => {
		if (!lesson) return -1;
		return flatLessons.findIndex((l) => l.id === lesson.id);
	}, [lesson, flatLessons]);

	const handleNext = () => {
		if (currentLessonIndex < flatLessons.length - 1) {
			const nextLesson = flatLessons[currentLessonIndex + 1];
			navigate(`/pembelajaran/c/${classId}/${nextLesson.id}`);
		}
	};

	const handlePrev = () => {
		if (currentLessonIndex > 0) {
			const prevLesson = flatLessons[currentLessonIndex - 1];
			navigate(`/pembelajaran/c/${classId}/${prevLesson.id}`);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
			<div className="flex flex-col md:flex-row min-h-screen">
				<div className="static md:sticky md:top-0 w-full md:w-xl md:h-screen bg-gray-100 dark:bg-gray-800 shadow-md flex flex-col z-10">
					<div className="p-4 border-b border-gray-200 dark:border-gray-700">
						<Link
							to={"/pembelajaran"}
							className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 w-full flex items-center justify-center text-sm">
							<ArrowLeftIcon className="h-4 w-4 mr-2" /> Back to Courses
						</Link>
					</div>
					<Sidebar course={course} activeLessonId={lessonId} />
				</div>
				<Content
					lesson={lesson}
					onNext={handleNext}
					onPrev={handlePrev}
					isFirst={currentLessonIndex === 0}
					isLast={currentLessonIndex === flatLessons.length - 1}
				/>
			</div>
		</div>
	);
}
