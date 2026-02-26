
import { getCategories } from "@/actions/admin.action";
import CatogoryTable from "@/components/modules/categories/CatogoryTable";
import { FilePlus } from "lucide-react";
import Link from "next/link";


export default async function CatogoryTablePage() {
  

  const res = await getCategories()

  const categories = res.data.data

  // console.log("categories: ",categories);
  

  return (
    <div className="p-6">
     <div className="flex justify-between ">
         <h1 className="text-2xl font-bold mb-6">Catogory Table Data</h1>
         <p className="px-10"><Link href="/admin-dashboard/categories"><FilePlus /></Link></p>
     </div>
      <CatogoryTable categories={categories} />

      {/* <PaginationControls meta={pagination} /> */}
    </div>
  );
}