import { useState } from "react";
import { modules } from "../data/module";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export function Home() {
    // State to keep track of the currently selected module
    const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
    // Find the content of the active module
    const activeModule = modules.find((module) => module.id === activeModuleId);

    return (
        <>
            <Header />
            <Content moduleId={activeModuleId} setModuleId={setActiveModuleId} activeModule={activeModule} modules={modules} />
            <Footer />              
        </>
    )
}