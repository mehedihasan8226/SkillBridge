import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white min-h-screen  py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
            <img 
              src="/turo-helpinga-student.webp" 
              alt="Tutor helping a student" 
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl hidden md:block">
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm">Active Students</p>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h4 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Our Mission
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Empowering Minds Through <span className="text-blue-600">Personalized</span> Learning.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe that every student has a unique rhythm of learning. Our platform connects 
            passionate educators with curious learners to bridge the gap between "getting by" 
            and truly "getting it."
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-3">
              <span className="bg-green-100 text-green-600 p-1 rounded-full">✓</span>
              <span className="text-gray-700 font-medium">Expert-Vetted Tutors</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-green-100 text-green-600 p-1 rounded-full">✓</span>
              <span className="text-gray-700 font-medium">Flexible Scheduling</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-green-100 text-green-600 p-1 rounded-full">✓</span>
              <span className="text-gray-700 font-medium">1-on-1 Focused Sessions</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-green-100 text-green-600 p-1 rounded-full">✓</span>
              <span className="text-gray-700 font-medium">Affordable Hourly Rates</span>
            </div>
          </div>

          <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;