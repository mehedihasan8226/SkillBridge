
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



export default function AssignCategoryTable({ Assigncategories }: any ) {

    // const [data, setData] = useState<any>([])

    console.log(Assigncategories);
    Assigncategories.map((c: any)=>{
        console.log(c.id);
        
    })
    
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Nationality</TableHead>
            <TableHead>Qualification</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Category Name</TableHead>
       
          </TableRow>
        </TableHeader>
        <TableBody>
          {Assigncategories.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={2}
                className="text-center py-8 text-muted-foreground"
              >
                No data posts found
              </TableCell>
            </TableRow>
          ) : (
            Assigncategories.map((category:any) => {
                console.log("category 123: ", category);
                
                return(
                       <TableRow key={category.id}>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{category.tutor.id}</p>
               
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{category?.tutor.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{category?.tutor.gender}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{category?.tutor.nationality}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{category?.tutor.qualification}</p>
                  </div>
                </TableCell>
                
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{category?.tutor.availability? "Available":"Not Available" }</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{category?.category.name}</p>
                  </div>
                </TableCell>
              
              </TableRow>
                )
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}