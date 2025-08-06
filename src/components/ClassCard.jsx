import { useNavigate } from "react-router";

export default function ClassCard({ course }) {
	const navigate = useNavigate();

	const handleSelect = () => {
		if (!course.disabled) {
			const firstAvailableModule = course.modules.find((m) => !m.disabled);
			if (firstAvailableModule && firstAvailableModule.lessons.length > 0) {
				navigate(
					`/pembelajaran/c/${course.id}/m/${firstAvailableModule.id}/${firstAvailableModule.lessons[0].id}`
				);
			} else {
				navigate(`/pembelajaran/c/${course.id}`);
			}
		}
	};

	return (
		<div
			onClick={handleSelect}
			className={`bg-neutral-50 dark:bg-gray-800 rounded-xl shadow-lg border-2 relative border-transparent ${
				course.disabled
					? "cursor-not-allowed"
					: "hover:shadow-xl cursor-pointer hover:border-indigo-400"
			}`}>
			<img
				src={course.image}
				alt={course.title}
				className={`w-full h-64 object-cover rounded-t-[11px] ${
					course.disabled ? "opacity-50" : "opacity-100"
				}`}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = `https://placehold.co/400x200/F0F8FF/2C3E50?text=${encodeURIComponent(
						course.title
					)}`;
				}}
			/>
			<div
				className={`p-6 flex flex-col grow ${
					course.disabled ? "opacity-50" : "opacity-100"
				}`}>
				<h3 className="text-xl font-bold text-gray-800 dark:text-white">
					{course.title}
				</h3>
				<p className="text-gray-600 dark:text-gray-300 mt-2">
					{course.description}
				</p>
			</div>
		</div>
	);
}
