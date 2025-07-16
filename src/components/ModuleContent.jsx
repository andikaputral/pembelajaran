export default function Content({ activeModule }) {
	return (
		<section className="w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
			{activeModule ? (
				<>
					<h2 className="text-3xl font-bold mb-4 text-indigo-700">
						{activeModule.title}
					</h2>
					<div className="prose prose-indigo">
						<div dangerouslySetInnerHTML={{ __html: activeModule.content }} />
					</div>
				</>
			) : (
				<p className="text-gray-600 text-lg">
					Select a module from the sidebar to begin learning!
				</p>
			)}
		</section>
	);
}
