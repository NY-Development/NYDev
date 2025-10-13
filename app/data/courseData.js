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
      "This beginner-friendly course builds a solid foundation in frontend development. You’ll learn to create responsive, visually appealing websites and bring them to life using JavaScript. By the end, you'll have a professional portfolio ready for junior roles.",
    instructors: [
      // { name: "Nafargi D.", title: "Lead Frontend Instructor", image: "/nafargi.jpg" }, // 🧑‍💻 Assigned Nafargi (Pro Frontend)
      { name: "Yamlak N.", title: "Frontend Instructor", image: "/team/yamlak.jpg" }, 
    ],
    price: "2000 ETB",
    // 🚨 UPDATED: Prerequisites for all courses (Beginner/General)
    prerequisites: [
      "Basic computer literacy (file management, web browser usage).", 
      "A working computer with internet access.",
      "A desire to learn programming and problem-solving.",
    ],
    outcomes: [
      "Build responsive web pages using modern CSS (Flexbox/Grid).",
      "Manipulate the DOM dynamically with vanilla JavaScript.",
      "Create a working, multi-page personal portfolio.",
      "Understand web fundamentals (HTTP, APIs, Dev Tools).",
    ],
    pricingPlans: [
      { name: "Standard Access", price: "2000 ETB", features: ["12 Weeks Live Access", "Course Materials (Lifetime)", "Certificate of Completion"] },
      { name: "Premium Access", price: "3000 ETB", popular: true, features: ["Standard Features", "1 hour 1-on-1 Code Review", "Priority Support & Job Tips"] },
    ],
    whyPay: [
      "Access to Live, Interactive Sessions led by industry veterans.",
      "Guaranteed post-course project review and portfolio building.",
      "Secure, high-quality learning platform and resources.",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      week1: [
        { title: "What is the Web & Setup", desc: "Understand how the web works and install VS Code, browser tools." },
        { title: "HTML Basics", desc: "Semantic structure and essential tags." },
      ],
      week2: [
        { title: "CSS Foundations", desc: "Selectors, colors, and text styling." },
        { title: "The Box Model", desc: "Padding, margin, and layout principles." },
      ],
      week3: [
        { title: "Responsive Design", desc: "Media queries and mobile-first approach." },
        { title: "Layout with Flexbox", desc: "Master one-dimensional layouts." },
      ],
      week4: [
        { title: "Layout with Grid", desc: "Master two-dimensional layouts." },
        { title: "Intro to JavaScript", desc: "Variables, data types, and operators." },
      ],
      week5: [
        { title: "Control Flow", desc: "Conditionals, functions, and loops." },
        { title: "DOM Manipulation", desc: "Interact dynamically with HTML elements." },
      ],
      week6: [
        { title: "Events & Listeners", desc: "Build interactive web experiences." },
        { title: "APIs & JSON", desc: "Work with external data (Fetch API)." },
      ],
      week7: [
        { title: "Mini Project: To-Do App", desc: "Apply all learned concepts to a functional app." },
        { title: "Git & GitHub Basics", desc: "Version control and collaboration." },
      ],
      week8: [
        { title: "Advanced CSS", desc: "Animations, transitions, and polish." },
        { title: "Code Review & Refactoring", desc: "Improve code quality and structure." },
      ],
      week9: [
        { title: "Portfolio Planning", desc: "Design and wireframe your final portfolio site." },
        { title: "Tools & Libraries", desc: "Introduction to helpful frontend tools." },
      ],
      week10: [
        { title: "Project Building Kick-off", desc: "Set up the project structure and initial HTML." },
        { title: "Styling Core Components", desc: "Implement the main responsive CSS." },
      ],
      week11: [
        { title: "Project Functionality", desc: "Implement all JavaScript interactivity." },
        { title: "Deployment", desc: "Deploy final project using Vercel or Netlify." },
      ],
      week12: [
        { title: "Final Project Presentation", desc: "Showcase your complete portfolio to peers/mentors." },
        { title: "Career Guidance", desc: "Resume building and job search tips." },
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
      "This course covers React components, hooks, and modern UI practices to help you build dynamic web applications efficiently. You will create a full-featured single-page application (SPA).",
    instructors: [
      { name: "Sana M.", title: "Lead React Instructor", image: "/team/sana.jpg" }, // 🧑‍💻 Assigned Sana (React Instructor)
      { name: "Yamlak N.", title: "React Instructor", image: "/team/yamlak.jpg" },
    ],
    price: "2500 ETB",
    // 🚨 UPDATED: Prerequisites (Intermediate)
    prerequisites: [
      "Strong understanding of HTML, CSS, and modern JavaScript (ES6+ features).", 
      "Experience with command line interface and Git/GitHub.", 
      "Knowledge of fundamental web development concepts (APIs, HTTP).",
    ],
    outcomes: [
      "Master functional components, Hooks (useState, useEffect, etc.).",
      "Build multi-page applications using React Router.",
      "Manage complex state using Context API or Redux (brief intro).",
      "Build a real-world, data-fetching single-page application (SPA).",
    ],
    pricingPlans: [
      { name: "Standard Access", price: "2500 ETB", features: ["12 Weeks Live Access", "React Project Templates", "Certificate of Completion"] },
      { name: "Premium Access", price: "3500 ETB", popular: true, features: ["Standard Features", "1 hour 1-on-1 Code Review", "Final Project Deployment Assistance"] },
    ],
    whyPay: [
      "Direct guidance from senior developers experienced with React in production.",
      "Access to exclusive, modern React project starter kits.",
      "Focus on job-market skills like state management and testing.",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      week1: [
        { title: "What is React & Setup", desc: "Component-based design, setting up a React project (Vite/CRA)." },
        { title: "JSX and Functional Components", desc: "Understand JSX and how to create basic components." },
      ],
      week2: [
        { title: "Props and State Basics", desc: "Passing data with props and managing component state with `useState`." },
        { title: "Lifecycle with useEffect", desc: "Performing side effects (data fetching, DOM) with `useEffect`." },
      ],
      week3: [
        { title: "Conditional Rendering & Lists", desc: "Displaying elements conditionally and rendering lists of data." },
        { title: "React Router", desc: "Implementing client-side routing and navigation." },
      ],
      week4: [
        { title: "Forms and Controlled Components", desc: "Handling form input and submission elegantly in React." },
        { title: "Data Fetching", desc: "Using Axios or Fetch to integrate REST APIs." },
      ],
      week5: [
        { title: "Context API for State", desc: "Managing global state without prop drilling." },
        { title: "Advanced Hooks", desc: "Exploring `useReducer` and custom hooks." },
      ],
      week6: [
        { title: "Component Reusability", desc: "Building modular, reusable UI components." },
        { title: "Styling in React", desc: "Tailwind CSS integration and CSS Modules (brief intro)." },
      ],
      week7: [
        { title: "Performance Optimization", desc: "Using `React.memo` and `useCallback`." },
        { title: "Error Handling", desc: "Implementing Error Boundaries." },
      ],
      week8: [
        { title: "Mini Project: Quiz App", desc: "Complete a small React app using state and fetching." },
        { title: "Testing Basics", desc: "Introduction to Jest and React Testing Library (RTL)." },
      ],
      week9: [
        { title: "Final Project Planning", desc: "Define project scope, features, and component structure." },
        { title: "Wireframing & UI Design", desc: "Design the user interface and data flow." },
      ],
      week10: [
        { title: "Project Building: Setup & Routing", desc: "Initialize the final project and set up multi-page routing." },
        { title: "Core Data Fetching & State", desc: "Implement the main API connections and global state." },
      ],
      week11: [
        { title: "Project Building: Features", desc: "Develop complex features like search, filtering, and user input forms." },
        { title: "Deployment Prep", desc: "Optimizing code and preparing for Vercel/Netlify deployment." },
      ],
      week12: [
        { title: "Final Project Presentation", desc: "Showcase the complete React SPA and handle Q&A." },
        { title: "Career Preparation", desc: "Interview tips for React developers." },
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
      "This course guides you from the basics of mobile UI components to advanced topics like navigation, APIs, and deployment to Google Play Store. You will build a functional, cross-platform mobile app.",
    instructors: [
      { name: "Yamlak N.", title: "Mobile Developer (React Native)", image: "/team/yamlak.jpg" }, // 🧑‍💻 Assigned Yamlak (React Native)
    ],
    price: "2500 ETB",
    // 🚨 UPDATED: Prerequisites (Intermediate)
    prerequisites: [
      "Proficiency in JavaScript (ES6+).",
      "Familiarity with React.js is highly recommended.", 
      "A conceptual understanding of mobile development paradigms.",
    ],
    outcomes: [
      "Build native-feeling UIs using React Native components and Flexbox.",
      "Implement complex navigation using React Navigation.",
      "Integrate device features like camera, location, and storage.",
      "Publish a cross-platform app to Expo or a store.",
    ],
    pricingPlans: [
      { name: "Standard Access", price: "2500 ETB", features: ["12 Weeks Live Access", "Mobile Project Templates", "Certificate of Completion"] },
      { name: "Premium Access", price: "3500 ETB", popular: true, features: ["Standard Features", "Expo/App Store Deployment Guide", "1 hour 1 on 1 code review"] },
    ],
    whyPay: [
      "Hands-on training focused entirely on mobile application architecture.",
      "Expert guidance on handling native features and device APIs.",
      "Support for app submission process (Play Store/App Store).",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      week1: [
        { title: "RN Intro & Setup", desc: "Install Expo CLI and environment setup. Understanding the React Native vs. Web model." },
        { title: "Core Components & Styling", desc: "Understand Views, Text, Images, and using StyleSheet." },
      ],
      week2: [
        { title: "Mobile Layout with Flexbox", desc: "Mastering Flexbox for adaptive mobile screen layouts." },
        { title: "Handling User Input", desc: "Working with TextInput, Buttons, and basic state management." },
      ],
      week3: [
        { title: "React Navigation Deep Dive", desc: "Implement Stack, Tab, and Drawer navigation." },
        { title: "State Management", desc: "Handling complex data using Context API or Redux (brief intro)." },
      ],
      week4: [
        { title: "Data Fetching & APIs", desc: "Connecting your mobile app to a REST API." },
        { title: "Forms & Validation", desc: "Efficiently handling user input and validation." },
      ],
      week5: [
        { title: "Device Features (Camera & Location)", desc: "Integrating Expo APIs for device services." },
        { title: "Local Storage", desc: "Persist data using AsyncStorage." },
      ],
      week6: [
        { title: "UI Enhancements & Animations", desc: "Adding smooth animations and native-feeling transitions." },
        { title: "Theming & UI Kits", desc: "Implementing light/dark mode and using UI component libraries." },
      ],
      week7: [
        { title: "Push Notifications", desc: "Integrating push notifications using Firebase/Expo." },
        { title: "Debugging & Testing", desc: "Effective debugging and testing methodologies in mobile." },
      ],
      week8: [
        { title: "Mini App Project: News Feed", desc: "Build a small, functional app with external data fetching and navigation." },
        { title: "Code Review & Feedback", desc: "Improve code structure and address mobile-specific issues." },
      ],
      week9: [
        { title: "Advanced Optimization", desc: "Improving performance and managing large lists (FlatList/SectionList)." },
        { title: "Native Module Intro", desc: "Understanding when to drop down to native code." },
      ],
      week10: [
        { title: "Project Building Kick-off", desc: "Design and define the final mobile app scope and architecture." },
        { title: "Core UI Implementation", desc: "Build out the main screens and navigation structure." },
      ],
      week11: [
        { title: "Project Functionality & Testing", desc: "Implement all business logic and integrate data sources." },
        { title: "Deployment Prep", desc: "Creating build files and preparing for store submission." },
      ],
      week12: [
        { title: "Final App Showcase", desc: "Demo your complete mobile application." },
        { title: "Publishing Guidance", desc: "Walkthrough of the Google Play/App Store submission process." },
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
      "Master server-side programming with Express.js. Learn to design APIs, connect databases (MongoDB), and deploy production-ready backends for web and mobile applications.",
    instructors: [
      { name: "Chala T.", title: "Lead Backend Developer (Express)", image: "/team/chala.jpg" }, // 🧑‍💻 Assigned Chala (Node/Express)
    ],
    price: "2500 ETB",
    // 🚨 UPDATED: Prerequisites (Backend/JS Focus)
    prerequisites: [
      "Solid foundation in JavaScript (variables, functions, objects, asynchronous programming).", 
      "Familiarity with databases (SQL/NoSQL basics) is a plus.",
      "Understanding of HTTP methods (GET, POST, PUT, DELETE).",
    ],
    outcomes: [
      "Build a robust RESTful API with Node.js and Express.",
      "Implement secure user authentication using JWT and bcrypt.",
      "Design and interact with MongoDB using Mongoose.",
      "Deploy a production-ready backend to a cloud service.",
    ],
    pricingPlans: [
      { name: "Standard Access", price: "2500 ETB", features: ["12 Weeks Live Access", "Backend Boilerplates", "Certificate of Completion"] },
      { name: "Premium Access", price: "3500 ETB", popular: true, features: ["Standard Features", "1 hour 1-on-1 Debugging", "Chance of Working together."] },
    ],
    whyPay: [
      "Deep dive into API design principles and security best practices.",
      "Practical experience with MongoDB and Mongoose for database management.",
      "Guidance on deployment, scaling, and server maintenance.",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      week1: [
        { title: "Backend Intro & Setup", desc: "Understand servers, HTTP, and install Node.js/tools." },
        { title: "Node.js Fundamentals", desc: "Asynchronous programming and the Event Loop." },
      ],
      week2: [
        { title: "Express Basics", desc: "Set up your first Express server and routing." },
        { title: "Middleware", desc: "Using custom and third-party middleware (e.g., body-parser)." },
      ],
      week3: [
        { title: "MongoDB & Mongoose", desc: "Integrate and model data using Mongoose schemas." },
        { title: "CRUD API Implementation", desc: "Build the core Create, Read, Update, Delete routes." },
      ],
      week4: [
        { title: "User Authentication (JWT)", desc: "Implement secure login/registration with JWT." },
        { title: "Security & Validation", desc: "Input validation and basic security measures (Helmet, CORS)." },
      ],
      week5: [
        { title: "Advanced Mongoose", desc: "Aggregation, population, and advanced queries." },
        { title: "File Handling", desc: "Uploading and serving static files (Multer)." },
      ],
      week6: [
        { title: "Testing APIs", desc: "Using Postman/Insomnia and introduction to unit testing (Jest)." },
        { title: "Error Handling & Logging", desc: "Centralized error handling and using Winston for logging." },
      ],
      week7: [
        { title: "Real-time with Socket.io", desc: "Introduction to WebSockets for live features (e.g., chat)." },
        { title: "Environment Variables", desc: "Configuring production and development settings." },
      ],
      week8: [
        { title: "Mini Project: Authentication Service", desc: "Build a complete, secure user microservice." },
        { title: "Code Refactoring", desc: "Organizing MVC patterns and best practices." },
      ],
      week9: [
        { title: "Deployment Fundamentals", desc: "Preparing the application for production hosting (Render/Railway)." },
        { title: "CI/CD Introduction", desc: "Automate builds and testing with GitHub Actions." },
      ],
      week10: [
        { title: "Project Building Kick-off", desc: "Define the final API features, architecture, and database models." },
        { title: "Core Routes & MongoDB Setup", desc: "Implement the primary CRUD endpoints and database connection." },
      ],
      week11: [
        { title: "Project Building: Security & Features", desc: "Implement full authentication, file handling, and necessary third-party services." },
        { title: "Performance Optimization", desc: "Indexing and caching strategies." },
      ],
      week12: [
        { title: "Final Project Presentation", desc: "Showcase the complete, deployed backend API." },
        { title: "Career Insights", desc: "Preparing for backend and system design interviews." },
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
      "Understand the Django ecosystem and build secure, data-driven web apps. Learn ORM, authentication, REST APIs with DRF, and deployment.",
    instructors: [
      { name: "Yamlak N.", title: "Django Developer", image: "/team/yamlak.jpg" }, // 🧑‍💻 Assigned Yamlak (Django)
    ],
    price: "2500 ETB",
    // 🚨 UPDATED: Prerequisites (Backend/Python Focus)
    prerequisites: [
      "Solid foundation in Python (syntax, functions, classes).", 
      "Understanding of relational databases (SQL basics) is beneficial.",
      "Basic familiarity with the command line interface.",
    ],
    outcomes: [
      "Master the MVC (Model-View-Controller) architecture with Django.",
      "Build complex data models using the Django ORM and PostgreSQL (intro).",
      "Develop secure RESTful APIs using Django REST Framework (DRF).",
      "Implement user authentication and authorization from scratch.",
    ],
    pricingPlans: [
      { name: "Standard Access", price: "2500 ETB", features: ["12 Weeks Live Access", "Django Project Boilerplates", "Certificate of Completion"] },
      { name: "Premium Access", price: "3500 ETB", popular: true, features: ["Standard Features", "DRF Advanced Customization", "Deployment and Scaling Advice"] },
    ],
    whyPay: [
      "Deep expertise in the batteries-included approach of the Django framework.",
      "Hands-on practice with the Django ORM and database management (Migrations).",
      "Focus on secure, maintainable code structures preferred by enterprises.",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      week1: [
        { title: "Django Intro & Setup", desc: "What Django is, MVT architecture, and environment setup (Python/Pipenv)." },
        { title: "Project & App Structure", desc: "Understanding the project vs. app organization." },
      ],
      week2: [
        { title: "Models & ORM", desc: "Define data models and connect to PostgreSQL (intro)." },
        { title: "Database Migrations", desc: "Creating and applying schema updates." },
      ],
      week3: [
        { title: "Views, URLs, & Templates", desc: "Writing function/class-based views and using the Django Template Language." },
        { title: "Static Files & Media", desc: "Serving CSS, JS, and user-uploaded media." },
      ],
      week4: [
        { title: "Forms & Validation", desc: "Handling and validating user input with Django Forms." },
        { title: "Authentication System", desc: "Implementing user registration, login, and permissions." },
      ],
      week5: [
        { title: "Django Admin Customization", desc: "Optimizing the built-in admin panel." },
        { title: "DRF Basics", desc: "Introduction to Django REST Framework and Serializers." },
      ],
      week6: [
        { title: "DRF ViewSets & Routers", desc: "Creating powerful, concise REST APIs." },
        { title: "API Permissions & Testing", desc: "Securing endpoints and writing basic DRF tests." },
      ],
      week7: [
        { title: "Advanced ORM", desc: "Complex queries, `select_related`, and performance tuning." },
        { title: "Security Best Practices", desc: "Protecting against CSRF, XSS, and SQL injection." },
      ],
      week8: [
        { title: "Mini Project: Simple Blog API", desc: "Build a complete CRUD API for a blog using DRF." },
        { title: "Refactoring & Clean Code", desc: "Applying Python and Django code standards." },
      ],
      week9: [
        { title: "Deployment Prep (Gunicorn/Nginx)", desc: "Configuring the app for production." },
        { title: "Cloud Deployment", desc: "Deploying to platforms like Render or DigitalOcean." },
      ],
      week10: [
        { title: "Project Building Kick-off", desc: "Final project design, feature definition, and model architecture." },
        { title: "Core CRUD & Authentication", desc: "Implement the primary data access and user systems." },
      ],
      week11: [
        { title: "Project Building: Advanced Features", desc: "Integrate APIs, file uploads, and advanced filtering." },
        { title: "Testing & Debugging", desc: "Writing comprehensive unit and integration tests." },
      ],
      week12: [
        { title: "Final Project Presentation", desc: "Showcase the complete, deployed Django application." },
        { title: "Career Guidance", desc: "Django developer interview and portfolio advice." },
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
      "This 12-week course teaches you how to create dynamic and scalable applications using PHP and Laravel. From routing to authentication and deployment, you’ll gain industry-ready backend skills and build a full-scale web application.",
    instructors: [
      { name: "Chala T.", title: "Lead Backend Developer (Laravel)", image: "/team/chala.jpg" }, // 🧑‍💻 Assigned Chala (PHP Backend)
    ],
    price: "2500 ETB",
    // 🚨 UPDATED: Prerequisites (Backend/PHP Focus)
    prerequisites: [
      "Solid foundation in PHP (syntax, functions, OOP).", 
      "Understanding of relational databases (SQL, joins).",
      "Familiarity with the Model-View-Controller (MVC) concept.",
    ],
    outcomes: [
      "Master the MVC architecture and the Laravel framework.",
      "Use the Eloquent ORM to manage relational databases.",
      "Implement advanced features like queuing, caching, and file storage.",
      "Build a secure, scalable web application ready for production.",
    ],
    pricingPlans: [
      { name: "Standard Access", price: "2500 ETB", features: ["12 Weeks Live Access", "Laravel Project Templates", "Certificate of Completion"] },
      { name: "Premium Access", price: "3500 ETB", popular: true, features: ["Standard Features", "1 hour 1-on-1 Debugging & Security Audit", "Optimization and Scaling Strategy"] },
    ],
    whyPay: [
      "Expert instruction focusing on modern PHP and the latest Laravel features.",
      "Practical experience with Eloquent, Blade templating, and artisan commands.",
      "Emphasis on secure coding and proper use of Laravel's built-in security features.",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      week1: [
        { title: "PHP Intro & Setup", desc: "Learn PHP fundamentals, install PHP/Composer, and set up your environment." },
        { title: "OOP in PHP", desc: "Understand classes, objects, and object-oriented principles." },
      ],
      week2: [
        { title: "Laravel Setup", desc: "Install Laravel, configure environment, and understand the MVC structure." },
        { title: "Routing & Controllers", desc: "Define and handle web and API routes effectively." },
      ],
      week3: [
        { title: "Models & Migrations", desc: "Design database schemas and use migrations." },
        { title: "Eloquent ORM", desc: "Master basic and advanced data retrieval." },
      ],
      week4: [
        { title: "Views & Blade Templating", desc: "Use Laravel’s powerful templating engine." },
        { title: "Static Assets", desc: "Managing CSS, JS, and media files." },
      ],
      week5: [
        { title: "Validation & Forms", desc: "Handling and validating user input safely." },
        { title: "Authentication & Authorization", desc: "Implement user login and permission layers (Gates/Policies)." },
      ],
      week6: [
        { title: "Middleware & Requests", desc: "Customizing the request lifecycle." },
        { title: "APIs with Laravel", desc: "Building RESTful endpoints with API Resources." },
      ],
      week7: [
        { title: "Testing (Unit & Feature)", desc: "Writing and running tests with PHPUnit." },
        { title: "Error Handling & Logging", desc: "Graceful error management and logging." },
      ],
      week8: [
        { title: "Mini Project: Forum Backend", desc: "Build a small application with CRUD, auth, and data relationships." },
        { title: "Artisan Commands", desc: "Mastering the command line tool." },
      ],
      week9: [
        { title: "Optimization & Caching", desc: "Improve performance with database indexing and caching." },
        { title: "Queues & Background Jobs", desc: "Handle long-running tasks asynchronously." },
      ],
      week10: [
        { title: "Project Building Kick-off", desc: "Final project design, feature definition, and deployment goals." },
        { title: "Core Database & Routing", desc: "Implement the primary models, migrations, and routes." },
      ],
      week11: [
        { title: "Project Building: Advanced Features", desc: "Integrate third-party services, file storage, and notifications." },
        { title: "Security & Final Polish", desc: "Final security review and code cleanup." },
      ],
      week12: [
        { title: "Final Project Presentation", desc: "Showcase the complete, deployed Laravel application." },
        { title: "Career Preparation", desc: "Laravel developer interviews and next career steps." },
      ],
    },
  },
  // ☕ NEW COURSE: JAVA FOR BEGINNERS
  {
    id: "java-beginner",
    title: "Java Programming for Beginners",
    image: "/java.png", // Assuming a Java icon image
    maxStudents: 20,
    description:
      "A strong introduction to Java, focusing on core OOP principles and industry-standard practices.",
    fullDescription:
      "This course covers the fundamentals of Java, the most widely used enterprise programming language. You'll master Object-Oriented Programming (OOP) and build small, functional console applications.",
    instructors: [
      { name: "Yamlak N.", title: "Java Instructor", image: "/team/yamlak.jpg" }, // 🧑‍💻 Assigned Yamlak (Java)
    ],
    price: "1000 ETB",
    // 🚨 UPDATED: Prerequisites (Beginner/General)
    prerequisites: [
      "Basic computer literacy (file management, web browser usage).", 
      "A working computer with internet access.",
      "A desire to learn programming and problem-solving.",
    ],
    outcomes: [
      "Master Java syntax, data types, and control flow.",
      "Apply core OOP principles: Encapsulation, Inheritance, Polymorphism.",
      "Handle exceptions and file I/O in Java.",
      "Build a fully functional command-line application.",
    ],
    pricingPlans: [
      // Adjusted to 8 weeks to align with new curriculum scope
      { name: "Standard Access", price: "1000 ETB", features: ["8 Weeks Live Access", "Code Snippets Library", "Certificate of Completion"] },
      { name: "Premium Access", price: "2000 ETB", popular: true, features: ["Standard Features", "1 hour 1-on-1 Debugging", "Advanced Data Structures Intro"] },
    ],
    whyPay: [
      "Clear, structured instruction on a vital enterprise language.",
      "Focus on core OOP concepts critical for interviews.",
      "Hands-on projects to solidify understanding.",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      // 🚨 UPDATED: New 8-Week curriculum structure incorporating image topics
      week1: [
        { title: "Java Environment, Variables & Operators", desc: "Setup JDK/IDE. Introduction, Variables, Data Types, Operators, and Input/Scanners." },
        { title: "Control Flow: Conditionals", desc: "Conditions, Booleans, IF/ELSE, ELSE IF, and Nested Statements." },
      ],
      week2: [
        { title: "Control Flow: Loops & Arrays", desc: "For Loops, While Loops, and basic Array handling." },
        { title: "Collections I: Lists and Sets", desc: "Introduction to Collections, Sets and Lists." },
      ],
      week3: [
        { title: "Collections II: Maps & HashMaps", desc: "In-depth work with Maps, HashMaps, and examples." },
        { title: "Introduction to Objects", desc: "Creating Classes, objects, and the 'new' keyword." },
      ],
      week4: [
        { title: "Core OOP: Classes & Encapsulation", desc: "Creating Classes, defining methods, and access modifiers. Inheritance." },
        { title: "Inheritance & Static Keyword", desc: "Extending classes, the 'super' keyword, and static members." },
      ],
      week5: [
        { title: "Advanced OOP: Interfaces, Enums, & Inner Classes", desc: "Abstract classes, Interfaces, Enum types, and Inner Classes." },
        { title: "Polymorphism & Overloading", desc: "Method Overloading and dynamic method dispatch." },
      ],
      week6: [
        { title: "Exception Handling", desc: "Try-catch-finally blocks and custom exceptions." },
        { title: "File Input/Output (I/O)", desc: "Reading from and writing to files." },
      ],
      week7: [
        { title: "Mini Project: Calculator App", desc: "Build a fully functional command-line calculator app." }, // 🚨 MINI PROJECT UPDATED
        { title: "Code Review & Refactoring", desc: "Reviewing project structure and applying best practices." },
      ],
      week8: [
        { title: "Final Project Presentation", desc: "Showcase the Calculator and handle Q&A." },
        { title: "Testing & Debugging Basics", desc: "Using the IDE debugger and writing basic JUnit tests." },
      ],
    },
  },

  // 🐍 NEW COURSE: PYTHON FOR DATA & SCRAPING
  {
    id: "python-data",
    title: "Python for Data Analysis & Web Scraping",
    image: "/python.png", // Assuming a Python icon image
    maxStudents: 20,
    description:
      "Master Python fundamentals and use it for essential Data Analysis and Web Scraping tasks.",
    fullDescription:
      "Beyond development, Python is the language of data. This course focuses on practical skills: cleaning, analyzing, and visualizing data using key libraries (Pandas/Matplotlib) and collecting data from the web (Beautiful Soup/Scrapy).",
    instructors: [
      { name: "Yamlak N.", title: "Data Analyst & Python Instructor", image: "/team/yamlak.jpg" }, // 🧑‍💻 Assigned Yamlak (Python/Data Analyst)
    ],
    price: "2500 ETB",
    // 🚨 UPDATED: Prerequisites (Beginner/General)
    prerequisites: [
      "Basic computer literacy (file management, web browser usage).", 
      "Familiarity with spreadsheet software (Excel, Google Sheets) is helpful.",
      "Foundational algebra and logic skills.",
    ],
    outcomes: [
      "Master Python syntax, functions, and data structures.",
      "Use Pandas to manipulate, clean, and analyze datasets.",
      "Create visualizations using Matplotlib and Seaborn.",
      "Collect data from websites using Beautiful Soup and Requests.",
    ],
    pricingPlans: [
      { name: "Standard Access", price: "2500 ETB", features: ["12 Weeks Live Access", "Data Lab Worksheets", "Certificate of Completion"] },
      { name: "Premium Access", price: "3500 ETB", popular: true, features: ["Standard Features", "Advanced Visualization Workshop", "Portfolio Review & Job Search Advice"] },
    ],
    whyPay: [
      "Practical, job-focused skills in Python’s most valuable domains.",
      "Direct practice with industry-standard libraries (Pandas, Matplotlib).",
      "Guidance on building a data-focused portfolio project.",
      "Small class sizes for personalized feedback and engagement.",
    ],
    modules: {
      week1: [
        { title: "Python Setup & Basics", desc: "Install Python/IDE. Variables, operators, and basic I/O." },
        { title: "Data Structures", desc: "Mastering Lists, Dictionaries, Tuples, and Sets." },
      ],
      week2: [
        { title: "Control Flow & Functions", desc: "Conditionals, Loops, and writing reusable functions." },
        { title: "File Handling & Modules", desc: "Reading/writing CSVs and using standard library modules." },
      ],
      week3: [
        { title: "Intro to Pandas", desc: "Loading data into DataFrames, selection, and indexing." },
        { title: "Data Cleaning", desc: "Handling missing values, duplicates, and data transformation." },
      ],
      week4: [
        { title: "Data Aggregation", desc: "Using `groupby`, pivoting, and merging DataFrames." },
        { title: "Visualization with Matplotlib", desc: "Creating basic plots: bar charts, line graphs, and histograms." },
      ],
      week5: [
        { title: "Web Scraping: Requests & HTML", desc: "Understanding HTTP, web structure, and fetching pages." },
        { title: "Beautiful Soup", desc: "Parsing HTML and extracting specific data elements." },
      ],
      week6: [
        { title: "Advanced Scraping & Data Storage", desc: "Handling pagination and storing scraped data in a database/file." },
        { title: "Mini Project: Stock Data Analysis", desc: "Complete a project involving fetching and visualizing financial data." },
      ],
    },
  },
];