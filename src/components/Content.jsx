import SideBar from "./SideBar";
import ModuleContent from "./ModuleContent";

export default function Content({
	moduleId,
	setModuleId,
	activeModule,
	modules,
}) {
	return (
		<main className="w-full flex flex-col lg:flex-row gap-6">
			<SideBar
				moduleId={moduleId}
				setModuleId={setModuleId}
				modules={modules}
			/>

			<ModuleContent activeModule={activeModule} />
		</main>
	);
}
