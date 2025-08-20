import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ClassList from "./pages/ClassList";
import ClassView from "./pages/ClassView";
import { SwitchDarkMode } from "./components/SwitchDarkMode";
import { useEffect, useState } from "react";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("darkMode");
		if (savedTheme) {
			setIsDarkMode(JSON.parse(savedTheme));
		} else {
			setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	}, []);

	const toggleTheme = () => {
		setIsDarkMode((prevTheme) => {
			const newTheme = !prevTheme;
			localStorage.setItem("darkMode", newTheme);
			return newTheme;
		});
	};

	return (
		<BrowserRouter>
			<div className={`${isDarkMode ? "dark" : ""}`}>
				<SwitchDarkMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
				<div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
					<Routes>
						<Route path="/pembelajaran" element={<ClassList />} />
						<Route path="/pembelajaran/c/:classId" element={<ClassView />} />
						<Route
							path="/pembelajaran/c/:classId/m/:moduleId/:lessonId"
							element={<ClassView />}
						/>
						<Route path="*" element={<Navigate to="/pembelajaran" replace />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
