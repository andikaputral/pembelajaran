import { BookOpen, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router';
import { Quiz } from './Quiz';

export const Content = memo(
	({ lesson, onNext, onPrev, isFirst, isLast, onMenuClick }) => {
		if (!lesson) {
			return (
				<div className="flex flex-1 items-center justify-center text-center bg-white dark:bg-slate-900">
					<Link
						to={'/pembelajaran'}
						className="md:hidden fixed flex top-4 left-4 p-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 z-10 items-center gap-2 text-sm">
						<ChevronLeft className="size-5" /> Kembali
					</Link>
					<button
						onClick={onMenuClick}
						className="md:hidden fixed top-4 left-32 p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white z-10">
						<Menu className="size-6" /> Module
					</button>
					<div>
						<BookOpen className="h-16 w-16 mx-auto text-slate-400 dark:text-slate-500" />
						<h2 className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-300">
							Pilih module untuk memulai
						</h2>
					</div>
				</div>
			);
		}

		if (lesson.type === 'quiz' && lesson.quizData) {
			return (
				<div className="relative flex flex-col w-full min-h-screen bg-white dark:bg-slate-900">
					<button
						onClick={onMenuClick}
						className="md:hidden absolute top-4 left-4 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white z-10">
						<Menu className="h-6 w-6" />
					</button>
					<main className="flex-1 p-8 md:p-12 pb-28 pt-16 md:pt-12 overflow-y-auto">
						<Quiz key={lesson.id} data={lesson.quizData} />
					</main>
					<div className="sticky bottom-0 p-4 lg:px-12 lg:py-6 bg-slate-100 dark:bg-slate-800 border-t border-slate-500 dark:border-slate-700 flex justify-between items-center">
						<button
							onClick={onPrev}
							disabled={isFirst}
							className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-indigo-700">
							<ChevronLeft className="h-5 w-5 mr-2" />
							Previous
						</button>
						<button
							onClick={onNext}
							disabled={isLast}
							className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-indigo-700">
							Next
							<ChevronRight className="h-5 w-5 ml-2" />
						</button>
					</div>
				</div>
			);
		}

		return (
			<div className="relative flex flex-col w-full min-h-screen bg-white dark:bg-slate-900">
				<Link
					to={'/pembelajaran'}
					className="lg:hidden fixed flex top-4 left-4 p-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 z-10 items-center gap-2 text-sm">
					<ChevronLeft className="size-5" /> Kembali
				</Link>
				<button
					onClick={onMenuClick}
					className="flex fixed lg:hidden top-4 left-32 p-2 gap-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white z-10">
					<Menu className="size-6" /> Module
				</button>
				<main className="flex-1 mt-12 lg:mt-0 p-8 lg:p-12 lg:pb-28">
					<header className="prose prose-md md:prose-lg lg:prose-xl dark:prose-invert max-w-full mb-12">
						<h1>{lesson.title}</h1>
					</header>
					<div
						className="prose prose-lg lg:prose-xl dark:prose-invert text-justify hyphens-auto max-w-none"
						dangerouslySetInnerHTML={{ __html: lesson.content }}
					/>
				</main>

				<div className="sticky bottom-0 p-4 lg:px-12 lg:py-6 bg-slate-100 dark:bg-slate-800 border-t border-slate-500 dark:border-slate-700 flex justify-between items-center">
					<button
						onClick={onPrev}
						disabled={isFirst}
						className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-indigo-700">
						<ChevronLeft className="h-5 w-5 mr-2" />
						Previous
					</button>
					<button
						onClick={onNext}
						disabled={isLast}
						className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-indigo-700">
						Next
						<ChevronRight className="h-5 w-5 ml-2" />
					</button>
				</div>
			</div>
		);
	}
);
