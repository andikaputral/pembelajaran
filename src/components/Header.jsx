export default function Header(selectedClass) {
	const selected = selectedClass.selectedClass;
	return (
		<header className="w-full bg-white dark:bg-slate-950 shadow-lg rounded-lg p-8 mb-4">
			<h1 className="text-3xl font-extrabold text-indigo-600 dark:text-amber-700 mb-4 sm:mb-0 text-center">
				{selected ? selected.name : "Belajar SMK NU Kejajar"}
			</h1>
			<p className="text-lg text-neutral-600 dark:text-neutral-200 text-center">
				{selected
					? selected.description
					: "Modul pembelajaran jurusan Pengembangan Perangkat Lunak dan Gim"}
			</p>
		</header>
	);
}
