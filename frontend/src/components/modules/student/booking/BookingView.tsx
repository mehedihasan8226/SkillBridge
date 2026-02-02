'use client'


import { getbookingbyuserid } from "@/actions/student.action";
import { Role } from "@/constants/role";
import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookingView() {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
  const fetchUser = async () => {
    const data = await getbookingbyuserid();
    console.log(data);
    // setBooking(data?.data?.data[0]);
    setBooking(data?.data?.data);
    
  };

  fetchUser();
}, []);



  // Guard
  if (!booking) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
        Loading reviews...
      </div>
    );
  }


  return (
 


    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 p-6 flex justify-center">
  <div className="max-w-md w-full flex flex-col gap-4">
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">My Sessions</h1>
    
    {booking?.map((book: any, index: number) => (
      <div 
        key={index}
        className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
      >
        {/* Header: University & Status */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {book?.tutor?.university || "University"}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
              Tutor Session
            </h3>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">
            Confirmed
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Time Slot</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {book?.tutorAvailability?.startTime} - {book?.tutorAvailability?.endTime}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Rate</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              ${book?.tutor?.monthlyRate}/mo
            </p>
          </div>
        </div>

        {/* Quick Action (Optional) */}
        <button className="w-full mt-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity">
          View Details
        </button>
      </div>
    ))}
  </div>
</div>

  );
}
