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
      content: `Progressive learning of frontend fundamentals during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Introduction to Web", desc: "Understand how the web works, browsers, and developer tools." },
        { title: "Documentation Basics", desc: "How to read and use MDN documentation effectively." },
      ],
      week2: [
        { title: "HTML Overview", desc: "Semantic structure and accessibility basics." },
        { title: "HTML5 Features", desc: "Explore forms, media, and new tags." },
      ],
      week3: [
        { title: "CSS Foundations", desc: "Selectors, colors, and text styling." },
        { title: "Box Model & Display", desc: "Master padding, margin, and positioning." },
      ],
      week4: [
        { title: "Responsive Design", desc: "Learn media queries and mobile-first design." },
        { title: "Flexbox & Grid", desc: "Modern layout systems." },
      ],
      week5: [
        { title: "JavaScript Basics", desc: "Variables, data types, and operators." },
        { title: "Functions & Loops", desc: "Write reusable, efficient logic." },
      ],
      week6: [
        { title: "DOM Manipulation", desc: "Interact with HTML dynamically using JS." },
        { title: "Events & Listeners", desc: "Respond to user actions." },
      ],
      week7: [
        { title: "APIs & JSON", desc: "Fetch and display external data." },
        { title: "Form Handling", desc: "Validate and manage user input." },
      ],
      week8: [
        { title: "Project Planning", desc: "Design a simple website structure." },
        { title: "Wireframing", desc: "Use Figma or Pen & Paper." },
      ],
      week9: [
        { title: "Mini Project", desc: "Build a static landing page." },
        { title: "Code Review", desc: "Refactor for best practices." },
      ],
      week10: [
        { title: "Portfolio Building", desc: "Add your project to a personal portfolio." },
        { title: "Hosting Basics", desc: "Deploy with GitHub Pages or Netlify." },
      ],
      week11: [
        { title: "Debugging & Optimization", desc: "Find and fix issues efficiently." },
        { title: "Accessibility", desc: "Ensure inclusive designs." },
      ],
      week12: [
        { title: "Final Project", desc: "Build a complete responsive website." },
        { title: "Presentation", desc: "Showcase your skills confidently." },
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
      "Level up your frontend skills with React.js, the most popular JavaScript library for modern web apps.",
    fullDescription:
      "For learners familiar with HTML, CSS, and JavaScript, this course introduces React’s component-driven development, state management, and best UI practices.",
    instructors: [
      { name: "Yamlak N.", title: "React Instructor", image: "/yamlak.jpg" },
    ],
    price: "2500 ETB",
    timeline: Array.from({ length: 12 }, (_, i) => ({
      title: `Week ${i + 1}`,
      content: `Develop and expand your React skills during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "React Philosophy", desc: "Understand declarative UI and component mindset." },
        { title: "Documentation Reading", desc: "Explore React official docs effectively." },
      ],
      week2: [
        { title: "React Setup", desc: "Create your project with Vite or CRA." },
        { title: "JSX & Components", desc: "Learn the building blocks of React." },
      ],
      week3: [
        { title: "Props & State", desc: "Share and manage data efficiently." },
        { title: "Lifecycle Overview", desc: "Understand re-rendering and component updates." },
      ],
      week4: [
        { title: "Hooks Introduction", desc: "useState, useEffect, and their roles." },
        { title: "Event Handling", desc: "Build interactive UIs." },
      ],
      week5: [
        { title: "React Router", desc: "Implement multipage routing." },
        { title: "Conditional Rendering", desc: "Dynamic UI logic." },
      ],
      week6: [
        { title: "API Integration", desc: "Fetch external data with Axios or Fetch." },
        { title: "Custom Hooks", desc: "Reusable logic across components." },
      ],
      week7: [
        { title: "Context API", desc: "Manage global state." },
        { title: "Performance Tips", desc: "Use memo and lazy loading." },
      ],
      week8: [
        { title: "UI Components", desc: "Build a design system." },
        { title: "Animations", desc: "Enhance UX using Framer Motion." },
      ],
      week9: [
        { title: "Testing Basics", desc: "Unit testing with Jest." },
        { title: "Error Boundaries", desc: "Handle runtime errors gracefully." },
      ],
      week10: [
        { title: "Deployment", desc: "Publish your React app online." },
        { title: "CI/CD Intro", desc: "Automate builds and deploys." },
      ],
      week11: [
        { title: "Final Project Planning", desc: "Design a complete React app idea." },
        { title: "UI Wireframe", desc: "Plan structure visually." },
      ],
      week12: [
        { title: "Final Project", desc: "Build and present your React web app." },
        { title: "Demo & Feedback", desc: "Showcase to peers and mentors." },
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
      content: `Explore backend and database topics during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Backend Overview", desc: "Understand servers, HTTP, and client-server models." },
        { title: "Node.js Introduction", desc: "What Node is and why it’s powerful." },
      ],
      week2: [
        { title: "Express Basics", desc: "Set up your first Express server." },
        { title: "Routing & Middleware", desc: "Organize and handle requests." },
      ],
      week3: [
        { title: "Documentation Practice", desc: "Read and use Express & MongoDB docs effectively." },
        { title: "Environment Setup", desc: "Set up Postman, MongoDB Atlas, etc." },
      ],
      week4: [
        { title: "Database Integration", desc: "Connect MongoDB using Mongoose." },
        { title: "CRUD Operations", desc: "Implement create, read, update, delete APIs." },
      ],
      week5: [
        { title: "Validation & Error Handling", desc: "Use middleware to handle input and exceptions." },
        { title: "Authentication", desc: "Implement JWT-based auth." },
      ],
      week6: [
        { title: "Authorization & Roles", desc: "Role-based access control." },
        { title: "Security Practices", desc: "Avoid common web vulnerabilities." },
      ],
      week7: [
        { title: "File Uploads", desc: "Handle images and documents." },
        { title: "Email Integration", desc: "Use Nodemailer or similar tools." },
      ],
      week8: [
        { title: "API Testing", desc: "Use Postman and automated testing." },
        { title: "Logging", desc: "Track and debug server activity." },
      ],
      week9: [
        { title: "Deployment", desc: "Deploy apps to Render or Railway." },
        { title: "CI/CD Pipelines", desc: "Automate deployment process." },
      ],
      week10: [
        { title: "Performance Optimization", desc: "Optimize queries and caching." },
        { title: "Monitoring", desc: "Use tools like PM2." },
      ],
      week11: [
        { title: "Final Project Planning", desc: "Design API structure for real use case." },
        { title: "Team Collaboration", desc: "Work in pairs or small groups." },
      ],
      week12: [
        { title: "Final Project", desc: "Build and deploy full REST API." },
        { title: "Demo Day", desc: "Present your project and workflow." },
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
      content: `Learn Django and backend principles during week ${i + 1}.`,
    })),
    modules: {
      week1: [
        { title: "Introduction to Django", desc: "Understand what Django is and how it works." },
        { title: "Documentation Practice", desc: "Navigate Django official documentation." },
      ],
      week2: [
        { title: "Setup & Project Structure", desc: "Install and create your first Django project." },
        { title: "App Concept", desc: "Work with multiple Django apps." },
      ],
      week3: [
        { title: "Models & ORM", desc: "Define data models and interact with the database." },
        { title: "Migrations", desc: "Apply schema changes effectively." },
      ],
      week4: [
        { title: "Views & Templates", desc: "Connect Python logic with HTML templates." },
        { title: "Static Files", desc: "Handle CSS, JS, and images." },
      ],
      week5: [
        { title: "Forms & Validation", desc: "Handle user inputs securely." },
        { title: "Authentication", desc: "Build login and registration systems." },
      ],
      week6: [
        { title: "Django Admin", desc: "Customize and use admin panel." },
        { title: "DRF Setup", desc: "Build REST APIs with Django REST Framework." },
      ],
      week7: [
        { title: "API Permissions", desc: "Secure and manage access." },
        { title: "Testing", desc: "Test Django apps effectively." },
      ],
      week8: [
        { title: "Deployment", desc: "Deploy to Render or Railway." },
        { title: "Security", desc: "Protect against common attacks." },
      ],
      week9: [
        { title: "Optimization", desc: "Improve query performance." },
        { title: "Async Django", desc: "Learn async views and tasks." },
      ],
      week10: [
        { title: "File Handling", desc: "Manage uploads and static files." },
        { title: "Logging & Monitoring", desc: "Track and debug production issues." },
      ],
      week11: [
        { title: "Final Project Planning", desc: "Plan your app structure." },
        { title: "Team Workflows", desc: "Collaborate via Git." },
      ],
      week12: [
        { title: "Final Project", desc: "Build a complete Django app." },
        { title: "Showcase", desc: "Present your backend project." },
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
