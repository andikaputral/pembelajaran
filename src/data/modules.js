export const modules = [
    {
      id: 'module1',
      title: 'Introduction to Web Development',
      description: 'Learn the basics of building websites.',
      lessons: [
        {
          id: 'lesson1_1',
          title: 'HTML Fundamentals',
          content: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
        },
        { 
          id: 'lesson1_2',
          title: 'CSS Styling',
          content: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
        { 
          id: 'lesson1_3',
          title: 'JavaScript Basics',
          content: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.' },
      ],
    },
    {
      id: 'module2',
      title: 'React Fundamentals',
      description: 'Dive into the world of React.js for dynamic UIs.',
      lessons: [
        { 
            id: 'lesson2_1',
            title: 'What is React?', content: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.' },
        { 
            id: 'lesson2_2',
            title: 'Components and Props',
            content: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render function. Props are arguments passed into React components.' },
        { 
            id: 'lesson2_3', 
            title: 'State and Lifecycle', 
            content: 'State is an object that holds some information that may change over the lifetime of the component. Lifecycle methods allow you to run code at particular points during a component\'s life.' },
      ],
    },
    {
      id: 'module3',
      title: 'Advanced CSS Techniques',
      description: 'Explore advanced styling with modern CSS.',
      lessons: [
        { 
            id: 'lesson3_1', 
            title: 'Flexbox Layout', 
            content: 'The CSS Flexible Box Layout Module, commonly referred to as Flexbox, is a one-dimensional layout method for arranging items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.' },
        { 
            id: 'lesson3_2', 
            title: 'CSS Grid Layout', 
            content: 'CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out content in rows and columns, making it easier to design complex responsive web designs.' },
        { 
            id: 'lesson3_3', 
            title: 'Animations and Transitions', 
            content: 'CSS animations and transitions allow you to create smooth, interactive visual effects on your web pages.' },
      ],
    },
  ];