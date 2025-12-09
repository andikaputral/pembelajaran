import { AlertCircle, Check, CheckCircle, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export const Quiz = ({ data }) => {
	const [selectedAnswers, setSelectedAnswers] = useState({});
	const [showResults, setShowResults] = useState(false);

	const handleOptionSelect = (questionId, optionIndex) => {
		if (showResults) return;
		setSelectedAnswers((prev) => ({
			...prev,
			[questionId]: optionIndex,
		}));
	};

	const handleSubmit = () => {
		setShowResults(true);
	};

	const handleRetry = () => {
		setSelectedAnswers({});
		setShowResults(false);
	};

	const calculateScore = () => {
		let score = 0;
		data.questions.forEach((q) => {
			if (selectedAnswers[q.id] === q.correctAnswer) score++;
		});
		return score;
	};

	const score = calculateScore();
	const isPassing = score >= Math.ceil(data.questions.length * 0.7);

	return (
		<div className="max-w-3xl mx-auto space-y-8">
			<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-300 dark:border-indigo-800">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
					{data.title}
				</h2>
				<p className="text-gray-600 dark:text-gray-300">
					Test your knowledge of the concepts covered in this module.
				</p>
			</div>

			<div className="space-y-6">
				{data.questions.map((q, index) => (
					<div
						key={q.id}
						className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							{index + 1}. {q.question}
						</h3>
						<div className="space-y-3">
							{q.options.map((option, optIndex) => {
								const isSelected = selectedAnswers[q.id] === optIndex;
								const isCorrect = q.correctAnswer === optIndex;
								const showCorrectness = showResults;

								let buttonClass =
									'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex justify-between items-center ';

								if (showCorrectness) {
									if (isCorrect) {
										buttonClass +=
											'bg-green-50 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200';
									} else if (isSelected && !isCorrect) {
										buttonClass +=
											'bg-red-50 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-200';
									} else {
										buttonClass +=
											'border-gray-200 dark:border-gray-700 opacity-60';
									}
								} else {
									if (isSelected) {
										buttonClass +=
											'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300';
									} else {
										buttonClass +=
											'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-gray-50 dark:hover:bg-gray-750';
									}
								}

								return (
									<button
										key={optIndex}
										onClick={() => handleOptionSelect(q.id, optIndex)}
										disabled={showResults}
										className={buttonClass}>
										<span>{option}</span>
										{showResults && isCorrect && (
											<CheckCircle className="h-5 w-5 text-green-500" />
										)}
										{showResults && isSelected && !isCorrect && (
											<AlertCircle className="h-5 w-5 text-red-500" />
										)}
										{!showResults && isSelected && (
											<Check className="h-5 w-5 text-indigo-500" />
										)}
									</button>
								);
							})}
						</div>
					</div>
				))}
			</div>

			{showResults ? (
				<div
					className={`p-6 rounded-xl border-2 text-center ${
						isPassing
							? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
							: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
					}`}>
					<h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
						You scored {score} out of {data.questions.length}
					</h3>
					<p
						className={`text-lg mb-6 ${
							isPassing
								? 'text-green-700 dark:text-green-300'
								: 'text-orange-700 dark:text-orange-300'
						}`}>
						{isPassing
							? "Excellent work! You've mastered this module."
							: "Keep reviewing the material. You'll get it next time!"}
					</p>
					<button
						onClick={handleRetry}
						className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
						<RefreshCw className="h-5 w-5 mr-2" /> Retry Quiz
					</button>
				</div>
			) : (
				<div className="flex justify-end pt-4">
					<button
						onClick={handleSubmit}
						disabled={
							Object.keys(selectedAnswers).length < data.questions.length
						}
						className="px-8 py-3 flex items-center bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-indigo-700">
						Submit Answers
					</button>
				</div>
			)}
		</div>
	);
};
