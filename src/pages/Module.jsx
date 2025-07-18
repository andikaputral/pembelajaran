import { useState, useEffect } from "react";
import { mapel } from "../data/mapel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Module() {
	// State to manage the current page view: 'classList' or 'classDetail'
	const [currentPage, setCurrentPage] = useState("classList");
	// State to store the currently selected class object
	const [selectedClass, setSelectedClass] = useState(null);

	/**
	 * Handles the selection of a class.
	 * Sets the selected class and changes the page to 'classDetail'.
	 * @param {object} classItem - The class object that was clicked.
	 */
	const handleSelectClass = (classItem) => {
		setSelectedClass(classItem);
		setCurrentPage("classDetail");
	};

	/**
	 * Handles navigating back to the class list.
	 * Resets selected class and changes the page to 'classList'.
	 */
	const handleBackToClasses = () => {
		setSelectedClass(null);
		setCurrentPage("classList");
	};

	return (
		<div className="flex flex-col items-center">
			<Header selectedClass={selectedClass} />

			<main className="w-full flex-grow">
				{currentPage === "classList" ? (
					// Render ClassList component when on the class list page
					<ClassList classes={mapel} onSelectClass={handleSelectClass} />
				) : (
					// Render ClassDetail component when on the class detail page
					<ClassDetail
						selectedClass={selectedClass}
						onBackToClasses={handleBackToClasses}
					/>
				)}
			</main>

			<Footer />
		</div>
	);
}

/**
 * ClassList Component: Displays a list of available classes.
 * @param {object} props - Component props.
 * @param {Array<object>} props.classes - An array of class objects.
 * @param {function} props.onSelectClass - Callback function when a class is selected.
 */
function ClassList({ classes, onSelectClass }) {
	return (
		<div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-xl">
			<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-amber-700">
				Mata Pelajaran
			</h2>
			<div className="flex flex-wrap justify-center gap-6">
				{classes.map((classItem) => (
					<div
						key={classItem.id}
						className={`relative w-xl h-md bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 dark:bg-gradient-to-br dark:from-slate-950 dark:to-gray-950 dark:border-slate-800 rounded-xl shadow-lg ${
							classItem.disabled
								? "opacity-60 cursor-not-allowed"
								: "hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
						} flex flex-col overflow-hidden`}
						onClick={
							classItem.disabled ? null : () => onSelectClass(classItem)
						}>
						<div
							className={`absolute inset-0 bg-gray-400/50 ${
								classItem.disabled ? "block" : "hidden"
							}`}
						/>
						<img
							src={classItem.image}
							alt={classItem.name}
							className="w-full h-48 object-cover rounded-t-xl"
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = `https://placehold.co/400x200/F0F8FF/2C3E50?text=${encodeURIComponent(
									classItem.name
								)}`;
							}}
						/>
						<div className="p-5 flex flex-col flex-grow">
							<h3 className="text-xl font-bold text-indigo-800 dark:text-amber-700 mb-2">
								{classItem.name}
							</h3>
							<p className="text-gray-700 dark:text-neutral-200 text-sm flex-grow">
								{classItem.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

/**
 * ClassDetail Component: Displays the details of a selected class, including modules and lessons.
 * @param {object} props - Component props.
 * @param {object} props.selectedClass - The class object currently selected.
 * @param {function} props.onBackToClasses - Callback function to navigate back to the class list.
 */
function ClassDetail({ selectedClass, onBackToClasses }) {
	// State to manage the currently selected module
	const [selectedModule, setSelectedModule] = useState(null);
	// State to manage the currently selected lesson
	const [selectedLesson, setSelectedLesson] = useState(null);

	// Effect to set initial selected module and lesson when selectedClass changes
	useEffect(() => {
		if (selectedClass && selectedClass.modules.length > 0) {
			setSelectedModule(selectedClass.modules[0]); // Select the first module by default
			if (selectedClass.modules[0].lessons.length > 0) {
				setSelectedLesson(selectedClass.modules[0].lessons[0]); // Select the first lesson of the first module
			} else {
				setSelectedLesson(null);
			}
		} else {
			setSelectedModule(null);
			setSelectedLesson(null);
		}
	}, [selectedClass]); // Re-run when selectedClass changes

	if (!selectedClass) {
		return (
			<div className="text-center p-8 bg-white dark:bg-black rounded-lg shadow-md">
				<p className="text-lg text-gray-600">
					No class selected. Please go back and select a class.
				</p>
				<button
					onClick={onBackToClasses}
					className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md">
					Kembali
				</button>
			</div>
		);
	}
	console.log(selectedClass);

	return (
		<div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-xl flex flex-col h-full">
			<div className="flex flex-col md:flex-row items-start justify-between mb-6 pb-4 gap-3 border-b border-gray-200 dark:border-slate-900">
				<button
					onClick={onBackToClasses}
					className="bg-gray-200 dark:bg-amber-900 text-gray-700 dark:text-amber-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-amber-700 transition-colors duration-200 shadow-sm flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 mr-2"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H16a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
					Kembali
				</button>
				<div className="flex justify-center w-full">
					<h2 className="text-2xl sm:text-3xl text-center font-bold text-indigo-700 dark:text-amber-700">
						{selectedModule ? selectedModule.name : selectedClass.name}
					</h2>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row flex-grow gap-6">
				{/* Sidebar for Modules and Lessons */}
				<aside className="w-full lg:max-w-md bg-gray-50 dark:bg-slate-900 p-4 rounded-lg shadow-inner">
					<h3 className="text-xl font-semibold text-indigo-600 dark:text-amber-700 mb-4">
						List Module
					</h3>
					{selectedClass.modules.map((moduleItem) => (
						<div key={moduleItem.id}>
							<button
								onClick={
									moduleItem.disabled
										? null
										: () => {
												setSelectedModule(moduleItem);
												// If the module has lessons, select the first one
												if (moduleItem.lessons.length > 0) {
													setSelectedLesson(moduleItem.lessons[0]);
												} else {
													setSelectedLesson(null);
												}
										  }
								}
								className={`w-full text-left p-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-between
                  ${
										selectedModule && selectedModule.id === moduleItem.id
											? "bg-indigo-100 text-indigo-800 dark:bg-amber-900 dark:text-amber-100 z-10"
											: "bg-white text-gray-700 hover:bg-gray-100 dark:bg-black dark:text-slate-200 dark:hover:bg-amber-900"
									} ${moduleItem.disabled ? "hidden" : ""}`}>
								<span>{moduleItem.name}</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`h-5 w-5 transform ${
										selectedModule && selectedModule.id === moduleItem.id
											? "rotate-90"
											: ""
									} transition-transform`}
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
							<ul
								className={`mt-2 ml-4 border-l border-gray-300 pl-4 transition-all ease-in-out duration-200 ${
									selectedModule && selectedModule.id === moduleItem.id
										? "max-h-screen opacity-100"
										: "max-h-0 opacity-0 overflow-hidden"
								} `}>
								{moduleItem.lessons.map((lessonItem) => (
									<li key={lessonItem.id} className="mb-1">
										<button
											onClick={() => setSelectedLesson(lessonItem)}
											className={`w-full text-left p-2 text-sm rounded-md transition-all duration-200
                          ${
														selectedLesson &&
														selectedLesson.id === lessonItem.id
															? "bg-indigo-50 text-indigo-700 font-semibold dark:bg-amber-800 dark:text-amber-200 translate-x-1.5 lg:translate-x-2"
															: "text-gray-600 hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-amber-800"
													}`}>
											{lessonItem.name}
										</button>
									</li>
								))}
							</ul>
						</div>
					))}
				</aside>

				{/* Content Area for Lesson */}
				<section className="w-full bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-900 overflow-y-auto max-h-[calc(100vh-250px)] lg:max-h-[unset]">
					{selectedLesson ? (
						<>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-200">
								{selectedLesson.name}
							</h3>
							<div className="border border-neutral-200 mb-4 mt-2" />
							<div
								className="prose max-w-none text-gray-800 dark:text-neutral-100 hyphens-auto text-justify indent-5 leading-relaxed"
								dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
							/>
						</>
					) : (
						<div className="text-center text-gray-500 dark:text-neutral-100 py-10">
							<p className="text-lg">
								Please select a lesson from the sidebar to view its content.
							</p>
						</div>
					)}
				</section>
			</div>
		</div>
	);
}
