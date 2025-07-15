import { useState } from "react";
import { modules } from "../data/modules";

export function Module() {
// State to manage the current view: 'modules' or 'lessonsAndDetail'
  const [currentView, setCurrentView] = useState('modules');
  // State to store the currently selected module
  const [selectedModule, setSelectedModule] = useState(null);
  // State to store the currently selected lesson
  const [selectedLesson, setSelectedLesson] = useState(null);
  // State to control sidebar visibility on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handler for selecting a module
  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    // Automatically select the first lesson of the module
    setSelectedLesson(module.lessons[0] || null);
    setCurrentView('lessonsAndDetail');
    setIsSidebarOpen(true); // Open sidebar on module selection for mobile
  };

  // Handler for selecting a lesson from the sidebar
  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setIsSidebarOpen(false); // Close sidebar after selecting a lesson on mobile
  };

  // Handler for navigating back to modules list
  const handleBackToModules = () => {
    setCurrentView('modules');
    setSelectedModule(null);
    setSelectedLesson(null);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Navigation Buttons */}
      <nav className="flex justify-start mb-6">
        {currentView === 'lessonsAndDetail' && (
          <button
            onClick={handleBackToModules}
            className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300 mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Modules
          </button>
        )}
        {currentView === 'lessonsAndDetail' && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Lessons
          </button>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {currentView === 'modules' && (
          <ModuleList modules={modules} onSelectModule={handleModuleSelect} />
        )}

        {currentView === 'lessonsAndDetail' && selectedModule && (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar for Lessons (visible on desktop, toggleable on mobile) */}
            <LessonSidebar
              module={selectedModule}
              onSelectLesson={handleLessonSelect}
              selectedLessonId={selectedLesson?.id}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main Lesson Content */}
            <div className={`flex-1 ${isSidebarOpen ? 'hidden md:block' : 'block'}`}>
              {selectedLesson ? (
                <LessonDetail lesson={selectedLesson} />
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <p className="text-xl">Please select a lesson from the sidebar to begin.</p>
                  <p className="text-sm mt-2">
                    <span className="md:hidden">Tap the "Lessons" button above to open the sidebar.</span>
                    <span className="hidden md:inline">Choose a lesson from the left.</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

// Component to display a list of modules
const ModuleList = ({ modules, onSelectModule }) => {
  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Available Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col justify-between"
            onClick={() => onSelectModule(module)}
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{module.title}</h3>
              <p className="text-gray-600 text-sm">{module.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for the Lesson Sidebar
const LessonSidebar = ({ module, onSelectLesson, selectedLessonId, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 md:relative md:bg-transparent md:inset-auto md:z-auto md:w-1/3 md:max-w-xs transition-transform duration-300 ease-in-out
                     ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="bg-white rounded-xl shadow-lg p-6 h-full overflow-y-auto md:h-auto md:static">
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-bold text-gray-900">Lessons</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="hidden md:block text-2xl font-bold text-gray-900 mb-4">Lessons in {module.title}</h2>
        <ul className="space-y-2">
          {module.lessons.map((lesson) => (
            <li
              key={lesson.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-200
                          ${selectedLessonId === lesson.id ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'hover:bg-gray-100 text-gray-800'}`}
              onClick={() => onSelectLesson(lesson)}
            >
              {lesson.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Component to display the detailed content of a lesson
const LessonDetail = ({ lesson }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{lesson.title}</h2>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p>{lesson.content}</p>
      </div>
    </div>
  );
};