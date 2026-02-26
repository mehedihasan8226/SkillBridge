
import { getTutoravailAbilitys } from "@/actions/tutor.action";
import TutoravailabilityTable from "@/components/modules/tutor/tutoravailability/TutoravailabilityTable";
import { FilePlus } from "lucide-react";
import Link from "next/link";


export default async function tutoravailabilityTablePage() {
  

  const res = await getTutoravailAbilitys()

  const tutoravailAbility = res.data

  console.log("tutoravailAbility: ",tutoravailAbility);
  

  return (
    <div className="p-6">
     <div className="flex justify-between ">
         <h1 className="text-2xl font-bold mb-6">Tutor AvailAbility Date Time Table </h1>
         <p className="px-10"><Link href="/tutor-dashboard/tutoravailability"><FilePlus /></Link></p>
     </div>
      <TutoravailabilityTable tutoravailAbility={tutoravailAbility} />

    </div>
  );
}