

import AboutUs from "@/components/modules/user/about/AboutUs";
import HeroSection from "@/components/modules/user/heroSecion/HeroSeciton";
import HowItWorks from "@/components/modules/user/howWork/HowItWorks";
import { tutorService } from "@/services/tutor.service";
import { Tutor } from "@/types";
import Link from "next/link";

export default async function TutorList() {
  const featuredPosts = await tutorService.getTutorPosts();
  

  const tutors = featuredPosts?.data?.data || [];

  return (
      <>

  

    <div className="max-w-7xl h-auto mx-auto px-4 mb-8">
    
      <div className="mb-12 mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {tutors.map((tutor: any) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>

   </>
  );
}

type TutorCardProps = {
  tutor: Tutor;
};

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
 <>

   
    <div className="bg-gray-700 dark:bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 w-full flex flex-col justify-between">
           
      <div>
        {/* Top Section */}
        <div className="flex items-center gap-4">
          <img
            src={
              tutor.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              
            }
            alt="profile"
            className="w-16 h-16 rounded-full object-cover border flex-shrink-0"
          />

          <div>
            <h3 className="text-lg font-semibold dark:text-gray-600 text-gray-200 line-clamp-1">
              {tutor.majorSubject} Tutor
            </h3>
            <p className="text-sm dark:text-gray-500 text-gray-400 line-clamp-1">
              {tutor.university}
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-4 space-y-2 text-sm dark:text-gray-600 text-gray-200">
          <p>
            <span className="font-semibold">Qualification:</span>{" "}
            {tutor.qualification}
          </p>
          <p>
            <span className="font-semibold">Experience:</span>{" "}
            {tutor.experience} years
          </p>
          <p>
            <span className="font-semibold">Mode:</span>{" "}
            {tutor.teachingMode}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-5 flex items-center justify-between gap-2">
        <p className="text-base font-bold dark:text-indigo-600 text-indigo-400 whitespace-nowrap">
          ৳ {tutor.monthlyRate}
        </p>

        <Link
          href={`/${tutor.id}`}
          className="px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center"
        >
          View Profile
        </Link>
      </div>
    </div>

    </>
    
  );
};