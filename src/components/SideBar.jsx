import {
	BookOpenIcon,
	ChevronRightIcon,
	CodeBracketIcon,
	DocumentIcon,
	DocumentTextIcon,
	FilmIcon,
	LockClosedIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Sidebar = ({ course, activeLessonId, onClose }) => {
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
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [activeLessonId, course]);

	const toggleModule = (moduleId) => {
		setOpenModuleId((prevId) => (prevId === moduleId ? null : moduleId));
	};

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

	return (
		<>
			<div className="flex flex-row-reverse">
				<button
					onClick={onClose}
					className="md:hidden p-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
					<XMarkIcon className="size-6" />
				</button>
			</div>

			<aside className="flex-1 bg-gray-100 dark:bg-gray-800 pl-6 pr-3 pb-6 md:p-6 shrink-0">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
					{course.title}
				</h2>
				<nav className="space-y-2">
					{course.modules.map((module) => (
						<div key={module.id}>
							<button
								onClick={() => {
									!module.disabled && toggleModule(module.id);
								}}
								disabled={module.disabled}
								className={`w-full flex items-center justify-between text-left font-semibold text-gray-700 dark:text-gray-200 p-3 rounded-lg ${
									module.disabled
										? "opacity-50 cursor-not-allowed"
										: "hover:bg-gray-200 dark:hover:bg-gray-700"
								}`}>
								{module.title}
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
								<ul className="mt-2 ml-4 pl-2 md:pl-4 pr-4 md:pr-0 border-l-2 border-gray-200 dark:border-gray-600 space-y-1 py-1">
									{module.lessons.map((lesson) => (
										<li key={lesson.id}>
											<Link
												to={`/pembelajaran/c/${course.id}/${lesson.id}`}
												onClick={onClose}
												className={`flex items-center p-3 rounded-lg text-sm transition-transform ${
													activeLessonId === lesson.id
														? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-neutral-100 font-semibold translate-x-2"
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
		</>
	);
};
