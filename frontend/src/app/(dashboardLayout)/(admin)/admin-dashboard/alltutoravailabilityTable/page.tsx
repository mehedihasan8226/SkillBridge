
import { getAllTutoravailAbility } from "@/actions/tutor.action";
import AllTutoravailabilityTable from "@/components/modules/admin/AllTutoravailabilityTable";
import { FilePlus } from "lucide-react";
import Link from "next/link";


export default async function allTutoravailabilityTablePage() {
  

  const res = await getAllTutoravailAbility()

  const tutoravailAbility = res.data

  console.log("tutoravailAbility: ",tutoravailAbility);
  

  return (
    <div className="p-6">
     <div className="flex justify-between ">
         <h1 className="text-2xl font-bold mb-6">All AvailAbility Date Time Table </h1>
         {/* <p className="px-10"><Link href="/tutor-dashboard/tutoravailability"><FilePlus /></Link></p> */}
     </div>
      <AllTutoravailabilityTable tutoravailAbility={tutoravailAbility} />

    </div>
  );
}