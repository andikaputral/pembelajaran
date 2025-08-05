import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	BookOpenIcon,
	ChevronRightIcon,
	DocumentIcon,
	DocumentTextIcon,
	FilmIcon,
	LockClosedIcon,
	MoonIcon,
	SunIcon,
} from "@heroicons/react/24/outline";
import courseData from "../data/mockdata";

const useDarkMode = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));

	useEffect(() => {
		const initialTheme = localStorage.getItem("theme");

		if (initialTheme) {
			setTheme(initialTheme);
		} else {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			setTheme(systemTheme);
		}
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return [theme, toggleTheme];
};

const LessonIcon = ({ type }) => {
	switch (type) {
		case "video":
			return <FilmIcon className="h-5 w-5 mr-3 text-indigo-400" />;
		case "reading":
			return <BookOpenIcon className="h-5 w-5 mr-3 text-sky-400" />;
		case "text":
			return <DocumentTextIcon className="h-5 w-5 mr-3 text-emerald-400" />;
		default:
			return <DocumentIcon className="h-5 w-5 mr-3 text-gray-400" />;
	}
};

const ClassCard = ({ course, isSelected }) => {
	const navigate = useNavigate();

	const handleSelect = () => {
		if (!course.disabled) {
			const firstAvailableModule = course.modules.find((m) => !m.disabled);
			if (firstAvailableModule && firstAvailableModule.lessons.length > 0) {
				navigate(
					`/pembelajaran/c/${course.id}/${firstAvailableModule.lessons[0].id}`
				);
			} else {
				navigate(`/pembelajaran/c/${course.id}`);
			}
		}
	};

	return (
		<div
			onClick={handleSelect}
			className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 border-2 ${
				isSelected ? "border-indigo-500" : "border-transparent"
			} ${
				course.disabled
					? "opacity-50 cursor-not-allowed"
					: "hover:shadow-xl cursor-pointer hover:border-indigo-400"
			}`}>
			<h3 className="text-xl font-bold text-gray-800 dark:text-white">
				{course.title}
			</h3>
			<p className="text-gray-600 dark:text-gray-300 mt-2">
				{course.description}
			</p>
		</div>
	);
};

const Sidebar = ({ course, activeLessonId }) => {
	const [openModuleId, setOpenModuleId] = useState(null);

	useEffect(() => {
		if (activeLessonId) {
			const parentModule = course.modules.find((module) =>
				module.lessons.some((lesson) => lesson.id === activeLessonId)
			);
			if (parentModule) {
				setOpenModuleId(parentModule.id);
			}
		}
	}, [activeLessonId, course]);

	const toggleModule = (moduleId) => {
		setOpenModuleId((prevId) => (prevId === moduleId ? null : moduleId));
	};

	return (
		<aside className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800/50 p-6">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
				{course.title}
			</h2>
			<nav className="space-y-2">
				{course.modules.map((module) => (
					<div key={module.id}>
						<button
							onClick={() => !module.disabled && toggleModule(module.id)}
							disabled={module.disabled}
							className={`w-full flex items-center justify-between text-left font-semibold text-gray-700 dark:text-gray-200 p-3 rounded-lg transition-colors duration-200 ${
								module.disabled
									? "opacity-50 cursor-not-allowed"
									: "hover:bg-gray-200 dark:hover:bg-gray-700"
							}`}>
							<span className="flex items-center">
								{module.disabled && <LockClosedIcon className="h-4 w-4 mr-2" />}
								{module.title}
							</span>
							<ChevronRightIcon
								className={`h-5 w-5 transition-transform duration-300 ${
									openModuleId === module.id ? "rotate-90" : ""
								}`}
							/>
						</button>
						<div
							className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
								openModuleId === module.id && !module.disabled
									? "max-h-screen"
									: "max-h-0"
							}`}>
							<ul className="mt-2 ml-4 pl-4 border-l-2 border-gray-200 dark:border-gray-600 space-y-1 py-1">
								{module.lessons.map((lesson) => (
									<li key={lesson.id}>
										<Link
											to={`/pembelajaran/c/${course.id}/${lesson.id}`}
											className={`flex items-center p-3 rounded-lg transition-colors duration-200 text-sm ${
												activeLessonId === lesson.id
													? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold"
													: "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
											}`}>
											<LessonIcon type={lesson.type} />
											<span>{lesson.title}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</nav>
		</aside>
	);
};

const Content = ({ lesson, onNext, onPrev, isFirst, isLast }) => {
	if (!lesson) {
		return (
			<div className="flex-1 p-8 md:p-12 flex items-center justify-center text-center bg-white dark:bg-gray-900">
				<div>
					<BookOpenIcon className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500" />
					<h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
						Select a lesson to begin
					</h2>
					<p className="mt-2 text-gray-500 dark:text-gray-400">
						Choose a lesson from the sidebar to display its content here.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 flex flex-col relative bg-white dark:bg-gray-900 overflow-hidden">
			<main className="flex-1 p-8 md:p-12 pb-28 overflow-y-auto">
				<div
					className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none"
					dangerouslySetInnerHTML={{ __html: lesson.content }}></div>
			</main>

			<div className="absolute bottom-0 left-0 w-full p-4 md:px-12 md:py-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t dark:border-gray-700 flex justify-between items-center">
				<button
					onClick={onPrev}
					disabled={isFirst}
					className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
					<ArrowLeftIcon className="h-5 w-5 mr-2" />
					Previous
				</button>
				<button
					onClick={onNext}
					disabled={isLast}
					className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors">
					Next
					<ArrowRightIcon className="h-5 w-5 ml-2" />
				</button>
			</div>
		</div>
	);
};

export const CourseList = () => {
	const { classId } = useParams();
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white pt-12">
				Our Courses
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{courseData.map((course) => (
					<ClassCard
						key={course.id}
						course={course}
						isSelected={classId === course.id}
					/>
				))}
			</div>
		</div>
	);
};

export const CourseView = () => {
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

	if (!course) {
		return <CourseList />; // Or a 404 page
	}

	return (
		<div className="flex flex-col md:flex-row min-h-screen">
			<div className="w-full md:w-80 lg:w-96 md:h-screen md:sticky md:top-0 flex-shrink-0 flex flex-col bg-white dark:bg-gray-800 shadow-lg z-10">
				<div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
					<Link
						to="/pembelajaran/"
						className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full flex items-center justify-center text-sm">
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
	);
};

export const ThemeToggleButton = () => {
	const [theme, toggleTheme] = useDarkMode();
	return (
		<div className="absolute top-4 right-4 z-20">
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
				{theme === "light" ? (
					<MoonIcon className="h-6 w-6" />
				) : (
					<SunIcon className="h-6 w-6" />
				)}
			</button>
		</div>
	);
};
