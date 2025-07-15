export const modules = [
    {
      id: 'intro',
      title: 'Introduction to React',
      content: (
        `
         <h3 className="text-xl font-semibold mb-2 text-gray-800">What is React?</h3>
          <p className="text-gray-700 leading-relaxed">
            React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Why use React?</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Declarative views make your code more predictable and easier to debug.</li>
            <li>Component-based architecture promotes reusability and maintainability.</li>
            <li>Virtual DOM improves performance by minimizing direct manipulation of the browser's DOM.</li>
            <li>Large and active community with extensive resources and libraries.</li>
          </ul>
        `
      ),
    },
    {
      id: 'components',
      title: 'Understanding Components',
      content: (
        `
          <h3 className="text-xl font-semibold mb-2 text-gray-800">React Components</h3>
          <p className="text-gray-700 leading-relaxed">
            Components are the building blocks of any React application. They are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Types of Components</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Functional Components:</strong> Simple JavaScript functions that return JSX. (e.g., <code>const MyComponent =&gt; () = &#123; return &lt;div&gt;Hello&lt;/div&gt;; &#125;</code>)</li>
            <li><strong>Class Components:</strong> ES6 classes that extend React.Component and have a render() method. (Less common in modern React development)</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Props and State</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Props (Properties):</strong> Read-only attributes passed from parent components to child components.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>State:</strong> Data that can change over time within a component. Managed using the useState hook in functional components.
          </p>
        `
      ),
    },
    {
      id: 'hooks',
      title: 'React Hooks',
      content: (
        `
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Introduction to Hooks</h3>
          <p className="text-gray-700 leading-relaxed">
            Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They were introduced in React 16.8.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Common Hooks</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>useState (State Hook):</strong> Allows functional components to have state variables.</li>
            <li><strong>useEffect (Effect Hook):</strong> Allows functional components to perform side effects (e.g., data fetching, subscriptions, manually changing the DOM) after render.</li>
            <li><strong>useContext (Context Hook):</strong> Allows functional components to consume values from a React Context.</li>
            <li><strong>useRef (Ref Hook):</strong> Allows functional components to create mutable ref objects that persist across renders.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Hooks simplify component logic, improve reusability, and make code easier to read and test.
          </p>
        `
      ),
    },
    {
      id: 'styling',
      title: 'Styling with Tailwind CSS',
      content: (
        `
          <h3 className="text-xl font-semibold mb-2 text-gray-800">What is Tailwind CSS?</h3>
          <p className="text-gray-700 leading-relaxed">
            Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Instead of pre-designed components, it provides low-level utility classes that you can combine to build any design directly in your markup.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Utility-First:</strong> Build designs by composing small, focused utility classes (e.g., flex, pt-4, text-center).</li>
            <li><strong>Highly Customizable:</strong> Easily configure colors, spacing, fonts, and more to match your brand.</li>
            <li><strong>Responsive Design:</strong> Built-in responsive prefixes (sm:, md:, lg:) for easy adaptation across different screen sizes.</li>
            <li><strong>PurgeCSS Integration:</strong> Automatically removes unused CSS, resulting in smaller file sizes.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Tailwind promotes a faster development workflow by allowing you to style elements without leaving your HTML/JSX.
          </p>
        `
      ),
    },
  ];