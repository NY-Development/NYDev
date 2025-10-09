import TestimonialCard from "../components/TestimonialCard"; // Ensure this path is correct

const testimonials = [
  { 
    id: 1, 
    name: "Client A", 
    title: "Startup Founder",
    feedback: "NY Development transformed our business with their amazing app! They delivered on time and exceeded our expectations for quality and performance.",
    avatar: "/avatars/avatar-1.jpg" 
  },
  { 
    id: 2, 
    name: "Client B", 
    title: "Marketing Director",
    feedback: "Professional team and top-notch services. Their communication and iterative development process were seamless and highly effective.",
    avatar: "/avatars/avatar-2.jpg" 
  },
  { 
    id: 3, 
    name: "Client C", 
    title: "Product Manager",
    feedback: "Great experience working with NY Dev. The team is highly creative, technical, and always went the extra mile. Highly recommended.",
    avatar: "/avatars/avatar-3.jpg" 
  },
  { 
    id: 4, 
    name: "Client D", 
    title: "Small Business Owner",
    feedback: "The website they built for us is simply stunning and incredibly functional. It has significantly boosted our online presence.",
    avatar: "/avatars/avatar-4.jpg" 
  },
  { 
    id: 5, 
    name: "Client E", 
    title: "Project Lead",
    feedback: "Exceptional talent and dedication! NYDev helped us launch our mobile app ahead of schedule with fantastic results.",
    avatar: "/avatars/avatar-5.jpg" 
  },
  { 
    id: 6, 
    name: "Client F", 
    title: "CTO of a Tech Company",
    feedback: "Their expertise in Next.js and backend development is unparalleled. A truly reliable and innovative partner.",
    // Corrected Path: All images in the `public` directory must be referenced from the root (`/`)
    avatar: "/project2.png" 
  },
];

export default function Feedback() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10" aria-labelledby="testimonial-heading">
      
      {/* Enhanced typography with a subtle separator and tracking */}
      <div className="text-center mb-16">
        <h1 
          id="testimonial-heading" 
          className="text-5xl font-extrabold tracking-tight 
                     text-gray-900 dark:text-gray-100 mb-4"
        >
          What Our Clients Say
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Trusted by businesses across all industries. Hear directly from those we've helped succeed.
        </p>
      </div>

      {/* Improved grid layout: more columns on larger screens, better gap */}
      <div 
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-10"
        role="feed" 
        aria-label="Client Testimonials"
      >
        {testimonials.map((t) => (
          <TestimonialCard 
            key={t.id} 
            {...t} 
          />
        ))}
      </div>
    </section>
  );
}