import React from 'react';
import { Search, Calendar, Video, GraduationCap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Find Your Expert",
      description: "Browse thousands of certified tutors based on subject, price, and reviews.",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      id: 2,
      title: "Schedule a Session",
      description: "Pick a time that works for you. Our automated system handles the time zones.",
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      id: 3,
      title: "Join the Classroom",
      description: "Log in to our interactive virtual space with video, whiteboard, and chat.",
      icon: <Video className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Learning Journey in Minutes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We’ve simplified the tutoring process so you can focus on what matters most: achieving your academic goals.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              {/* Icon Circle */}
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {step.icon}
              </div>
              
              {/* Step Number Badge */}
              <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                STEP {step.id}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            Get Started Today <GraduationCap size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;