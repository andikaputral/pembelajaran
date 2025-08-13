import React, { useState, useEffect, useMemo } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	useParams,
	useNavigate,
	Link,
	Navigate,
} from "react-router-dom";
import {
	ChevronDown,
	ChevronRight,
	BookOpen,
	Film,
	FileText,
	Lock,
	Sun,
	Moon,
	ArrowLeft,
	ArrowRight,
	Menu,
	X,
} from "lucide-react";

// --- Mock Data ---
const courseData = [
	{
		id: "cs101",
		title: "Introduction to Computer Science",
		description:
			"A foundational course on the principles of computing and programming.",
		disabled: false,
		modules: [
			{
				id: "m1",
				title: "Module 1: The Basics",
				disabled: false,
				lessons: [
					{
						id: "l1a",
						title: "What is a Computer?",
						type: "video",
						content:
							'<h1>What is a Computer?</h1><p>A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. You can also use it to edit or create spreadsheets, presentations, and even videos.</p><iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/p2_p_R4h8vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>An algorithm is a set of instructions for solving a problem or accomplishing a task. Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently. They are fundamental concepts in computer science.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Proin sed quam. Sed vitae eros. Nam vitae justo. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>',
					},
					{
						id: "l1b",
						title: "Algorithms & Data Structures",
						type: "text",
						content:
							"<h1>Algorithms & Data Structures</h1><p>An algorithm is a set of instructions for solving a problem or accomplishing a task. Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently. They are fundamental concepts in computer science.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Proin sed quam. Sed vitae eros. Nam vitae justo. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>",
					},
				],
			},
			{
				id: "m2",
				title: "Module 2: Programming Fundamentals",
				disabled: false,
				lessons: [
					{
						id: "l1a",
						title: "Variables and Data Types (from Module 2)",
						type: "reading",
						content:
							"<h1>Variables and Data Types</h1><p>This is the content from Module 2. In programming, a variable is a value that can change, depending on conditions or on information passed to the program. Data types are classifications that specify which type of value a variable has and what type of mathematical, relational, or logical operations can be applied to it without causing an error.</p>",
					},
					{
						id: "l2b",
						title: "Control Structures",
						type: "video",
						content:
							'<h1>Control Structures</h1><p>Control structures are programming block that can analyze variables and choose a direction in which to go based on given parameters. The most basic control structures are if/else statements and loops.</p><iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/d2s234ke_f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
					{
						id: "l2c",
						title: "Functions",
						type: "text",
						content:
							"<h1>Functions</h1><p>A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.</p>",
					},
				],
			},
			{
				id: "m3",
				title: "Module 3: Advanced Topics",
				disabled: false,
				lessons: [
					{
						id: "l3a",
						title: "Object-Oriented Programming",
						type: "reading",
						content:
							'<h1>Object-Oriented Programming</h1><p>OOP is a programming paradigm based on the concept of "objects".</p>',
					},
					{
						id: "l3b",
						title: "Recursion",
						type: "text",
						content:
							"<h1>Recursion</h1><p>Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.</p>",
					},
					{
						id: "l3c",
						title: "Networking Basics",
						type: "video",
						content:
							'<h1>Networking Basics</h1><p>An introduction to computer networking concepts.</p><iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/3QhU9jd03a0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
				],
			},
		],
	},
	{
		id: "math202",
		title: "Advanced Calculus",
		description: "Explore the concepts of limits, derivatives, and integrals.",
		disabled: false,
		modules: [
			{
				id: "m1",
				title: "Module 1: Limits and Continuity",
				disabled: false,
				lessons: [
					{
						id: "l1a",
						title: "Introduction to Limits",
						type: "video",
						content:
							'<h1>Introduction to Limits</h1><p>This lesson covers the fundamental concept of limits in calculus.</p><iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/riXcZT2ICjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
					{
						id: "l1b",
						title: "Continuity",
						type: "text",
						content:
							"<h1>Continuity</h1><p>Understanding continuity and its importance in calculus.</p>",
					},
				],
			},
			{
				id: "m2",
				title: "Module 2: Derivatives",
				disabled: true,
				lessons: [
					{
						id: "l2a",
						title: "The Derivative Definition",
						type: "reading",
						content:
							"<h1>The Derivative Definition</h1><p>Exploring the definition of a derivative.</p>",
					},
					{
						id: "l2b",
						title: "Differentiation Rules",
						type: "video",
						content:
							'<h1>Differentiation Rules</h1><p>Learn the power rule, product rule, and quotient rule.</p><iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/5yfh5cf4-0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
				],
			},
		],
	},
	{
		id: "design101",
		title: "The Art of Design",
		description:
			"Learn the fundamentals of design principles and visual communication (Coming Soon).",
		disabled: true,
		modules: [],
	},
];

// --- Custom Hooks ---
const useDarkMode = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const root = window.document.documentElement;
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

// --- Components ---

const LessonIcon = ({ type }) => {
	switch (type) {
		case "video":
			return <Film className="h-5 w-5 mr-3 text-indigo-400" />;
		case "reading":
			return <BookOpen className="h-5 w-5 mr-3 text-sky-400" />;
		case "text":
			return <FileText className="h-5 w-5 mr-3 text-emerald-400" />;
		default:
			return <FileText className="h-5 w-5 mr-3 text-gray-400" />;
	}
};

const ClassCard = ({ course, isSelected }) => {
	const navigate = useNavigate();

	const handleSelect = () => {
		if (!course.disabled) {
			const firstAvailableModule = course.modules.find((m) => !m.disabled);
			if (firstAvailableModule && firstAvailableModule.lessons.length > 0) {
				navigate(
					`/courses/${course.id}/${firstAvailableModule.id}/${firstAvailableModule.lessons[0].id}`
				);
			} else {
				navigate(`/courses/${course.id}`);
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

const Sidebar = ({ course, activeModuleId, activeLessonId, onClose }) => {
	const [openModuleId, setOpenModuleId] = useState(null);

	useEffect(() => {
		setOpenModuleId(activeModuleId);
	}, [activeModuleId]);

	const toggleModule = (moduleId) => {
		setOpenModuleId((prevId) => (prevId === moduleId ? null : moduleId));
	};

	return (
		<div className="flex flex-col h-full">
			<div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
				<Link
					to="/"
					className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full flex items-center justify-center text-sm">
					<ArrowLeft className="h-4 w-4 mr-2" /> Back to Courses
				</Link>
				<button
					onClick={onClose}
					className="md:hidden ml-4 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
					<X className="h-6 w-6" />
				</button>
			</div>
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
									{module.disabled && <Lock className="h-4 w-4 mr-2" />}
									{module.title}
								</span>
								<ChevronRight
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
												to={`/courses/${course.id}/${module.id}/${lesson.id}`}
												onClick={onClose}
												className={`flex items-center p-3 rounded-lg transition-colors duration-200 text-sm ${
													activeLessonId === lesson.id &&
													activeModuleId === module.id
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
		</div>
	);
};

const Content = ({ lesson, onNext, onPrev, isFirst, isLast, onMenuClick }) => {
	if (!lesson) {
		return (
			<div className="flex-1 p-8 md:p-12 flex items-center justify-center text-center bg-white dark:bg-gray-900">
				<button
					onClick={onMenuClick}
					className="md:hidden absolute top-4 left-4 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white z-10">
					<Menu className="h-6 w-6" />
				</button>
				<div>
					<BookOpen className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500" />
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
			<button
				onClick={onMenuClick}
				className="md:hidden absolute top-4 left-4 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white z-10">
				<Menu className="h-6 w-6" />
			</button>
			<main className="flex-1 p-8 md:p-12 pb-28 pt-16 md:pt-12 overflow-y-auto">
				<div
					className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none"
					dangerouslySetInnerHTML={{ __html: lesson.content }}></div>
			</main>

			<div className="absolute bottom-0 left-0 w-full p-4 md:px-12 md:py-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t dark:border-gray-700 flex justify-between items-center">
				<button
					onClick={onPrev}
					disabled={isFirst}
					className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
					<ArrowLeft className="h-5 w-5 mr-2" />
					Previous
				</button>
				<button
					onClick={onNext}
					disabled={isLast}
					className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors">
					Next
					<ArrowRight className="h-5 w-5 ml-2" />
				</button>
			</div>
		</div>
	);
};

const CourseList = () => {
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

const CourseView = () => {
	const { classId, moduleId, lessonId } = useParams();
	const navigate = useNavigate();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const course = useMemo(
		() => courseData.find((c) => c.id === classId),
		[classId]
	);

	useEffect(() => {
		if (course && course.disabled) {
			navigate("/", { replace: true });
		} else if (course && !moduleId && !lessonId) {
			// If only a classId is provided, navigate to the first lesson of the first module
			const firstAvailableModule = course.modules.find((m) => !m.disabled);
			if (firstAvailableModule && firstAvailableModule.lessons.length > 0) {
				navigate(
					`/courses/${course.id}/${firstAvailableModule.id}/${firstAvailableModule.lessons[0].id}`,
					{ replace: true }
				);
			}
		}
	}, [course, moduleId, lessonId, navigate]);

	// Prevent body scroll when mobile sidebar is open
	useEffect(() => {
		if (isSidebarOpen) {
			document.body.classList.add("overflow-hidden", "md:overflow-auto");
		} else {
			document.body.classList.remove("overflow-hidden", "md:overflow-auto");
		}
		return () => {
			document.body.classList.remove("overflow-hidden", "md:overflow-auto");
		};
	}, [isSidebarOpen]);

	// This is used for Next/Prev navigation
	const flatLessons = useMemo(() => {
		if (!course) return [];
		return course.modules
			.filter((module) => !module.disabled)
			.flatMap((module) =>
				module.lessons.map((lesson) => ({
					...lesson,
					moduleId: module.id,
				}))
			);
	}, [course]);

	// This finds the specific lesson to display, scoped to the correct module
	const lesson = useMemo(() => {
		if (!course || !moduleId || !lessonId) return null;
		const module = course.modules.find((m) => m.id === moduleId);
		if (!module) return null;
		return module.lessons.find((l) => l.id === lessonId);
	}, [course, moduleId, lessonId]);

	const currentLessonIndex = useMemo(() => {
		if (!lessonId || !moduleId) return -1;
		// Find the index in the flattened array based on both lessonId and moduleId
		return flatLessons.findIndex(
			(l) => l.id === lessonId && l.moduleId === moduleId
		);
	}, [lessonId, moduleId, flatLessons]);

	const handleNext = () => {
		if (currentLessonIndex < flatLessons.length - 1) {
			const nextLesson = flatLessons[currentLessonIndex + 1];
			navigate(`/courses/${classId}/${nextLesson.moduleId}/${nextLesson.id}`);
		}
	};

	const handlePrev = () => {
		if (currentLessonIndex > 0) {
			const prevLesson = flatLessons[currentLessonIndex - 1];
			navigate(`/courses/${classId}/${prevLesson.moduleId}/${prevLesson.id}`);
		}
	};

	if (!course || course.disabled) {
		return null; // Render nothing while redirecting
	}

	return (
		<div className="relative min-h-screen md:flex">
			{/* Mobile Sidebar */}
			<div
				className={`fixed inset-y-0 left-0 z-30 w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				<Sidebar
					course={course}
					activeModuleId={moduleId}
					activeLessonId={lessonId}
					onClose={() => setIsSidebarOpen(false)}
				/>
			</div>
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-20 md:hidden"
					onClick={() => setIsSidebarOpen(false)}></div>
			)}

			{/* Desktop Sidebar */}
			<div className="hidden md:flex md:flex-shrink-0">
				<div className="flex flex-col w-80 lg:w-96">
					<Sidebar
						course={course}
						activeModuleId={moduleId}
						activeLessonId={lessonId}
						onClose={() => {}}
					/>
				</div>
			</div>

			<div className="flex-1 flex flex-col min-w-0">
				<Content
					lesson={lesson}
					onNext={handleNext}
					onPrev={handlePrev}
					isFirst={currentLessonIndex === 0}
					isLast={currentLessonIndex === flatLessons.length - 1}
					onMenuClick={() => setIsSidebarOpen(true)}
				/>
			</div>
		</div>
	);
};

const ThemeToggleButton = () => {
	const [theme, toggleTheme] = useDarkMode();
	return (
		<div className="absolute top-4 right-4 z-50">
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
				{theme === "light" ? (
					<Moon className="h-6 w-6" />
				) : (
					<Sun className="h-6 w-6" />
				)}
			</button>
		</div>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
				<ThemeToggleButton />
				<Routes>
					<Route path="/" element={<CourseList />} />
					<Route path="/courses/:classId" element={<CourseView />} />
					<Route
						path="/courses/:classId/:moduleId/:lessonId"
						element={<CourseView />}
					/>
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
