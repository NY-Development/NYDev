import { Award, Zap, Users } from 'lucide-react'; // Icons for values
import Image from 'next/image';

export default function About() {
  return (
    // Use section for better semantics and generous padding
    <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10" aria-labelledby="about-heading">
      
      {/* 1. Hero / Mission Statement Section */}
      <div className="text-center mb-16">
        <h1 
          id="about-heading" 
          className="text-5xl font-extrabold tracking-tight 
                     text-gray-900 dark:text-gray-100 mb-4"
        >
          Your Digital Innovation Partner
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          NY Development is a forward-thinking software company specializing in creating **modern, scalable web and mobile applications** for businesses ready to dominate their digital landscape.
        </p>
      </div>

      {/* 2. Expanded Content: Our Story & Vision */}
      <div className="grid md:grid-cols-2 gap-12 pt-12">
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            Our Story & Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Founded with a passion for clean code and user-centric design, NYDev started with a simple goal: to close the gap between business ideas and cutting-edge technology. We believe the right digital tool can transform any company, regardless of size or industry.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our mission is to empower businesses with efficient, performant, and reliable digital solutions built primarily on the Next.js ecosystem, ensuring future-proof scalability.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            To be the leading development firm known for blending technical excellence with transparent, collaborative partnerships. We aim to set the standard for digital development quality in the NYC tech scene and beyond.
          </p>
          <Image 
            width={700}
            height={10}
            src="/team.jpg" 
            alt="NYDev Team working collaboratively" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
      
      {/* 3. Core Values Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard 
            Icon={Zap} 
            title="Innovation" 
            desc="We constantly explore and adopt the latest technologies to deliver cutting-edge products." 
          />
          <ValueCard 
            Icon={Award} 
            title="Excellence" 
            desc="We commit to the highest quality standards in every line of code, design, and deployment." 
          />
          <ValueCard 
            Icon={Users} 
            title="Collaboration" 
            desc="Success is built on trust and communication. We work as a unified extension of your team." 
          />
        </div>
      </div>
    </section>
  );
}

// Helper Component for Reusability
const ValueCard = ({ Icon, title, desc }) => (
    <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 text-center space-y-4 hover:shadow-lg transition">
        <div className="flex justify-center">
            <Icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400"/>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
);