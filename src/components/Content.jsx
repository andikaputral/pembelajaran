import {
	ArrowLeftIcon,
	ArrowRightIcon,
	BookOpenIcon,
} from "@heroicons/react/24/outline";

export const Content = ({ lesson, onNext, onPrev, isFirst, isLast }) => {
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
