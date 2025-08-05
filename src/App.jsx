import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ClassList from "./pages/ClassList";
import ClassView from "./pages/ClassView";
import { SwitchDarkMode } from "./components/SwitchDarkMode";

function App() {
	return (
		<BrowserRouter>
			<SwitchDarkMode />
			<div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
				<Routes>
					<Route path="/pembelajaran" element={<ClassList />} />
					<Route path="/pembelajaran/c/:classId" element={<ClassView />} />
					<Route
						path="/pembelajaran/c/:classId/:lessonId"
						element={<ClassView />}
					/>
					<Route path="*" element={<Navigate to="/pembelajaran" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
