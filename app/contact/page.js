"use client";
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactDetail from '../components/ContactDetail';
import FormGroup from '../components/FormGroup';

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6 sm:px-10" aria-labelledby="contact-heading">
      
      <div className="text-center mb-16">
        <h1 
          id="contact-heading" 
          className="text-5xl font-extrabold tracking-tight 
                     text-gray-900 dark:text-gray-100 mb-4"
        >
          {`Let's Build Something Great `}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {`We're ready to discuss your project requirements. Fill out the form below or reach us directly.`}
        </p>
      </div>

      {/* Two-Column Layout (Details and Form) */}
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Contact Details Column */}
        <div className="space-y-8 p-6 md:p-0">
          <ContactDetail 
            Icon={Mail} 
            title="Email Us" 
            text="yamlaknegash96@gmail.com" 
            link="mailto:yamlaknegash96@gmail.com"
          />
          <ContactDetail 
            Icon={Phone} 
            title="Call Us" 
            text="+251973626204" 
            link="tel:+251973626204" // Updated to match the phone number
          />
          <ContactDetail 
            Icon={MapPin} 
            title="Visit Our Office" 
            text="Arada Subcity, King James Street, Addis Ababa, Ethiopia" 
            link="https://maps.app.goo.gl/WhGJK4YLPmKERjDj6" // Replace with a map link if available
          />
        </div>

        {/* Contact Form Column */}
        <form className="space-y-6 p-8 rounded-2xl 
                        dark:bg-gray-850 
                         shadow-2xl shadow-gray-200/50 dark:shadow-indigo-900/10"
        >
          {/* Name Field */}
          <FormGroup label="Your Name" id="name">
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              placeholder="e.g., Jane Doe"
            />
          </FormGroup>

          {/* Email Field */}
          <FormGroup label="Your Business Email" id="email">
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              placeholder="e.g., jane@company.com"
            />
          </FormGroup>

          {/* Message Field */}
          <FormGroup label="Project Details" id="message">
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required
              placeholder="Tell us about your project, budget, and timeline..."
            ></textarea>
          </FormGroup>

          {/* Submit Button */}
          <button 
            type="submit"
            className="cursor-pointer w-full px-6 py-3 text-lg font-semibold 
                       bg-indigo-600 text-white 
                       rounded-xl shadow-lg hover:bg-indigo-700 
                       focus:ring-4 focus:ring-indigo-300 
                       transition-all duration-300"
          >
            Send Project Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}