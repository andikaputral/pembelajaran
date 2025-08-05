const courseData = [
	{
		id: "cs101",
		title: "Introduction to Computer Science",
		description:
			"A foundational course on the principles of computing and programming.",
		image:
			"https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		disabled: false,
		modules: [
			{
				id: "m1",
				title: "Module 1: The Basics",
				disabled: false,
				lessons: [
					{
						id: "l1a",
						title: "What is a Computer?",
						type: "video",
						content:
							'<h1>What is a Computer?</h1><p>A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. You can also use it to edit or create spreadsheets, presentations, and even videos.</p><iframe class="h-auto aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/p2_p_R4h8vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
					{
						id: "l1b",
						title: "Algorithms & Data Structures",
						type: "text",
						content:
							"<h1>Algorithms & Data Structures</h1><p>An algorithm is a set of instructions for solving a problem or accomplishing a task. Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently. They are fundamental concepts in computer science.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Proin sed quam. Sed vitae eros. Nam vitae justo. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corporis architecto illo dolores facere nulla velit fugiat aliquid illum officiis earum laborum ducimus aut, sed quibusdam cum. Porro, reprehenderit enim. Delectus soluta eveniet hic inventore eaque ullam expedita tempore accusantium maxime earum aut tenetur, saepe ducimus, eum necessitatibus sint at dolorem molestias. Iusto delectus ipsam expedita alias fugiat deleniti omnis. Saepe eligendi excepturi dolore omnis modi nemo qui veritatis alias voluptates similique. Fugit incidunt libero delectus praesentium. Molestias animi illo odio porro, quibusdam quam, a fugit quae, consequatur eius totam. Cum necessitatibus facilis alias sequi, ipsam iste! Quis minima harum nihil, dolorum molestias repellendus quae amet eaque reprehenderit, nesciunt omnis aut ut, blanditiis in alias voluptatem? Eligendi repellat incidunt in! Sequi repellat esse, similique nihil est fuga consectetur corporis sed. Alias et quo inventore provident pariatur! Non sunt ratione temporibus culpa neque reprehenderit ad recusandae? Laudantium deserunt expedita tempore eaque. Consectetur amet cum beatae odio. Nemo distinctio atque consectetur vitae quisquam architecto soluta, voluptate perferendis? Ut a hic dignissimos commodi, accusamus veniam voluptatem consequuntur laborum repudiandae sequi voluptate temporibus quibusdam? Non, animi! Voluptate eligendi aliquam tempora illo omnis porro reprehenderit accusantium recusandae voluptates, corrupti sed molestiae dolore sapiente debitis nisi quisquam alias soluta harum nesciunt illum iste! Iure, minus nihil. Nesciunt hic perspiciatis debitis quia corporis et quas vel neque, enim autem? Sapiente, aliquam aspernatur, magni ullam hic, harum perferendis unde qui minus at maxime asperiores. Rem in eligendi adipisci! Unde voluptate quaerat harum, vel soluta voluptatem magni minus perferendis mollitia nulla commodi, cumque ratione maiores nesciunt cupiditate quod libero voluptates tempore exercitationem rem accusamus! Atque eos minima expedita non?Iusto cumque deserunt quas, libero fugit suscipit dolorum officiis saepe dignissimos, delectus molestias illo harum exercitationem dolor expedita iure incidunt voluptas tempore temporibus atque. Libero quisquam totam fuga beatae possimus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Proin sed quam. Sed vitae eros. Nam vitae justo. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corporis architecto illo dolores facere nulla velit fugiat aliquid illum officiis earum laborum ducimus aut, sed quibusdam cum. Porro, reprehenderit enim. Delectus soluta eveniet hic inventore eaque ullam expedita tempore accusantium maxime earum aut tenetur, saepe ducimus, eum necessitatibus sint at dolorem molestias. Iusto delectus ipsam expedita alias fugiat deleniti omnis. Saepe eligendi excepturi dolore omnis modi nemo qui veritatis alias voluptates similique. Fugit incidunt libero delectus praesentium. Molestias animi illo odio porro, quibusdam quam, a fugit quae, consequatur eius totam. Cum necessitatibus facilis alias sequi, ipsam iste! Quis minima harum nihil, dolorum molestias repellendus quae amet eaque reprehenderit, nesciunt omnis aut ut, blanditiis in alias voluptatem? Eligendi repellat incidunt in! Sequi repellat esse, similique nihil est fuga consectetur corporis sed. Alias et quo inventore provident pariatur! Non sunt ratione temporibus culpa neque reprehenderit ad recusandae? Laudantium deserunt expedita tempore eaque. Consectetur amet cum beatae odio. Nemo distinctio atque consectetur vitae quisquam architecto soluta, voluptate perferendis? Ut a hic dignissimos commodi, accusamus veniam voluptatem consequuntur laborum repudiandae sequi voluptate temporibus quibusdam? Non, animi! Voluptate eligendi aliquam tempora illo omnis porro reprehenderit accusantium recusandae voluptates, corrupti sed molestiae dolore sapiente debitis nisi quisquam alias soluta harum nesciunt illum iste! Iure, minus nihil. Nesciunt hic perspiciatis debitis quia corporis et quas vel neque, enim autem? Sapiente, aliquam aspernatur, magni ullam hic, harum perferendis unde qui minus at maxime asperiores. Rem in eligendi adipisci! Unde voluptate quaerat harum, vel soluta voluptatem magni minus perferendis mollitia nulla commodi, cumque ratione maiores nesciunt cupiditate quod libero voluptates tempore exercitationem rem accusamus! Atque eos minima expedita non?Iusto cumque deserunt quas, libero fugit suscipit dolorum officiis saepe dignissimos, delectus molestias illo harum exercitationem dolor expedita iure incidunt voluptas tempore temporibus atque. Libero quisquam totam fuga beatae possimus.</p>",
					},
				],
			},
			{
				id: "m2",
				title: "Module 2: Programming Fundamentals",
				disabled: false,
				lessons: [
					{
						id: "l2a",
						title: "Variables and Data Types",
						type: "reading",
						content:
							"<h1>Variables and Data Types</h1><p>In programming, a variable is a value that can change, depending on conditions or on information passed to the program. Data types are classifications that specify which type of value a variable has and what type of mathematical, relational, or logical operations can be applied to it without causing an error.</p><pre><code>HTML</code></pre><code>div</code>",
					},
					{
						id: "l2b",
						title: "Control Structures",
						type: "video",
						content:
							'<h1>Control Structures</h1><p>Control structures are programming block that can analyze variables and choose a direction in which to go based on given parameters. The most basic control structures are if/else statements and loops.</p><iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/d2s234ke_f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
					{
						id: "l2c",
						title: "Functions",
						type: "text",
						content:
							"<h1>Functions</h1><p>A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.</p>",
					},
					{
						id: "l2d",
						title: "Functions",
						type: "code",
						content:
							"<h1>Functions</h1><p>A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.</p>",
					},
				],
			},
		],
	},
	{
		id: "math202",
		title: "Advanced Calculus",
		description: "Explore the concepts of limits, derivatives, and integrals.",
		image:
			"https://images.unsplash.com/photo-1733412505442-36cfa59a4240?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		disabled: false,
		modules: [
			{
				id: "m1",
				title: "Module 1: Limits and Continuity",
				disabled: false,
				lessons: [
					{
						id: "l1a",
						title: "Introduction to Limits",
						type: "video",
						content:
							'<h1>Introduction to Limits</h1><p>This lesson covers the fundamental concept of limits in calculus.</p><iframe class="aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/riXcZT2ICjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
					{
						id: "l1b",
						title: "Continuity",
						type: "",
						content:
							"<h1>Continuity</h1><p>Understanding continuity and its importance in calculus.</p>",
					},
				],
			},
			{
				id: "m2",
				title: "Module 2: Derivatives",
				disabled: true,
				lessons: [
					{
						id: "l2a",
						title: "The Derivative Definition",
						type: "reading",
						content:
							"<h1>The Derivative Definition</h1><p>Exploring the definition of a derivative.</p>",
					},
					{
						id: "l2b",
						title: "Differentiation Rules",
						type: "video",
						content:
							'<h1>Differentiation Rules</h1><p>Learn the power rule, product rule, and quotient rule.</p><iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/5yfh5cf4-0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					},
				],
			},
		],
	},
	{
		id: "design101",
		title: "The Art of Design",
		description:
			"Learn the fundamentals of design principles and visual communication (Coming Soon).",
		image: "facebook.com",
		disabled: true,
		modules: [],
	},
	{
		id: "1",
		title: "The Art of Design",
		description:
			"Learn the fundamentals of design principles and visual communication (Coming Soon).",
		image: "facebook.com",
		disabled: false,
		modules: [],
	},
];

export default courseData;
