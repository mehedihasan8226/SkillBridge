'use client'


import { getOwnProfile } from "@/actions/tutor.action";
import { Role } from "@/constants/role";
import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfileCard() {
  const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await fetch("http://localhost:5000/user/me", {
  //       credentials: "include",
  //       cache: "no-store",
  //     });

  //     const data = await res.json();
  //     setUser(data?.data);
  //   };

  //   fetchUser();
  // }, []);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await getOwnProfile()

  //     const data = await res.json();
  //     setUser(data?.data);
  //   };

  //   fetchUser();
  // }, []);
  
  useEffect(() => {
  const fetchUser = async () => {
    const data = await getOwnProfile();
    console.log("user:",data);
    setUser(data?.data);
    
  };

  fetchUser();
}, []);

console.log(user);


  // Guard
  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-sm w-full rounded-2xl border border-gray-200 dark:border-gray-700 
                      bg-white dark:bg-gray-800 shadow-sm p-6">

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative h-24 w-24 rounded-full overflow-hidden border 
                          border-gray-200 dark:border-gray-600">
            <Image
              src={user?.image || "/avatar.png"}
              alt={user?.name || "User avatar"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {user?.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {user?.email}
          </p>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-2 mt-3">
          <span className="px-3 py-1 text-xs rounded-full 
                           bg-blue-100 text-blue-600 
                           dark:bg-blue-900 dark:text-blue-300">
            {user?.role}
          </span>

          <span
            className={`px-3 py-1 text-xs rounded-full ${
              user?.status === "unban"
                ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
            }`}
          >
            {user?.status}
          </span>

          {user?.emailVerified && (
            <span className="px-3 py-1 text-xs rounded-full 
                             bg-purple-100 text-purple-600 
                             dark:bg-purple-900 dark:text-purple-300">
              Verified
            </span>
          )}
        </div>

        {/* Actions */}
        {
          user.role !=Role.student && (

                   <div className="mt-5 flex gap-2">
          <Link href="/viewprofile" 
          className=" rounded-lg mx-auto
                             bg-black text-white 
                             dark:bg-white dark:text-black
                             py-2 px-5 text-sm hover:opacity-90"
                             
                             >
            View Profile
          </Link>
          </div>
          )
        }
        
   
        </div>
      </div>

  );
}
