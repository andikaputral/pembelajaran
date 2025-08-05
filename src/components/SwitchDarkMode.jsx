import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export const SwitchDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	useEffect(() => {
		const savedStorage = localStorage.getItem("darkMode");

		if (savedStorage) {
			setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		if (isDarkMode) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("darkMode", isDarkMode);
	}, [isDarkMode]);

	return (
		<div className="fixed md:absolute top-4 right-4 z-20">
			<button
				onClick={() => setIsDarkMode(!isDarkMode)}
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
