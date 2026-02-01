
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export default function CatogoryTable({ categories }: { categories: { id: number; name: string }[] }) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
       
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={2}
                className="text-center py-8 text-muted-foreground"
              >
                No data posts found
              </TableCell>
            </TableRow>
          ) : (
            categories.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{post.id}</p>
               
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[200px]">
                    <p className="font-medium">{post.name}</p>
                  </div>
                </TableCell>
              
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}