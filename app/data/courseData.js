export const courses = [
  // 🌐 FRONTEND BEGINNER
  {
    id: "frontend-beginner",
    title: "Frontend Development for Beginners",
    image: "/html.png",
    maxStudents: 20,
    description:
      "Start your web development journey by mastering HTML, CSS, and JavaScript from scratch.",
    fullDescription:
      "This beginner-friendly course builds a solid foundation in frontend development. You’ll learn to create responsive, visually appealing websites and bring them to life using JavaScript.",
    instructors: [
      { name: "Yamlak N.", title: "Frontend Instructor", image: "/yamlak.jpg" },
      { name: "Chala T.", title: "Frontend Engineer", image: "/chala.jpg" },
    ],
    price: "2000 ETB",
    timeline: Array.from({ length: 12 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content:
        i < 9
          ? `Progressive learning of frontend fundamentals during week ${i + 1}.`
          : `Project planning and implementation during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Introduction to Web", desc: "Understand how the web works and developer tools." },
        { title: "Documentation Basics", desc: "Learn to use MDN effectively." },
      ],
      week2: [
        { title: "HTML Overview", desc: "Semantic structure and accessibility basics." },
        { title: "HTML5 Features", desc: "Forms, media, and semantic tags." },
      ],
      week3: [
        { title: "CSS Foundations", desc: "Selectors, colors, and text styling." },
        { title: "Box Model & Display", desc: "Padding, margin, and layout principles." },
      ],
      week4: [
        { title: "Responsive Design", desc: "Media queries and mobile-first design." },
        { title: "Flexbox & Grid", desc: "Build advanced layouts with modern CSS." },
      ],
      week5: [
        { title: "JavaScript Basics", desc: "Variables, data types, and operators." },
        { title: "Functions & Loops", desc: "Reusable logic and iterations." },
      ],
      week6: [
        { title: "DOM Manipulation", desc: "Interact dynamically with HTML elements." },
        { title: "Events & Listeners", desc: "Build interactive web experiences." },
      ],
      week7: [
        { title: "APIs & JSON", desc: "Work with external data and APIs." },
        { title: "Form Handling", desc: "Validate and manage user inputs." },
      ],
      week8: [
        { title: "Mini Project", desc: "Start a small landing page project." },
        { title: "Code Review", desc: "Improve code readability and structure." },
      ],
      week9: [
        { title: "UI Enhancement", desc: "Add animations and polish design." },
        { title: "Testing", desc: "Check and debug the project." },
      ],
      week10: [
        { title: "Project Planning", desc: "Plan and wireframe your main project." },
        { title: "Portfolio Setup", desc: "Prepare personal portfolio layout." },
      ],
      week11: [
        { title: "Final Project Development", desc: "Implement the full website." },
        { title: "Hosting", desc: "Deploy via GitHub Pages or Netlify." },
      ],
      week12: [
        { title: "Project Presentation", desc: "Showcase your work." },
        { title: "Career Guidance", desc: "Next steps and freelancing tips." },
      ],
    },
  },

  // ⚛️ FRONTEND INTERMEDIATE – REACT
  {
    id: "frontend-intermediate",
    title: "Frontend Intermediate – React Essentials",
    image: "/react.png",
    maxStudents: 20,
    description:
      "Level up your frontend skills with React.js, the most popular library for building modern web apps.",
    fullDescription:
      "This course covers React components, hooks, and modern UI practices to help you build dynamic web applications efficiently.",
    instructors: [
      { name: "Yamlak N.", title: "React Instructor", image: "/yamlak.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 12 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content:
        i < 9
          ? `Expand your React knowledge during week ${i + 1}.`
          : `Project planning and implementation during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Overview", desc: "Component-based design and declarative UIs." },
        { title: "JSX & Rendering", desc: "Learn JSX and dynamic rendering." },
      ],
      week2: [
        { title: "Props & State", desc: "Share and manage component data." },
        { title: "useState & useEffect", desc: "Core React hooks." },
      ],
      week3: [
        { title: "Event Handling", desc: "Handle user interactions." },
        { title: "React Router", desc: "Build multi-page navigation." },
      ],
      week4: [
        { title: "Forms & Validation", desc: "Controlled and uncontrolled components." },
        { title: "API Calls", desc: "Fetch data from APIs using Axios." },
      ],
      week5: [
        { title: "Context API", desc: "Manage global state effectively." },
        { title: "Performance Optimization", desc: "Use memo and lazy loading." },
      ],
      week6: [
        { title: "UI Components", desc: "Create reusable component libraries." },
        { title: "Framer Motion", desc: "Add smooth animations." },
      ],
      week7: [
        { title: "Error Boundaries", desc: "Handle runtime errors gracefully." },
        { title: "Testing", desc: "Test components with Jest and RTL." },
      ],
      week8: [
        { title: "Project Setup", desc: "Initialize your main React project." },
        { title: "Wireframing", desc: "Design UI and plan data flow." },
      ],
      week9: [
        { title: "Implementation", desc: "Develop core features and pages." },
        { title: "Debugging", desc: "Fix issues and optimize code." },
      ],
      week10: [
        { title: "Final Project Planning", desc: "Refine project goals and structure." },
        { title: "Collaboration", desc: "Work in small developer groups." },
      ],
      week11: [
        { title: "Final Project Development", desc: "Build and polish the React app." },
        { title: "Deployment", desc: "Deploy on Netlify or Vercel." },
      ],
      week12: [
        { title: "Presentation", desc: "Showcase your final project." },
        { title: "Career Preparation", desc: "Build resume and LinkedIn presence." },
      ],
    },
  },

  // 📱 REACT NATIVE – MOBILE DEVELOPMENT
  {
    id: "react-native-beginner",
    title: "React Native Mobile App Development",
    image: "/react-native.png",
    maxStudents: 20,
    description:
      "Learn to build cross-platform mobile applications using React Native.",
    fullDescription:
      "This course guides you from the basics of mobile UI components to advanced topics like navigation, APIs, and deployment to Google Play Store.",
    instructors: [
      { name: "Yamlak N.", title: "Mobile Developer (React Native)", image: "/yamlak.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 12 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content:
        i < 9
          ? `Learn mobile app development concepts during week ${i + 1}.`
          : `Project planning and publishing during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Native Setup", desc: "Install Expo CLI and environment setup." },
        { title: "Core Components", desc: "Understand Views, Text, and StyleSheet." },
      ],
      week2: [
        { title: "Flexbox in RN", desc: "Layout using Flexbox for mobile screens." },
        { title: "Styling", desc: "Apply consistent mobile UI design." },
      ],
      week3: [
        { title: "Navigation", desc: "Implement navigation using React Navigation." },
        { title: "State Management", desc: "Handle data using Context or Redux." },
      ],
      week4: [
        { title: "APIs & Fetch", desc: "Connect your mobile app to APIs." },
        { title: "Forms & Validation", desc: "Handle user input efficiently." },
      ],
      week5: [
        { title: "Native Modules", desc: "Integrate device features like Camera or Location." },
        { title: "Storage", desc: "Persist data using AsyncStorage." },
      ],
      week6: [
        { title: "UI Enhancements", desc: "Add icons, animations, and splash screens." },
        { title: "Theming", desc: "Light and dark mode support." },
      ],
      week7: [
        { title: "Push Notifications", desc: "Integrate Firebase notifications." },
        { title: "Testing", desc: "Run and debug apps using Expo Go." },
      ],
      week8: [
        { title: "Mini App Project", desc: "Build a small mobile app (e.g., Todo App)." },
        { title: "Feedback", desc: "Improve based on reviews." },
      ],
      week9: [
        { title: "Advanced Optimization", desc: "Improve performance and offline support." },
        { title: "Play Store Prep", desc: "Ready app for publishing." },
      ],
      week10: [
        { title: "Project Planning", desc: "Design and define your final mobile app." },
        { title: "Wireframe & Flow", desc: "Visualize navigation and UX flow." },
      ],
      week11: [
        { title: "Final App Development", desc: "Build the complete mobile app." },
        { title: "Testing & Debugging", desc: "Run tests and fix production issues." },
      ],
      week12: [
        { title: "Publishing", desc: "Deploy app to Play Store or Expo." },
        { title: "Showcase", desc: "Demo your mobile app." },
      ],
    },
  },

  // 🖥️ BACKEND – EXPRESS (Node.js)
  {
    id: "backend-beginner-express",
    title: "Backend Development with Node.js & Express",
    image: "/node.png",
    maxStudents: 20,
    description:
      "Learn backend fundamentals and build REST APIs using Node.js and Express.",
    fullDescription:
      "Master server-side programming with Express.js. Learn to design APIs, connect databases, and deploy production-ready backends.",
    instructors: [
      { name: "Chala T.", title: "Backend Developer (Express & MongoDB)", image: "/chala.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 12 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content:
        i < 9
          ? `Explore backend and database topics during week ${i + 1}.`
          : `Project planning and API implementation during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Backend Overview", desc: "Understand servers, HTTP, and client-server models." },
        { title: "Node.js Introduction", desc: "Learn what Node is and why it’s powerful." },
      ],
      week2: [
        { title: "Express Basics", desc: "Set up your first Express server." },
        { title: "Routing & Middleware", desc: "Handle requests cleanly." },
      ],
      week3: [
        { title: "MongoDB Setup", desc: "Integrate MongoDB with Mongoose." },
        { title: "CRUD Operations", desc: "Create APIs to handle data." },
      ],
      week4: [
        { title: "Validation", desc: "Secure user inputs with middleware." },
        { title: "Authentication", desc: "Use JWT for user login and access." },
      ],
      week5: [
        { title: "File Uploads", desc: "Handle images and documents." },
        { title: "Email Integration", desc: "Send transactional emails." },
      ],
      week6: [
        { title: "Security", desc: "Avoid common vulnerabilities." },
        { title: "Error Handling", desc: "Centralize app error responses." },
      ],
      week7: [
        { title: "Testing APIs", desc: "Use Postman and Jest for testing." },
        { title: "Logging", desc: "Track server performance." },
      ],
      week8: [
        { title: "Mini Project", desc: "Start a small backend API." },
        { title: "Refactoring", desc: "Optimize project structure." },
      ],
      week9: [
        { title: "Deployment", desc: "Deploy your app to Render or Railway." },
        { title: "CI/CD", desc: "Automate builds and testing." },
      ],
      week10: [
        { title: "Final Project Planning", desc: "Design your API structure." },
        { title: "Team Collaboration", desc: "Work in small backend teams." },
      ],
      week11: [
        { title: "Final API Development", desc: "Implement and test APIs." },
        { title: "Optimization", desc: "Enhance performance and security." },
      ],
      week12: [
        { title: "Final Presentation", desc: "Showcase your backend system." },
        { title: "Career Insights", desc: "Prepare for backend interviews." },
      ],
    },
  },

  // 🐍 BACKEND – DJANGO
  {
    id: "backend-beginner-django",
    title: "Backend Development with Python & Django",
    image: "/django.png",
    maxStudents: 20,
    description:
      "Learn backend development using Django, Python’s most powerful web framework.",
    fullDescription:
      "Understand the Django ecosystem and build secure, data-driven web apps. Learn ORM, authentication, and deployment.",
    instructors: [
      { name: "Yamlak N.", title: "Django Developer", image: "/yamlak.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 12 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content:
        i < 9
          ? `Learn Django and backend principles during week ${i + 1}.`
          : `Project planning and implementation during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Django Overview", desc: "What Django is and how it works." },
        { title: "Setup", desc: "Install Django and create your first project." },
      ],
      week2: [
        { title: "Models & ORM", desc: "Define data models and connect to DB." },
        { title: "Migrations", desc: "Apply schema updates efficiently." },
      ],
      week3: [
        { title: "Views & Templates", desc: "Render dynamic pages with context." },
        { title: "Static Files", desc: "Serve CSS, JS, and media." },
      ],
      week4: [
        { title: "Forms & Validation", desc: "Handle inputs safely." },
        { title: "Authentication", desc: "User registration and login systems." },
      ],
      week5: [
        { title: "Django Admin", desc: "Customize admin panel." },
        { title: "DRF Basics", desc: "Create REST APIs with Django REST Framework." },
      ],
      week6: [
        { title: "API Permissions", desc: "Secure API endpoints." },
        { title: "Testing", desc: "Write and run tests." },
      ],
      week7: [
        { title: "Deployment Prep", desc: "Get your app ready for production." },
        { title: "Security", desc: "Protect against attacks." },
      ],
      week8: [
        { title: "Mini Project", desc: "Build a simple CRUD app." },
        { title: "Feedback", desc: "Refactor and optimize." },
      ],
      week9: [
        { title: "Performance", desc: "Optimize queries and speed." },
        { title: "Logging", desc: "Monitor your app." },
      ],
      week10: [
        { title: "Final Project Planning", desc: "Outline your backend project." },
        { title: "Team Workflow", desc: "Collaborate effectively." },
      ],
      week11: [
        { title: "Final Project", desc: "Develop and test your Django app." },
        { title: "Deployment", desc: "Deploy using Render or Railway." },
      ],
      week12: [
        { title: "Presentation", desc: "Showcase your final project." },
        { title: "Career Guidance", desc: "Next steps for backend devs." },
      ],
    },
  },

  // 🧩 BACKEND – PHP & LARAVEL
  {
    id: "backend-php-laravel",
    title: "Backend Development with PHP & Laravel",
    image: "/laravel.png",
    maxStudents: 20,
    description:
      "Master PHP backend development using the Laravel framework to build powerful web apps.",
    fullDescription:
      "This 12-week course teaches you how to create dynamic and scalable applications using PHP and Laravel. From routing to authentication and deployment, you’ll gain industry-ready backend skills.",
    instructors: [
      { name: "Chala T.", title: "Backend Developer (Laravel & PHP)", image: "/chala.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 12 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Explore PHP and Laravel backend development during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Introduction to PHP", desc: "Learn syntax, variables, and control structures." },
        { title: "Documentation & Setup", desc: "Install PHP and Composer, and read official docs." },
      ],
      week2: [
        { title: "OOP in PHP", desc: "Understand classes, objects, and inheritance." },
        { title: "Best Practices", desc: "Code organization and naming conventions." },
      ],
      week3: [
        { title: "Laravel Setup", desc: "Install Laravel and configure environment." },
        { title: "MVC Architecture", desc: "Understand Laravel’s structure." },
      ],
      week4: [
        { title: "Routing & Controllers", desc: "Define and handle routes effectively." },
        { title: "Views & Blade", desc: "Use Laravel’s templating engine." },
      ],
      week5: [
        { title: "Models & Migrations", desc: "Design and manage your database schema." },
        { title: "Eloquent ORM", desc: "Work with data easily using Eloquent." },
      ],
      week6: [
        { title: "Validation & Forms", desc: "Handle and validate user input." },
        { title: "Authentication", desc: "Implement user registration and login." },
      ],
      week7: [
        { title: "APIs in Laravel", desc: "Build RESTful APIs using Laravel resources." },
        { title: "Middleware", desc: "Secure and customize request flow." },
      ],
      week8: [
        { title: "Email & Notifications", desc: "Send emails and system alerts." },
        { title: "File Uploads", desc: "Handle images and documents securely." },
      ],
      week9: [
        { title: "Testing", desc: "Unit and feature tests in Laravel." },
        { title: "Error Handling", desc: "Graceful error management." },
      ],
      week10: [
        { title: "Optimization", desc: "Improve query and app performance." },
        { title: "Caching & Queues", desc: "Enhance scalability and speed." },
      ],
      week11: [
        { title: "Deployment", desc: "Host on Render, Vercel, or shared hosting." },
        { title: "Project Planning", desc: "Define your final project scope." },
      ],
      week12: [
        { title: "Final Project", desc: "Build a full Laravel web app." },
        { title: "Presentation", desc: "Showcase your Laravel project professionally." },
      ],
    },
  },
];
