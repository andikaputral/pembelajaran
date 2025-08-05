import { useState, useEffect, useMemo } from "react";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	BookOpenIcon,
	ChevronRightIcon,
	CodeBracketIcon,
	DocumentIcon,
	DocumentTextIcon,
	FilmIcon,
	LockClosedIcon,
	MoonIcon,
	SunIcon,
} from "@heroicons/react/24/outline";
import courseData from "../data/mockdata";

const LessonIcon = ({ type }) => {
	switch (type) {
		case "video":
			return (
				<FilmIcon className="h-5 w-5 mr-3 text-indigo-600 dark:text-indigo-400" />
			);
		case "reading":
			return (
				<BookOpenIcon className="h-5 w-5 mr-3 text-sky-700 dark:text-sky-400" />
			);
		case "text":
			return (
				<DocumentTextIcon className="h-5 w-5 mr-3 text-emerald-700 dark:text-emerald-400" />
			);
		case "code":
			return (
				<CodeBracketIcon className="h-5 w-5 mr-3 text-slate-700 dark:text-slate-400" />
			);
		default:
			return (
				<DocumentIcon className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-400" />
			);
	}
};

const ClassCard = ({ course, onSelect }) => (
	<div
		onClick={() => !course.disabled && onSelect(course.id)}
		className={`bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg border-2 relative transition-transform duration-200 border-transparent ${
			course.disabled
				? "cursor-not-allowed"
				: "hover:shadow-xl cursor-pointer hover:border-indigo-400 hover:scale-105"
		}`}>
		<img
			src={course.image}
			alt={course.title}
			className={`w-full h-64 object-cover rounded-t-[11px] ${
				course.disabled ? "opacity-50" : "opacity-100"
			}`}
			onError={(e) => {
				e.target.onerror = null;
				e.target.src = `https://placehold.co/400x200/F0F8FF/2C3E50?text=${encodeURIComponent(
					course.title
				)}`;
			}}
		/>
		<div
			className={`p-6 flex flex-col grow ${
				course.disabled ? "opacity-50" : "opacity-100"
			}`}>
			<h3 className="text-xl font-bold text-gray-800 dark:text-white">
				{course.title}
			</h3>
			<p className="text-gray-600 dark:text-gray-300 mt-2">
				{course.description}
			</p>
		</div>
	</div>
);

const Sidebar = ({ course, activeLesson, onLessonClick }) => {
	const [openModuleId, setOpenModuleId] = useState(null);

	useEffect(() => {
		if (activeLesson) {
			const parentModule = course.modules.find((module) =>
				module.lessons.some((lesson) => lesson.id === activeLesson.id)
			);
			if (parentModule) {
				setOpenModuleId(parentModule.id);
			}
		}
	}, [activeLesson, course]);

	const toggleModule = (moduleId) => {
		setOpenModuleId((prevId) => (prevId === moduleId ? null : moduleId));
	};

	return (
		<aside className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 shrink-0">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
				{course.title}
			</h2>
			<nav className="space-y-2">
				{course.modules.map((module) => (
					<div key={module.id}>
						<button
							onClick={() => {
								!module.disabled && toggleModule(module.id);
								if (module.lessons.length > 0) {
									onLessonClick(module.lessons[0]);
								} else {
									onLessonClick(null);
								}
							}}
							disabled={module.disabled}
							className={`w-full flex items-center justify-between text-left font-semibold text-gray-700 dark:text-gray-200 p-3 rounded-lg ${
								module.disabled
									? "opacity-50 cursor-not-allowed"
									: "hover:bg-gray-200 dark:hover:bg-gray-700"
							}`}>
							{/* Module title */}
							{module.title}
							{/* Arrow will changed to lock if it's disabled */}
							{module.disabled ? (
								<LockClosedIcon className="h-5 w-5" />
							) : (
								<ChevronRightIcon
									className={`h-5 w-5 transition-transform duration-300 ${
										openModuleId === module.id ? "rotate-90" : ""
									}`}
								/>
							)}
						</button>
						<div
							className={`transition-[max-height] duration-300 ease-in-out ${
								openModuleId === module.id && !module.disabled
									? "max-h-screen"
									: "max-h-0 overflow-hidden"
							}`}>
							<ul className="mt-2 ml-4 pl-4 border-l-2 border-gray-200 dark:border-gray-600 space-y-1 py-1">
								{module.lessons.map((lesson) => (
									<li key={lesson.id}>
										<a
											href="#"
											onClick={(e) => {
												e.preventDefault();
												onLessonClick(lesson);
											}}
											className={`flex items-center p-3 rounded-lg text-sm transition-transform ${
												activeLesson && activeLesson.id === lesson.id
													? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-neutral-100 font-semibold translate-x-2"
													: "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
											}`}>
											<LessonIcon type={lesson.type} />
											<span>{lesson.title}</span>
										</a>
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
			<div className="p-8 md:p-12 flex flex-1 items-center justify-center text-center bg-white dark:bg-gray-900">
				<div>
					<BookOpenIcon className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500" />
					<h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
						Pilih module untuk memulai
					</h2>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col bg-white dark:bg-gray-900 w-full">
			<main className="flex-1 p-8 md:p-12 pb-28">
				<div
					className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none"
					dangerouslySetInnerHTML={{ __html: lesson.content }}></div>
			</main>

			<div className="p-4 md:px-12 md:py-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-500 dark:border-gray-700 flex justify-between items-center">
				<button
					onClick={onPrev}
					disabled={isFirst}
					className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700">
					<ArrowLeftIcon className="h-5 w-5 mr-2" />
					Previous
				</button>
				<button
					onClick={onNext}
					disabled={isLast}
					className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700">
					Next
					<ArrowRightIcon className="h-5 w-5 ml-2" />
				</button>
			</div>
		</div>
	);
};

export function Class() {
	const [selectedClassId, setSelectedClassId] = useState(null);
	const [selectedLesson, setSelectedLesson] = useState(null);
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("darkMode")
	);

	useEffect(() => {
		const savedStorage = localStorage.getItem("darkMode");

		if (savedStorage) {
			setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		if (isDarkMode) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("darkMode", isDarkMode);
	}, [isDarkMode]);

	const selectedCourse = useMemo(
		() => courseData.find((c) => c.id === selectedClassId),
		[selectedClassId]
	);

	const flatLessons = useMemo(() => {
		if (!selectedCourse) return [];
		return selectedCourse.modules
			.filter((module) => !module.disabled)
			.flatMap((module) => module.lessons);
	}, [selectedCourse]);

	const currentLessonIndex = useMemo(() => {
		if (!selectedLesson) return -1;
		return flatLessons.findIndex((lesson) => lesson.id === selectedLesson.id);
	}, [selectedLesson, flatLessons]);

	const handleSelectClass = (classId) => {
		setSelectedClassId(classId);
		const course = courseData.find((c) => c.id === classId);
		const firstAvailableModule = course?.modules.find((m) => !m.disabled);
		if (firstAvailableModule && firstAvailableModule.lessons.length > 0) {
			setSelectedLesson(firstAvailableModule.lessons[0]);
		} else {
			setSelectedLesson(null);
		}
	};

	const handleNext = () => {
		if (currentLessonIndex < flatLessons.length - 1) {
			setSelectedLesson(flatLessons[currentLessonIndex + 1]);
		}
	};

	const handlePrev = () => {
		if (currentLessonIndex > 0) {
			setSelectedLesson(flatLessons[currentLessonIndex - 1]);
		}
	};

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
			<div className="fixed md:absolute top-4 right-4 z-20">
				<button
					onClick={() => {
						setIsDarkMode(!isDarkMode);
					}}
					className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
					{isDarkMode ? (
						<SunIcon className="h-6 w-6 text-yellow-300" />
					) : (
						<MoonIcon className="h-6 w-6 text-slate-800" />
					)}
				</button>
			</div>

			{!selectedCourse ? (
				<div className="p-8">
					<h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white pt-12">
						Mata Pelajaran
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
						{courseData.map((course) => (
							<ClassCard
								key={course.id}
								course={course}
								onSelect={handleSelectClass}
							/>
						))}
					</div>
				</div>
			) : (
				<div className="flex flex-col md:flex-row min-h-screen">
					<div className="static md:sticky md:top-0 w-full md:w-xl md:h-screen bg-gray-100 dark:bg-gray-800 shadow-md flex flex-col z-10">
						<div className="p-4 border-b border-gray-200 dark:border-gray-700">
							<button
								onClick={() => {
									setSelectedClassId(null);
									setSelectedLesson(null);
								}}
								className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 w-full flex items-center justify-center text-sm">
								<ArrowLeftIcon className="h-4 w-4 mr-2" /> Back to Courses
							</button>
						</div>
						<Sidebar
							course={selectedCourse}
							activeLesson={selectedLesson}
							onLessonClick={setSelectedLesson}
						/>
					</div>
					<Content
						lesson={selectedLesson}
						onNext={handleNext}
						onPrev={handlePrev}
						isFirst={currentLessonIndex === 0}
						isLast={currentLessonIndex === flatLessons.length - 1}
					/>
				</div>
			)}
		</div>
	);
}
