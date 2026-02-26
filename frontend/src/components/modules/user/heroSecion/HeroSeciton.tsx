import React from 'react';
import { Search, Star, Users, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative  bg-white overflow-hidden mt-96">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 lg:flex lg:items-center lg:gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium">
            <Star size={16} className="fill-blue-600" />
            <span>Trusted by 5,000+ students worldwide</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Master Any Subject with <span className="text-blue-600 underline decoration-blue-200">Expert</span> 1-on-1 Tutors.
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Personalized lessons tailored to your goals. Whether it's Calculus, Coding, or Creative Writing, we've got the perfect mentor for you.
          </p>

          {/* Search/Action Box */}
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white border border-gray-200 shadow-xl rounded-2xl max-w-xl">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="What do you want to learn?" 
                className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none text-gray-700"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-200">
              Find a Tutor
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <CheckCircle size={18} className="text-green-500" />
              <span>Free 1st Lesson</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <CheckCircle size={18} className="text-green-500" />
              <span>Money-back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Content: Visual Elements */}
     {/* Right Content: Visual Elements */}
{/* Changed 'hidden lg:block' to 'hidden md:block' so it shows on tablets too */}
<div className="hidden md:block w-full lg:w-1/2 relative mt-12 lg:mt-0">
  <div className="relative z-10">
    <img 
      /* 1. Double check this name in your /public folder! */
      src="/trusted.jpg" 
      alt="Student learning" 
      /* 2. Added min-height and a background color so you can see the box even if image fails */
      className="rounded-[2rem] shadow-2xl border-8 border-white object-cover w-full h-[500px] bg-gray-100"
    
    />
    
    {/* Floating Card 1 */}
    {/* Removed 'animate-bounce-slow' just in case it's causing a crash */}
    <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
      <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
        <Users size={24} />
      </div>
      <div>
        <p className="font-bold text-gray-900">4.9/5 Rating</p>
        <p className="text-xs text-gray-500">From 1k+ Reviews</p>
      </div>
    </div>

    {/* Floating Card 2 */}
    <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-green-500">
      <p className="text-sm font-semibold text-gray-800">Next Lesson Starts In:</p>
      <p className="text-xl font-mono font-bold text-blue-600">00:45:12</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default HeroSection;