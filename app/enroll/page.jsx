"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { DollarSign, Loader2, BookOpenCheck, University, Phone, User, Clock, Briefcase, Mail, CalendarCheck, MapPin, ListOrdered, ChevronDown } from "lucide-react";

// Assuming this path is correct based on your previous components
import { courses } from '../data/courseData'; 

export default function EnrollPage() {
  const params = useParams();
  const courseId = params?.id; 

  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    id: courseId || "", 
    courseTitle: "",
    amount: 0, 
    priceDisplay: "0 ETB",
    age: "",
    phoneNumber: "",
    universityYear: "",
    universityName: "",
    department: "",
    level: "beginner" 
  });
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Helper function to update course details in state
  const updateCourseDetails = (course) => {
    if (!course) return;

    const priceString = course.price || "0 ETB";
    const priceMatch = priceString.match(/(\d+)/); 
    const amountValue = priceMatch ? parseInt(priceMatch[1], 10) : 0;

    setForm(prevForm => ({
        ...prevForm,
        id: course.id,
        courseTitle: course.title,
        amount: amountValue,
        priceDisplay: priceString,
    }));
    setSelectedCourse(course);
  };

  // 1. Fetch course details from data based on URL param on initial load
  useEffect(() => {
    if (courseId) {
      const foundCourse = courses?.find((c) => c.id === courseId);
      
      if (foundCourse) {
        updateCourseDetails(foundCourse);
      }
    }
  }, [courseId]); 

  // Handle form changes for all fields, including the new course selector
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (name === 'courseIdSelector') {
      const course = courses.find(c => c.id === value);
      updateCourseDetails(course);
    } else {
        setForm({ 
            ...form, 
            [name]: type === 'radio' ? value : value 
        });
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.id || form.amount === 0) {
      alert("Please ensure a valid course is selected before proceeding.");
      return;
    }
    setLoading(true);

    const dataToSend = {
        name: form.name,
        email: form.email,
        courseId: form.id, 
        amount: form.amount,
        age: form.age,
        phoneNumber: form.phoneNumber,
        universityYear: form.universityYear,
        universityName: form.universityName,
        department: form.department,
        level: form.level
    };

    try {
        const res = await fetch("/api/enroll", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        });

        const data = await res.json();
        if (data.checkout_url) {
            window.location.href = data.checkout_url;
        } else {
            alert(data.message || "Enrollment failed. Please try again.");
        }
    } catch (error) {
        alert("A network error occurred.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-100 my-10">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-2">
          Secure Enrollment
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Complete the form below to register and proceed to payment.
        </p>

        {/* Course Confirmation Card */}
        <div className={`p-5 rounded-xl mb-6 transition-all duration-300 ${selectedCourse ? 'bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-700' : 'bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-700'}`}>
            <h3 className="text-xl font-bold flex items-center text-indigo-700 dark:text-indigo-300 mb-1">
                <BookOpenCheck className="w-6 h-6 mr-3 flex-shrink-0" />
                Course Selected:
            </h3>
            {selectedCourse ? (
                <>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-9">
                        {selectedCourse.title}
                    </p>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-indigo-200 dark:border-indigo-700/50 ml-9">
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            Enrollment Fee:
                        </span>
                        <span className="text-xl font-extrabold text-green-600 dark:text-green-400 flex items-center">
                            <DollarSign className="w-5 h-5 mr-1" />
                            {form.priceDisplay}
                        </span>
                    </div>
                </>
            ) : (
                <p className="text-red-700 dark:text-red-300 ml-9">
                    Error: Course not found. Please select a course below.
                </p>
            )}
        </div>

        {/* Enrollment Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Fallback Course Selector / Pre-filled Course Display */}
            <div className="pt-3 pb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center mb-3">
                    <ListOrdered className="w-5 h-5 mr-2 text-indigo-500" /> Choose Your Course
                </h3>
                {selectedCourse ? (
                    // Display pre-filled course if successful (like before)
                    <input
                        type="text"
                        readOnly
                        disabled
                        value={form.courseTitle}
                        className="w-full border-2 border-dashed border-indigo-400 dark:border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-semibold rounded-xl px-5 py-3.5 opacity-80 cursor-not-allowed shadow-inner"
                    />
                ) : (
                    // Fallback select dropdown if course ID is missing or invalid
                    <div className="relative">
                        <ListOrdered className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                        <select
                            name="courseIdSelector"
                            value={form.id || ""}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl pl-12 pr-5 py-3.5 appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
                        >
                            <option value="" disabled>Select a Course from the list</option>
                            {courses.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.title} - {c.price}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                    </div>
                )}
            </div>
            
            {/* Input Group: Name and Email */}
            <div className="space-y-5">
                <InputWithIcon type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} Icon={User} required />
                <InputWithIcon type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} Icon={Mail} required />
                <InputWithIcon type="tel" name="phoneNumber" placeholder="Phone Number (e.g., +251 9...)" value={form.phoneNumber} onChange={handleChange} Icon={Phone} required />
                <div className="flex space-x-4">
                    <InputWithIcon 
                        type="number" 
                        name="age" 
                        placeholder="Age" 
                        value={form.age} 
                        onChange={handleChange} 
                        Icon={Clock} 
                        min="16" 
                        max="99" 
                        required 
                        className="w-1/3"
                    />
                    <InputWithIcon 
                        type="number" 
                        name="universityYear" 
                        placeholder="Current University Year" 
                        value={form.universityYear} 
                        onChange={handleChange} 
                        Icon={CalendarCheck} 
                        min="1" 
                        max="6" 
                        required 
                        className="w-2/3"
                    />
                </div>
            </div>

            {/* University Details Group */}
            <div className="space-y-5 pt-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center mb-1">
                    <University className="w-5 h-5 mr-2 text-indigo-500" /> Academic Information
                </h3>
                <InputWithIcon type="text" name="universityName" placeholder="University Name" value={form.universityName} onChange={handleChange} Icon={MapPin} required />
                <InputWithIcon type="text" name="department" placeholder="Department (e.g., Computer Science)" value={form.department} onChange={handleChange} Icon={Briefcase} required />
            </div>

            {/* Skill Level Radio Buttons */}
            <div className="pt-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center mb-3">
                    <Briefcase className="w-5 h-5 mr-2 text-indigo-500" /> Your Current Level
                </h3>
                <div className="flex space-x-6">
                    {['beginner', 'intermediate'].map((levelOption) => (
                        <label 
                            key={levelOption}
                            className={`flex items-center p-3 rounded-lg border cursor-pointer w-1/2 transition-all ${
                                form.level === levelOption 
                                ? 'bg-indigo-100 dark:bg-indigo-900 border-indigo-500 ring-2 ring-indigo-500'
                                : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 hover:border-indigo-400'
                            }`}
                        >
                            <input
                                type="radio"
                                name="level"
                                value={levelOption}
                                checked={form.level === levelOption}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            />
                            <span className={`ml-3 font-medium capitalize ${form.level === levelOption ? 'text-indigo-800 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'}`}>
                                {levelOption}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading || !selectedCourse || form.amount === 0} 
                className="w-full flex items-center justify-center bg-indigo-600 text-white text-lg font-bold px-8 py-3.5 rounded-xl shadow-xl hover:bg-indigo-700 transition-all transform active:scale-[0.99] disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:shadow-none mt-8 cursor-pointer"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Redirecting to Payment...
                    </>
                ) : (
                    `Proceed to Pay ${form.priceDisplay}`
                )}
            </button>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 pt-2">
                By clicking "Proceed to Pay," you agree to our terms and conditions.
            </p>
        </form>
      </div>
    </div>
  );
}

// Reusable Input component
const InputWithIcon = ({ Icon, className = "", ...props }) => (
    <div className={`relative ${className}`}>
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
        <input
            {...props}
            className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl pl-12 pr-5 py-3.5 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
        />
    </div>
);