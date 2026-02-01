
"use client"

import { getOwnProfile } from "@/actions/tutor.action";
import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ViewProfile() {
  const [user, setUser] = useState<any>(null);

  
  useEffect(() => {
  const fetchUser = async () => {
    const data = await getOwnProfile();
    console.log(data);
    setUser(data?.data);
    
  };

  fetchUser();
}, []);

  if (!user) {
    return <div className="p-8 text-center">Loading profile...</div>;
  }

  const { tutorProfile } = user;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      {/* Header Section */}
      <div className="flex items-center space-x-6 border-b pb-6">
        <img
          src={tutorProfile?.profileImage || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-blue-600 font-medium">{user.role} • {tutorProfile?.majorSubject}</p>
          <p className="text-gray-500">{user.email}</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'unban' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {user.status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          {tutorProfile?.bio || "No bio available."}
        </p>
      </div>

      <hr className="my-6" />

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h3 className="text-gray-400 uppercase text-sm tracking-wider font-bold mb-3">Academic & Experience</h3>
          <ul className="space-y-2">
            <li><span className="font-semibold">University:</span> {tutorProfile?.university}</li>
            <li><span className="font-semibold">Qualification:</span> {tutorProfile?.qualification}</li>
            <li><span className="font-semibold">Experience:</span> {tutorProfile?.experience} Years</li>
            <li><span className="font-semibold">Languages:</span> {tutorProfile?.languages.join(', ')}</li>
          </ul>
        </section>

        <section>
          <h3 className="text-gray-400 uppercase text-sm tracking-wider font-bold mb-3">Teaching Details</h3>
          <ul className="space-y-2">
            <li><span className="font-semibold">Teaching Mode:</span> {tutorProfile?.teachingMode}</li>
            <li><span className="font-semibold">Monthly Rate:</span> ${tutorProfile?.monthlyRate}</li>
            <li>
              <span className="font-semibold">Availability:</span> 
              <span className={tutorProfile?.availability ? "text-green-600 ml-1" : "text-red-600 ml-1"}>
                {tutorProfile?.availability ? "Available" : "Busy"}
              </span>
            </li>
            <li><span className="font-semibold">Nationality:</span> {tutorProfile?.nationality}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

