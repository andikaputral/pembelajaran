export default function SideBar({ moduleId, setModuleId, modules }) {
	return (
		<>
			<nav className="w-full lg:w-1/4 bg-white shadow-lg rounded-xl p-8 flex-shrink-0">
				<h2 className="text-2xl font-bold mb-1 text-indigo-600">Modules</h2>
				<div className="border-t border-2 rounded-full border-indigo-600 mb-4" />
				<ul className="space-y-2">
					{modules.map((module) => (
						<li key={module.id}>
							<button
								onClick={() => setModuleId(module.id)}
								className={`
                    w-full text-left py-2 px-4 rounded-lg transition-all duration-200
                    ${
											moduleId === module.id
												? "bg-indigo-500 text-white shadow-md transform translate-x-3"
												: "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
										}
                    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75
                  `}>
								{module.title}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
