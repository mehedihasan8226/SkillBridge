

// import AboutUs from "@/components/modules/user/about/AboutUs";
// import HeroSection from "@/components/modules/user/heroSecion/HeroSeciton";
// import HowItWorks from "@/components/modules/user/howWork/HowItWorks";
// import TutorList from "@/components/modules/user/tutorList/TutorList";

import AboutUs from "@/components/modules/user/about/AboutUs";
import HeroSection from "@/components/modules/user/heroSecion/HeroSeciton";
import HowItWorks from "@/components/modules/user/howWork/HowItWorks";
import TutorList from "@/components/modules/user/tutorList/TutorList";


// export default async function Home() {


//   return (
//       <>

//     <div className="mt-20">
//       <HeroSection />
//     </div>



//     <TutorList />

//      <div className="mb-96">
//       <AboutUs />
//      </div>
    
//        <HowItWorks />

//    </>
//   );
// }



export default async function Home() {
  return (
    <main className="min-h-screen" >
     
       <div className="pt-20" style={{marginTop:"100px", marginBottom:"80px"}}>
         <HeroSection />
       </div>

       <div>
        <h1 className="text-center text-4xl font-bold ">Tutor List</h1>
        <TutorList />
       </div>

       <div className="my-20"> {/* Changed mb-96 to a more reasonable my-20 */}
         <AboutUs />
       </div>
    
       <HowItWorks />
    </main>
  );
}