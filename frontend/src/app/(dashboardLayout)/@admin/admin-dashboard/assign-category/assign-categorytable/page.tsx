
import { getAssignCategories } from "@/actions/admin.action";
import AssignCategoryTable from "@/components/modules/AssignCategories/AssignCategoryTable";
import { FilePlus } from "lucide-react";
import Link from "next/link";


export default async function AssignCategoryTablePage() {
  

  const res = await getAssignCategories()

  const Assigncategories = res.data

  console.log("Assigncategories: ",Assigncategories);
  

  return (
    <div className="p-6">
     <div className="flex justify-between ">
         <h1 className="text-2xl font-bold mb-6">Assign Category Table Data</h1>
         <p className="px-10"><Link href="/admin-dashboard/assign-category"><FilePlus /></Link></p>
     </div>
      <AssignCategoryTable Assigncategories={Assigncategories} />


    </div>
  );
}