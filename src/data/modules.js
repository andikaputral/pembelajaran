export const mapel = [
  {
    id: 'class-1',
    name: 'Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build your first websites.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modules: [
      {
        id: 'module-1-1',
        name: 'Bab 1: HTML Basics',
        lessons: [
          { id: 'lesson-1-1-1', name: 'Lesson 1: What is HTML?', content: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It uses a system of tags to structure content, such as headings, paragraphs, images, and links. Think of HTML as the skeleton of your webpage.' },
          { id: 'lesson-1-1-2', name: 'Lesson 2: HTML Document Structure', content: 'An HTML document typically begins with a `<!DOCTYPE html>` declaration, followed by an `<html>` root element. Inside `<html>`, you\'ll find `<head>` (for metadata) and `<body>` (for visible content). Understanding this hierarchy is crucial for building well-formed pages.' },
          { id: 'lesson-1-1-3', name: 'Lesson 3: Common HTML Tags', content: 'Explore essential HTML tags like `<h1>` to `<h6>` for headings, `<p>` for paragraphs, `<a>` for hyperlinks, `<img>` for images, `<ul>` and `<ol>` for lists, and `<div>` for content division. Each tag serves a specific purpose in structuring your content.' },
        ],
      },
      {
        id: 'module-1-2',
        name: 'Module 2: CSS Fundamentals',
        lessons: [
          { id: 'lesson-1-2-1', name: 'Lesson 1: Introduction to CSS', content: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It allows you to control the colors, fonts, layout, and other visual aspects of your webpages, making them aesthetically pleasing and user-friendly.' },
          { id: 'lesson-1-2-2', name: 'Lesson 2: CSS Selectors and Properties', content: 'Learn about different CSS selectors (e.g., class, ID, element, attribute) to target specific HTML elements. Then, apply various CSS properties like `color`, `font-size`, `background-color`, `margin`, and `padding` to style those elements. Mastering selectors is key to efficient styling.' },
          { id: 'lesson-1-2-3', name: 'Lesson 3: The CSS Box Model', content: 'The CSS Box Model is a fundamental concept that describes how elements are rendered on a webpage. Every HTML element is treated as a rectangular box, comprising content, padding, border, and margin. Understanding this model is essential for controlling spacing and layout accurately.' },
          { id: 'lesson-1-2-4', name: 'Lesson 4: Flexbox for Layout', content: 'Flexbox (Flexible Box Module) is a one-dimensional layout method designed for distributing space among items in a container, even when their size is unknown or dynamic. It\'s incredibly powerful for creating responsive navigation bars, cards, and other UI components with ease.' },
        ],
      },
      {
        id: 'module-1-3',
        name: 'Module 3: JavaScript Basics',
        lessons: [
          { id: 'lesson-1-3-1', name: 'Lesson 1: Variables and Data Types', content: 'JavaScript is a programming language that enables interactive web pages. Start by understanding variables (containers for storing data) and common data types like numbers, strings, booleans, arrays, and objects. These are the building blocks of any JavaScript program.' },
          { id: 'lesson-1-3-2', name: 'Lesson 2: Operators and Expressions', content: 'Learn about various operators in JavaScript, including arithmetic (+, -, *, /), assignment (=, +=), comparison (==, ===, <, >), and logical (&&, ||, !). These operators allow you to perform calculations, assign values, and make decisions within your code.' },
          { id: 'lesson-1-3-3', name: 'Lesson 3: Control Flow (If/Else, Loops)', content: 'Control flow statements dictate the order in which your code is executed. Master `if/else` statements for conditional logic and `for`, `while`, and `do-while` loops for repetitive tasks. These constructs are essential for creating dynamic and intelligent programs.' },
          { id: 'lesson-1-3-4', name: 'Lesson 4: Functions', content: 'Functions are reusable blocks of code that perform a specific task. Learn how to define, call, and pass arguments to functions. Functions are crucial for organizing your code, promoting reusability, and breaking down complex problems into smaller, manageable pieces.' },
        ],
      },
    ],
  },
  {
    id: 'class-2',
    name: 'Basis Data',
    description: 'Dive deeper into JavaScript, covering topics like ES6, asynchronous programming, and more.',
    image: 'https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modules: [
      {
        id: 'module-2-1',
        name: 'Module 1: ES6 Features',
        lessons: [
          { id: 'lesson-2-1-1', name: 'Lesson 1: Arrow Functions', content: 'Arrow functions provide a shorter syntax for writing function expressions. They also handle the `this` keyword differently, making them very useful in certain contexts, especially for callbacks and methods.' },
          { id: 'lesson-2-1-2', name: 'Lesson 2: Destructuring Assignment', content: 'Destructuring assignment makes it possible to unpack values from arrays or properties from objects into distinct variables. This can lead to cleaner and more concise code, especially when working with complex data structures.' },
          { id: 'lesson-2-1-3', name: 'Lesson 3: Spread and Rest Operators', content: 'The spread operator (`...`) allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected. The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.' },
        ],
      },
      {
        id: 'module-2-2',
        name: 'Module 2: Asynchronous JavaScript',
        lessons: [
          { id: 'lesson-2-2-1', name: 'Lesson 1: Callbacks', content: 'Callbacks are functions passed as arguments to other functions, to be executed later. They are a fundamental concept in asynchronous JavaScript, used to handle operations that take time, such as fetching data from a server.' },
          { id: 'lesson-2-2-2', name: 'Lesson 2: Promises', content: 'Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner and more structured way to handle asynchronous code compared to nested callbacks, avoiding "callback hell."' },
          { id: 'lesson-2-2-3', name: 'Lesson 3: Async/Await', content: 'Async/await is a modern JavaScript syntax built on Promises that simplifies asynchronous code, making it look and behave more like synchronous code. It significantly improves readability and maintainability for complex asynchronous flows.' },
          { id: 'lesson-2-2-4', name: 'Lesson 4: Error Handling in Async JS', content: 'Proper error handling is crucial in asynchronous JavaScript. Learn to use `try...catch` blocks with `async/await` and `.catch()` with Promises to gracefully manage errors that may occur during asynchronous operations, ensuring your application remains robust.' },
        ],
      },
    ],
  },
];