import TestimonialCard from "../components/TestimonialCard"; // Ensure this path is correct

const testimonials = [
  { 
    id: 1, 
    name: "Selamawit T.", 
    title: "Doctor",
    feedback: "NY Development transformed our business with their amazing app! They delivered on time and exceeded our expectations for quality and performance.",
    avatar: "/feedback/selam.jpg" 
  },
  { 
    id: 2, 
    name: "Sana M.", 
    title: "React Developer",
    feedback: "The team's iterative development process was seamless and highly effective. Excellent communication and truly top-notch professional service.",
    avatar: "/feedback/sana.jpg" 
  },
  { 
    id: 3, 
    name: "Kidist Z.", 
    title: "Product Manager",
    feedback: "Great experience working with NY Dev. The team is highly creative, technical, and always went the extra mile to achieve the final vision. Highly recommended.",
    avatar: "/feedback/kidist.jpg" 
  },
  { 
    id: 4, 
    name: "Chala T.", 
    title: "Backend Developer",
    feedback: "Their deep technical expertise was evident from day one. They handled complex backend challenges with ease and delivered robust, clean code.",
    avatar: "/feedback/chala.jpg" 
  },
  { 
    id: 5, 
    name: "Besukal G.", 
    title: "UI/UX Designer",
    feedback: "The design execution was flawless. They seamlessly translated our wireframes and prototypes into a beautiful, highly intuitive user experience. Truly impressed with the final look.",
    avatar: "/feedback/besukal.jpg" 
  },
  { 
    id: 6, 
    name: "Samuel T.", 
    title: "Economist in Italy",
    feedback: "What impressed me most was the long-term viability of the solution. They built a platform that is highly scalable and ensures a strong return on investment (ROI) for our future growth.",
    avatar: "/feedback/samuel.jpg"
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
          {`Trusted by businesses across all industries. Hear directly from those we've helped succeed.`}
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