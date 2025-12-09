import { Moon, Sun } from 'lucide-react';

export const SwitchDarkMode = ({ isDarkMode, toggleTheme }) => {
	return (
		<div className="fixed md:absolute top-4 right-4 z-20">
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600">
				{isDarkMode ? (
					<Sun className="h-6 w-6 text-yellow-300" />
				) : (
					<Moon className="h-6 w-6 text-slate-800" />
				)}
			</button>
		</div>
	);
};
