import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import courseData from '../data/mapel';
import courseDetails from '../data/modules';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../components/Content';

export default function ClassView() {
	const { classId, moduleId, lessonId } = useParams();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const navigate = useNavigate();

	const courseInfo = useMemo(
		() => courseData.find((c) => c.id === classId),
		[classId]
	);
	const course = useMemo(() => {
		if (!courseInfo) return null;
		return { ...courseInfo, ...courseDetails[courseInfo.id] };
	}, [courseInfo]);

	useEffect(() => {
		if (isSidebarOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isSidebarOpen]);

	useEffect(() => {
		if (course.disabled) {
			navigate('/pembelajaran');
		} else if (course && !moduleId && !lessonId) {
			const firstAvailableModule = course.modules.find((m) => !m.disabled);
			if (firstAvailableModule && firstAvailableModule.lessons.length > 0) {
				navigate(
					`/pembelajaran/c/${course.id}/m/${firstAvailableModule.id}/${firstAvailableModule.lessons[0].id}`,
					{ replace: true }
				);
			}
		}
	}, [course, navigate, moduleId, lessonId]);

	const flatLessons = useMemo(() => {
		if (!course) return [];
		return course.modules
			.filter((module) => !module.disabled)
			.flatMap((module) =>
				module.lessons.map((lesson) => ({
					...lesson,
					moduleId: module.id,
				}))
			);
	}, [course]);

	const lesson = useMemo(() => {
		if (!course || !moduleId || !lessonId) return null;
		const module = course.modules.find((m) => m.id === moduleId);
		if (!module) return null;
		return module.lessons.find((l) => l.id === lessonId);
	}, [course, moduleId, lessonId]);

	const currentLessonIndex = useMemo(() => {
		if (!lessonId || !moduleId) return -1;
		return flatLessons.findIndex(
			(l) => l.id === lessonId && l.moduleId === moduleId
		);
	}, [lessonId, moduleId, flatLessons]);

	const handleNext = () => {
		if (currentLessonIndex < flatLessons.length - 1) {
			const nextLesson = flatLessons[currentLessonIndex + 1];
			navigate(
				`/pembelajaran/c/${classId}/m/${nextLesson.moduleId}/${nextLesson.id}`
			);
		}
	};

	const handlePrev = () => {
		if (currentLessonIndex > 0) {
			const prevLesson = flatLessons[currentLessonIndex - 1];
			navigate(
				`/pembelajaran/c/${classId}/m/${prevLesson.moduleId}/${prevLesson.id}`
			);
		}
	};

	if (!course || course.disabled) {
		return null;
	}

	const handlePreventCopyCut = (e) => {
		e.preventDefault();
		console.log('Cannot copy/cut this content!');
	};

	return (
		<div
			className="relative lg:flex min-h-screen"
			onCopy={handlePreventCopyCut}
			onCut={handlePreventCopyCut}>
			<div className="static lg:sticky lg:top-0 w-full lg:w-lg lg:h-screen bg-gray-100 dark:bg-gray-800 shadow-md">
				{/* Mobile Sidebar */}
				<div
					className={`fixed inset-y-0 z-20 w-3/4 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
						isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
					}`}>
					<Sidebar
						course={course}
						activeModuleId={moduleId}
						activeLessonId={lessonId}
						onClose={() => setIsSidebarOpen(false)}
					/>
				</div>
				{isSidebarOpen && (
					<div
						className="fixed inset-0 bg-black/50 z-10 lg:hidden"
						onClick={() => setIsSidebarOpen(false)}></div>
				)}

				{/* Desktop Sidebar */}
				<div className="hidden lg:flex lg:shrink-0 flex-col">
					<div className="p-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
						<Link
							to="/pembelajaran"
							className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full flex items-center justify-center text-sm">
							<ArrowLeftIcon className="h-4 w-4 mr-2" /> Kembali ke Mata
							Pelajaran
						</Link>
					</div>
					<Sidebar
						course={course}
						activeModuleId={moduleId}
						activeLessonId={lessonId}
						onClose={() => {}}
					/>
				</div>
			</div>
			<Content
				lesson={lesson}
				onNext={handleNext}
				onPrev={handlePrev}
				isFirst={currentLessonIndex === 0}
				isLast={currentLessonIndex === flatLessons.length - 1}
				onMenuClick={() => setIsSidebarOpen(true)}
			/>
		</div>
	);
}
