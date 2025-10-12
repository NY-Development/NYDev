import ProjectCard from "../components/ProjectCard";

const projects = [
  { 
    id: 1, 
    title: "Procedure Notifier", 
    desc: "A healthcare workflow notifier that ensures timely alerts for procedures, improving efficiency and patient care.", 
    image: "/procedure.jpg",
    link: "https://pn-jet.vercel.app",
    techTags: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    status: true,
  },
  { 
    id: 2, 
    title: "Bed Notification System | BNS", 
    desc: "A custom real-time system for hospital administration, providing complete bed assignment and patient flow management.", 
    image: "/project2.png",
    link: "https://bnst-beta.vercel.app",
    techTags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    status: true,
  },
  { 
    id: 3, 
    title: "JobsPark Platform", 
    desc: "A comprehensive job posting and hiring web application featuring advanced filtering and candidate matching algorithms.", 
    image: "/project3.png",
    link: "https://js-kk9h.onrender.com",
    techTags: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
    status: true,
  },
  { 
    id: 4, 
    title: "Adama Bakery & Cake", 
    desc: "A modern bakery website showcasing products, online orders, and delivery tracking for customers.", 
    image: "/abc.jpg",
    link: "https://abc.vercel.app",
    techTags: ["Next.js", "Tailwind CSS", "Stripe", "React"],
    status: false,
  },
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10" aria-labelledby="projects-heading">
      
      <div className="text-center mb-16">
        <h1 
          id="projects-heading" 
          className="text-5xl font-extrabold tracking-tight 
                     text-gray-900 dark:text-gray-100 mb-4"
        >
          Our Portfolio of Work
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Showcasing a range of applications and enterprise systems built for speed and scalability.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
      </div>
      
    </section>
  );
}
