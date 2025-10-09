import ProjectCard from "../components/ProjectCard";

// Enhanced project data with stable IDs and richer content
const projects = [
  { 
    id: 1, 
    title: "E-Commerce Platform", 
    desc: "A scalable, high-performance online shop built with Next.js and integrated with Stripe for secure payment processing.", 
    image: "/project1.jpg",
    link: "/projects/ecommerce", // Use specific links
    techTags: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  { 
    id: 2, 
    title: "Bed Notification System | BNS", 
    desc: "A custom real-time system for hospital administration, providing complete bed assignment and patient flow management.", 
    image: "/project2.png",
    link: "/projects/bns-system",
    techTags: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  { 
    id: 3, 
    title: "JobsPark Platform", 
    desc: "A comprehensive job posting and hiring web application featuring advanced filtering and candidate matching algorithms.", 
    image: "/project3.png",
    link: "/projects/jobspark",
    techTags: ["Next.js", "GraphQL", "PostgreSQL"],
  },
  { 
    id: 4, 
    title: "Enterprise CRM Dashboard", 
    desc: "A private, secure, and customizable Customer Relationship Management dashboard for internal operations.", 
    image: "/project4.jpg",
    link: "/projects/crm-dashboard",
    techTags: ["React", "Redux", "Material UI"],
  },
];

export default function Projects() {
  return (
    // Changed div to section and improved vertical padding
    <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10" aria-labelledby="projects-heading">
      
      {/* Enhanced typography for the heading */}
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

      {/* Improved grid layout: 3 columns on desktop, better gap */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {/* Use the stable 'id' for the key */}
        {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
      </div>
      
    </section>
  );
}