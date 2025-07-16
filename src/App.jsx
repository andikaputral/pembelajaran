import { Module } from "./pages/Module";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:bg-gradient-to-br dark:from-black dark:to-gray-950 font-inter p-4 sm:p-6 lg:p-8 flex flex-col">
			<Module />
		</div>
	);
}

export default App;
