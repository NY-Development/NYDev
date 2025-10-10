export const courses = [
  // 🌐 FRONTEND BEGINNER
  {
    id: "frontend-beginner",
    title: "Frontend Development for Beginners",
    image: "/html.png",
    description:
      "Start your web development journey by mastering HTML, CSS, and JavaScript from scratch.",
    fullDescription:
      "This beginner-friendly course builds a solid foundation in frontend development. You’ll learn to create responsive, visually appealing websites and bring them to life using JavaScript.",
    instructors: [
      { name: "Yamlak N.", title: "Frontend Instructor", image: "/yamlak.jpg" },
      { name: "Chala T.", title: "Frontend Engineer", image: "/chala.jpg" },
    ],
    price: "1500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Progressive learning of frontend fundamentals during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Intro to HTML", desc: "Understand basic HTML structure and semantic tags." },
        { title: "Document Setup", desc: "Learn doctype, meta tags, and accessibility best practices." },
      ],
      week2: [
        { title: "CSS Basics", desc: "Selectors, colors, and styling essentials." },
        { title: "Box Model", desc: "Master padding, margin, and border properties." },
      ],
      week3: [
        { title: "Responsive Design", desc: "Make layouts adaptable using media queries." },
        { title: "Flexbox Essentials", desc: "Control page layouts with Flexbox." },
      ],
      week4: [
        { title: "Grid Layouts", desc: "Design advanced page layouts with CSS Grid." },
        { title: "Animations", desc: "Add transitions and motion to your UI." },
      ],
      week5: [
        { title: "Intro to JavaScript", desc: "Variables, data types, and basic syntax." },
        { title: "Functions & Loops", desc: "Understand logic flow and function basics." },
      ],
      week6: [
        { title: "DOM Manipulation", desc: "Change elements dynamically with JS." },
        { title: "Events & Listeners", desc: "Respond to user input effectively." },
      ],
      week7: [
        { title: "Project Planning", desc: "Organize and design your first mini project." },
        { title: "Code Optimization", desc: "Write clean, maintainable code." },
      ],
      week8: [
        { title: "Final Project", desc: "Build a complete responsive portfolio website." },
        { title: "Presentation", desc: "Showcase your first real-world project." },
      ],
    },
  },

  // ⚛️ FRONTEND INTERMEDIATE
  {
    id: "frontend-intermediate",
    title: "Frontend Intermediate – React Essentials",
    image: "/react.png",
    description:
      "Level up your frontend skills with React.js, the most popular JavaScript library for modern web apps.",
    fullDescription:
      "For learners familiar with HTML, CSS, and JavaScript, this course introduces React’s component-driven development, state management, and best UI practices.",
    instructors: [
      { name: "Yamlak N.", title: "React Instructor", image: "/yamlak.jpg" },
    ],
    price: "2000 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Develop and expand your React skills during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Setup", desc: "Create and configure your first React project." },
        { title: "JSX & Components", desc: "Understand React’s building blocks." },
      ],
      week2: [
        { title: "Props & State", desc: "Manage and share data between components." },
        { title: "Lifecycle & Re-rendering", desc: "Understand how components update." },
      ],
      week3: [
        { title: "Event Handling", desc: "Handle user interactions seamlessly." },
        { title: "Conditional Rendering", desc: "Render dynamic UIs based on logic." },
      ],
      week4: [
        { title: "React Router", desc: "Build multipage React applications." },
        { title: "Hooks Overview", desc: "Use useState and useEffect effectively." },
      ],
      week5: [
        { title: "Fetching Data", desc: "Integrate APIs using Axios and Fetch." },
        { title: "Custom Hooks", desc: "Extract and reuse logic easily." },
      ],
      week6: [
        { title: "Context API", desc: "Simplify state sharing across components." },
        { title: "Optimization", desc: "Improve performance and maintainability." },
      ],
      week7: [
        { title: "UI Components", desc: "Build reusable design system components." },
        { title: "Animations", desc: "Enhance UX with Framer Motion." },
      ],
      week8: [
        { title: "Final Project", desc: "Develop and deploy a React website." },
        { title: "Presentation", desc: "Showcase your work professionally." },
      ],
    },
  },

  // 🚀 REACT BOOTCAMP
  {
    id: "react-bootcamp",
    title: "React Frontend Developer Bootcamp",
    image: "/react.png",
    description:
      "Become a professional React developer with hands-on projects and advanced concepts.",
    fullDescription:
      "This 8-week intensive bootcamp takes you from React fundamentals to production-ready apps. Includes routing, Redux Toolkit, authentication, and deployment.",
    instructors: [
      { name: "Yamlak N.", title: "Lead React Developer", image: "/yamlak.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Master React development through practical projects during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Fundamentals", desc: "JSX, components, and virtual DOM." },
        { title: "Component Hierarchy", desc: "Structuring scalable React trees." },
      ],
      week2: [
        { title: "Hooks Deep Dive", desc: "useEffect, useRef, and custom hooks." },
        { title: "React Router", desc: "Implement advanced routing systems." },
      ],
      week3: [
        { title: "API Integration", desc: "Manage async data flow with Axios." },
        { title: "Error Boundaries", desc: "Handle errors gracefully in UI." },
      ],
      week4: [
        { title: "Redux Toolkit", desc: "Simplify complex state management." },
        { title: "Middleware", desc: "Handle async logic with Thunks." },
      ],
      week5: [
        { title: "Authentication", desc: "Implement secure login & protected routes." },
        { title: "Forms", desc: "Controlled components and validation." },
      ],
      week6: [
        { title: "Performance", desc: "Optimize with memo, lazy loading, and suspense." },
        { title: "Testing", desc: "Unit test components using Jest." },
      ],
      week7: [
        { title: "Deployment", desc: "Deploy apps on Vercel, Netlify, or Render." },
        { title: "CI/CD Basics", desc: "Automate your deployment pipeline." },
      ],
      week8: [
        { title: "Final Project", desc: "Develop a real-world React web app." },
        { title: "Presentation", desc: "Showcase your final product." },
      ],
    },
  },

  // 📱 MOBILE DEVELOPMENT
  {
    id: "mobile-react-native",
    title: "Mobile App Development with React Native",
    image: "/react-native.png",
    description:
      "Build cross-platform mobile apps for Android and iOS using React Native.",
    fullDescription:
      "Leverage React skills to build native-quality mobile apps. Learn navigation, APIs, storage, and performance optimization.",
    instructors: [
      { name: "Yamlak N.", title: "React Native Developer", image: "/yamlak.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Explore React Native mobile development during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Setup", desc: "Install React Native and configure environment." },
        { title: "Core Components", desc: "Learn View, Text, Image, and ScrollView." },
      ],
      week2: [
        { title: "Styling", desc: "Master StyleSheet and Flexbox layout." },
        { title: "Navigation", desc: "Implement stacks and tabs with React Navigation." },
      ],
      week3: [
        { title: "User Input", desc: "Handle forms, buttons, and gestures." },
        { title: "State Management", desc: "Manage app state with hooks." },
      ],
      week4: [
        { title: "APIs & Data", desc: "Connect to APIs and handle async data." },
        { title: "Async Storage", desc: "Persist user data locally." },
      ],
      week5: [
        { title: "Native Modules", desc: "Access camera, location, and sensors." },
        { title: "Debugging", desc: "Use Flipper and React DevTools effectively." },
      ],
      week6: [
        { title: "Performance", desc: "Improve load time and responsiveness." },
        { title: "Testing", desc: "Write and run React Native tests." },
      ],
      week7: [
        { title: "Publishing", desc: "Prepare apps for Play Store and App Store." },
        { title: "Project Design", desc: "Plan your capstone mobile app." },
      ],
      week8: [
        { title: "Final Project", desc: "Build and polish your mobile app." },
        { title: "Showcase", desc: "Present your completed application." },
      ],
    },
  },

  // 🖥️ BACKEND (EXPRESS)
  {
    id: "backend-beginner-express",
    title: "Backend Development with Node.js & Express",
    image: "/node.png",
    description:
      "Learn backend fundamentals and build REST APIs using Node.js and Express.",
    fullDescription:
      "Master server-side programming with Express.js. Learn to design APIs, connect databases, and deploy production-ready backends.",
    instructors: [
      { name: "Chala T.", title: "Backend Developer (Express & MongoDB)", image: "/chala.jpg" },
    ],
    price: "2000 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Explore backend and database topics during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Node.js Basics", desc: "Understand Node environment and NPM." },
        { title: "Express Setup", desc: "Create and configure an Express server." },
      ],
      week2: [
        { title: "Routing", desc: "Define routes and handle requests." },
        { title: "Middleware", desc: "Use Express middleware for requests." },
      ],
      week3: [
        { title: "RESTful APIs", desc: "Design clean API endpoints." },
        { title: "CRUD Operations", desc: "Implement basic data manipulation." },
      ],
      week4: [
        { title: "Database Integration", desc: "Connect MongoDB with Mongoose." },
        { title: "Validation", desc: "Validate and sanitize inputs." },
      ],
      week5: [
        { title: "Authentication", desc: "Implement JWT-based authentication." },
        { title: "Authorization", desc: "Secure routes and roles." },
      ],
      week6: [
        { title: "Error Handling", desc: "Gracefully handle exceptions." },
        { title: "API Testing", desc: "Use Postman and automated tests." },
      ],
      week7: [
        { title: "Deployment", desc: "Deploy to Render or Railway." },
        { title: "CI/CD Setup", desc: "Automate backend deployment." },
      ],
      week8: [
        { title: "Final Project", desc: "Build a production-ready REST API." },
        { title: "Presentation", desc: "Showcase your backend project." },
      ],
    },
  },

  // 🐍 BACKEND (DJANGO)
  {
    id: "backend-beginner-django",
    title: "Backend Development with Python & Django",
    image: "/django.png",
    description:
      "Learn backend development using Django, Python’s most powerful web framework.",
    fullDescription:
      "Understand the Django ecosystem and build secure, data-driven web apps. Learn ORM, authentication, and deployment.",
    instructors: [
      { name: "Yamlak N.", title: "Django Developer", image: "/yamlak.jpg" },
    ],
    price: "2000 ETB",
    timeline: Array.from({ length: 8 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Learn Django and backend principles during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Setup", desc: "Install Django and start your project." },
        { title: "App Structure", desc: "Understand Django’s modular architecture." },
      ],
      week2: [
        { title: "Models", desc: "Design your database with ORM." },
        { title: "Migrations", desc: "Apply and manage schema changes." },
      ],
      week3: [
        { title: "Views & Templates", desc: "Render dynamic pages." },
        { title: "Static Files", desc: "Add CSS, JS, and images properly." },
      ],
      week4: [
        { title: "Forms", desc: "Handle user inputs securely." },
        { title: "Authentication", desc: "Implement registration and login." },
      ],
      week5: [
        { title: "Admin Panel", desc: "Customize Django admin interface." },
        { title: "Testing", desc: "Write tests for Django apps." },
      ],
      week6: [
        { title: "Django REST Framework", desc: "Build RESTful APIs easily." },
        { title: "API Permissions", desc: "Control access to API endpoints." },
      ],
      week7: [
        { title: "Security", desc: "Protect your app from vulnerabilities." },
        { title: "Deployment", desc: "Deploy Django apps to production." },
      ],
      week8: [
        { title: "Final Project", desc: "Build a complete Django web app." },
        { title: "Showcase", desc: "Present your final backend project." },
      ],
    },
  },
];
