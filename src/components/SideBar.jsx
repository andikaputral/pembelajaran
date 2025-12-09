import {
	BookOpenText,
	ChevronRight,
	CircleQuestionMark,
	Code,
	File,
	FileText,
	Film,
	Lock,
	X,
} from 'lucide-react';
import { useState, useEffect, memo } from 'react';
import { Link, useNavigate } from 'react-router';

export const Sidebar = memo(
	({ course, activeModuleId, activeLessonId, onClose }) => {
		const [openModuleId, setOpenModuleId] = useState(null);
		const navigate = useNavigate();

		useEffect(() => {
			setOpenModuleId(activeModuleId);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, [activeModuleId]);

		const toggleModule = (moduleId) => {
			setOpenModuleId((prevId) => (prevId === moduleId ? null : moduleId));
			navigate(`/pembelajaran/c/${course.id}/m/${moduleId}/1`, {
				replace: true,
			});
		};

		const LessonIcon = ({ type }) => {
			switch (type) {
				case 'video':
					return (
						<Film className="size-5 mr-3 text-indigo-700 dark:text-sky-400" />
					);
				case 'reading':
					return (
						<BookOpenText className="size-5 mr-3 text-indigo-700 dark:text-sky-400" />
					);
				case 'text':
					return (
						<FileText className="size-5 mr-3 text-indigo-700 dark:text-sky-400" />
					);
				case 'code':
					return (
						<Code className="size-5 mr-3 text-indigo-700 dark:text-sky-400" />
					);
				case 'quiz':
					return (
						<CircleQuestionMark className="size-5 mr-3 text-indigo-700 dark:text-sky-400" />
					);
				default:
					return (
						<File className="size-5 mr-3 text-gray-700 dark:text-gray-400" />
					);
			}
		};

		return (
			<>
				<div className="flex flex-row-reverse">
					<button
						onClick={onClose}
						className="lg:hidden p-5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">
						<X className="size-6" />
					</button>
				</div>

				<aside className="flex-1 bg-slate-100 dark:bg-slate-800 pl-6 pr-3 pb-6 lg:p-6 shrink-0">
					<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
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
									className={`w-full flex items-center justify-between text-left font-semibold text-slate-700 dark:text-slate-200 p-3 rounded-lg ${
										module.disabled
											? 'opacity-50 cursor-not-allowed'
											: 'hover:bg-slate-200 dark:hover:bg-slate-700'
									}`}>
									{module.title}
									{module.disabled ? (
										<Lock className="h-5 w-5" />
									) : (
										<ChevronRight
											className={`h-5 w-5 transition-transform duration-300 ${
												openModuleId === module.id ? 'rotate-90' : ''
											}`}
										/>
									)}
								</button>
								<div
									className={`transition-[max-height] duration-300 ease-in-out ${
										openModuleId === module.id && !module.disabled
											? 'max-h-screen'
											: 'max-h-0 overflow-hidden'
									}`}>
									<ul className="mt-2 ml-4 pl-2 md:pl-4 pr-4 md:pr-0 border-l-2 border-slate-200 dark:border-slate-600 space-y-1 py-1">
										{module.lessons.map((lesson) => (
											<li key={lesson.id}>
												<Link
													to={`/pembelajaran/c/${course.id}/m/${module.id}/${lesson.id}`}
													onClick={onClose}
													className={`flex items-center p-3 rounded-lg text-sm transition-transform ${
														activeLessonId === lesson.id
															? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-neutral-100 font-semibold translate-x-2'
															: 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
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
	}
);
