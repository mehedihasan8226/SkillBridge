'use client'


import { getbookingbyuserid } from "@/actions/tutor.action";
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
    setBooking(data?.data?.data[0]);
    
  };

  fetchUser();
}, []);


// console.log("booking: ", booking.reviews);

    // const { user, } = booking;


  // Guard
  // if (!reviews) {
  //   return (
  //     <div className="h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
  //       Loading reviews...
  //     </div>
  //   );
  // }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-sm w-full rounded-2xl border border-gray-200 dark:border-gray-700 
                      bg-white dark:bg-gray-800 shadow-sm p-6">

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative h-24 w-24 rounded-full overflow-hidden border 
                          border-gray-200 dark:border-gray-600">
            <Image
              src={booking?.user?.image || "/avatar.png"}
              alt={booking?.user?.name || "User avatar"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {booking?.user?.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {booking?.user?.email}
          </p>
        </div>

        {
         booking?.reviews?.map((review: any)=>{
             console.log("review: ", review.rating);
             
         return(
           <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Rating: {review?.rating}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Comment: {review?.comment}
          </p>
        </div>
         )

          })
        }

     

        

       
      
   
        </div>
      </div>

    // <h1>Hellow</h1>

  );
}
