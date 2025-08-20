import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchDarkMode = ({ isDarkMode, toggleTheme }) => {
	return (
		<div className="fixed md:absolute top-4 right-4 z-20">
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
				{isDarkMode ? (
					<SunIcon className="h-6 w-6 text-yellow-300" />
				) : (
					<MoonIcon className="h-6 w-6 text-slate-800" />
				)}
			</button>
		</div>
	);
};
