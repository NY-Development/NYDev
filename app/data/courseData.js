export const courses = [
  {
    id: "frontend-beginner",
    title: "Frontend Development for Beginners",
    image: "/html.png",
    description: "Start your web development journey by mastering HTML, CSS, and JavaScript from scratch.",
    fullDescription:
      "This beginner-friendly course helps you build a solid foundation in frontend development. You’ll learn to create responsive web pages, style them beautifully with CSS, and bring them to life using JavaScript.",
    instructors: [
      { name: "Yamlak N.", title: "Lead Instructor", image: "/images/instructors/yamlak.jpg" },
      { name: "Chala T.", title: "Frontend Engineer", image: "/images/instructors/chala.jpg" },
    ],
    price: "1500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Deep dive into frontend concepts and practical application during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Intro to HTML", desc: "Learn about basic HTML structure and tags." },
        { title: "Document Setup", desc: "Understanding doctype, meta tags, and accessibility." },
      ],
      week2: [
        { title: "CSS Basics", desc: "Selectors, color theory, and styling fundamentals." },
        { title: "Box Model", desc: "Understanding padding, margin, and borders." },
      ],
      week3: [
        { title: "Responsive Design", desc: "Making your site mobile-friendly with media queries." },
        { title: "Flexbox Essentials", desc: "Layout control using CSS Flexbox." },
      ],
      week4: [
        { title: "Grid Layouts", desc: "Advanced layouts using CSS Grid." },
        { title: "Animations", desc: "Adding motion and transitions to your UI." },
      ],
      week5: [
        { title: "Intro to JS", desc: "Variables, data types, and syntax." },
        { title: "Functions & Loops", desc: "Control flow and function basics." },
      ],
      week6: [
        { title: "DOM Manipulation", desc: "Interact with the document dynamically." },
        { title: "Events & Listeners", desc: "Handling user input and browser events." },
      ],
      week7: [
        { title: "Project Planning", desc: "Plan your first mini web project." },
        { title: "Code Optimization", desc: "Clean and efficient coding practices." },
      ],
      week8: [
        { title: "Final Project", desc: "Build your responsive website from scratch." },
        { title: "Presentation", desc: "Showcase your finished project." },
      ],
    },
  },

  {
    id: "frontend-intermediate",
    title: "Frontend Intermediate – React Essentials",
    image: "/react.png",
    description: "Take your frontend skills to the next level with React.js, the most popular JavaScript framework.",
    fullDescription:
      "Designed for students with HTML, CSS, and JS background, this course focuses on component-driven development, props, state, and reusable UI patterns using React.",
    instructors: [
      { name: "Chala T.", title: "Frontend Engineer", image: "/images/instructors/chala.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Expand your React knowledge and build stronger interactive UIs during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Setup", desc: "Installing and configuring your first React project." },
        { title: "JSX & Components", desc: "Understanding the building blocks of React." },
      ],
      week2: [
        { title: "Props & State", desc: "Managing data flow in React apps." },
        { title: "Component Lifecycle", desc: "Learn how React components update and re-render." },
      ],
      week3: [
        { title: "Event Handling", desc: "Making apps interactive." },
        { title: "Conditional Rendering", desc: "Render UI dynamically based on conditions." },
      ],
      week4: [
        { title: "React Router", desc: "Creating multi-page experiences." },
        { title: "Hooks Intro", desc: "Learn useState and useEffect." },
      ],
      week5: [
        { title: "Fetching Data", desc: "Working with APIs and Axios." },
        { title: "Custom Hooks", desc: "Reuse logic with custom functions." },
      ],
      week6: [
        { title: "Context API", desc: "Manage global state efficiently." },
        { title: "Performance Tips", desc: "Optimizing React applications." },
      ],
      week7: [
        { title: "UI Components", desc: "Reusable card, button, and modal components." },
        { title: "Animations", desc: "Add motion to your React app using Framer Motion." },
      ],
      week8: [
        { title: "Final Project", desc: "Build and deploy a React website." },
        { title: "Presentation", desc: "Showcase your completed React project." },
      ],
    },
  },

  {
    id: "react-bootcamp",
    title: "React Frontend Developer Bootcamp",
    image: "/react.png",
    description: "Learn to build modern, dynamic web apps using React in 8 weeks.",
    fullDescription:
      "This intensive bootcamp takes you from basic React concepts to advanced state management, API handling, and deployment. Perfect for those ready to become React professionals.",
    instructors: [
      { name: "Yamlak N.", title: "Lead Developer", image: "/images/instructors/yamlak.jpg" },
      { name: "Chala T.", title: "Frontend Engineer", image: "/images/instructors/chala.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Focused bootcamp learning covering React topics for week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Fundamentals", desc: "Understand JSX, components, and state." },
        { title: "Component Hierarchy", desc: "Design scalable component trees." },
      ],
      week2: [
        { title: "Hooks Deep Dive", desc: "Learn useEffect, useRef, and useContext." },
        { title: "React Router", desc: "Implement client-side routing." },
      ],
      week3: [
        { title: "API Integration", desc: "Fetch and handle data from REST APIs." },
        { title: "Error Handling", desc: "Graceful fallback and error components." },
      ],
      week4: [
        { title: "Redux Toolkit", desc: "Manage complex state effectively." },
        { title: "Middleware & Async", desc: "Use Thunks for async operations." },
      ],
      week5: [
        { title: "Authentication", desc: "Implement login and protected routes." },
        { title: "Forms", desc: "Handle controlled inputs and validation." },
      ],
      week6: [
        { title: "Deployment", desc: "Host your app on Vercel or Netlify." },
        { title: "Performance", desc: "Use React DevTools and memoization." },
      ],
      week7: [
        { title: "Testing", desc: "Intro to Jest and React Testing Library." },
        { title: "Best Practices", desc: "Code structure and project patterns." },
      ],
      week8: [
        { title: "Final Project", desc: "Develop a complete web app." },
        { title: "Presentation", desc: "Demo your final bootcamp project." },
      ],
    },
  },

  {
    id: "mobile-react-native",
    title: "Mobile App Development with React Native",
    image: "/react-native.png",
    description: "Learn to build cross-platform mobile apps using React Native for Android and iOS.",
    fullDescription:
      "React Native allows you to build native-quality mobile apps using the same React concepts. In this course, you’ll learn UI design, navigation, and backend integration for mobile apps.",
    instructors: [
      { name: "Yamlak N.", title: "React Native Developer", image: "/images/instructors/yamlak.jpg" },
      { name: "Chala T.", title: "Frontend & Mobile Engineer", image: "/images/instructors/chala.jpg" },
    ],
    price: "1500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Explore mobile app concepts and practical applications during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Native Setup", desc: "Setting up the development environment." },
        { title: "Core Components", desc: "Understanding components like View, Text, and Image." },
      ],
      week2: [
        { title: "Styling", desc: "Using StyleSheet and Flexbox for layout." },
        { title: "Navigation", desc: "Implementing navigation with React Navigation." },
      ],
      week3: [
        { title: "Handling User Input", desc: "Text inputs, buttons, and touchable components." },
        { title: "State Management", desc: "Using hooks for local state." },
      ],
      week4: [
        { title: "API Integration", desc: "Fetching data from APIs using Fetch." },
        { title: "Async Storage", desc: "Persisting data locally on devices." },
      ],
      week5: [
        { title: "Native Modules", desc: "Integrating native functionalities." },
        { title: "Debugging", desc: "Using tools to troubleshoot issues." },
      ],
      week6: [
        { title: "Testing", desc: "Unit and integration testing in React Native." },
        { title: "Performance Optimization", desc: "Improving app performance." },
      ],
      week7: [
        { title: "Publishing Apps", desc: "Steps to publish on App Store and Google Play." },
        { title: "Project Planning", desc: "Plan and design your final mobile app." },
      ],
      week8: [
        { title: "Final Project", desc: "Build a complete mobile application." },
        { title: "Presentation", desc: "Showcase your developed app." },
      ],
    },
  },

  {
    id: "backend-beginner-express",
    title: "Backend Development with Node.js & Express",
    image: "/node.png",
    description: "Get started with server-side development using Node.js and Express.",
    fullDescription:
      "This course introduces backend fundamentals, including REST API design, routing, middleware, and connecting to databases. You’ll build real APIs used in production apps.",
    instructors: [
      { name: "Yamlak N.", title: "Fullstack Developer", image: "/images/instructors/yamlak.jpg" },
    ],
    price: "1500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Explore backend concepts and practical applications during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Node.js Basics", desc: "Understanding Node environment and NPM packages." },
        { title: "Setting Up Express", desc: "Creating your first Express server." },
      ],
      week2: [
        { title: "Routing", desc: "Defining routes in Express." },
        { title: "Middleware", desc: "Using middleware functions." },
      ],
      week3: [
        { title: "RESTful APIs", desc: "Understanding REST principles." },
        { title: "CRUD Operations", desc: "Implementing Create, Read, Update, Delete." },
      ],
      week4: [
        { title: "Database Integration", desc: "Connecting to MongoDB using Mongoose." },
        { title: "Data Validation", desc: "Ensuring data integrity." },
      ],
      week5: [
        { title: "Authentication", desc: "Implementing JWT for user authentication." },
        { title: "Error Handling", desc: "Handling errors gracefully." },
      ],
      week6: [
        { title: "API Security", desc: "Securing your APIs." },
        { title: "Testing APIs", desc: "Using Postman for testing." },
      ],
      week7: [
        { title: "Deployment", desc: "Deploying your Node.js application." },
        { title: "Project Planning", desc: "Plan your final backend project." },
      ],
      week8: [
        { title: "Final Project", desc: "Build a REST API for a job posting app." },
        { title: "Presentation", desc: "Showcase your completed API project." },
      ],
    },
  },

  {
    id: "backend-beginner-django",
    title: "Backend Development with Python & Django",
    image: "/django.png",
    description: "Learn backend development with Python’s powerful Django framework.",
    fullDescription:
      "This beginner-friendly course walks you through building secure, data-driven web applications using Django. You’ll learn how to handle models, views, templates, and authentication.",
    instructors: [
      { name: "Chala T.", title: "Backend Engineer", image: "/images/instructors/chala.jpg" },
    ],
    price: "1500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Explore Django concepts and practical applications during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Django Setup", desc: "Installing Django and creating your first project." },
        { title: "Understanding Django Apps", desc: "Project structure and app creation." },
      ],
      week2: [
        { title: "Models & Migrations", desc: "Creating models and managing database migrations." },
        { title: "Admin Interface", desc: "Using Django’s built-in admin." },
      ],
      week3: [
        { title: "Views & Templates", desc: "Creating views and rendering templates." },
        { title: "Static Files", desc: "Managing CSS and JavaScript files." },
      ],
      week4: [
        { title: "Forms & Validation", desc: "Handling user input with forms." },
        { title: "User Authentication", desc: "Implementing user login and registration." },
      ],
      week5: [
        { title: "Deploying Django Apps", desc: "Setting up production environments." },
        { title: "Testing", desc: "Writing tests for your Django applications." },
      ],
      week6: [
        { title: "API Development", desc: "Building RESTful APIs with Django REST framework." },
        { title: "Versioning APIs", desc: "Managing different API versions." },
      ],
      week7: [
        { title: "Security Best Practices", desc: "Securing Django applications." },
        { title: "Project Planning", desc: "Plan your final Django project." },
      ],
      week8: [
        { title: "Final Project", desc: "Build a complete Django application." },
        { title: "Presentation", desc: "Showcase your completed Django project." },
      ],
    },
  },
];