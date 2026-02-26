"use client";

import { deleteTutoravailAbilitys } from "@/actions/tutor.action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type UserType = {
    name: string,
    email: string
}

type TutorType = {
 
  user: UserType
};

type TutorAvailabilityType = {
  id: string;
  startTime: string;
  endTime: string;
  tutor: TutorType
};

export default function AllTutoravailabilityTable({
  tutoravailAbility,
}: {
  tutoravailAbility: TutorAvailabilityType[];
}) {

  
  const handleDelete = async (id: string) => {
    try {
      await deleteTutoravailAbilitys(id);
      console.log("Deleted successfully");
   
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tutor Name</TableHead>
            <TableHead>Tutor Email</TableHead>
            <TableHead>StartTime</TableHead>
            <TableHead>EndTime</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tutoravailAbility?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-8">
                No data found
              </TableCell>
            </TableRow>
          ) : (
            tutoravailAbility?.map((availAbility) => (
              <TableRow key={availAbility.id}>
                <TableCell>{availAbility?.tutor.user.name}</TableCell>
                <TableCell>{availAbility?.tutor.user.email}</TableCell>
                <TableCell>{availAbility.startTime}</TableCell>
                <TableCell>{availAbility.endTime}</TableCell>
                <TableCell>
                  <div
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDelete(availAbility.id)}  
                  >
                    Delete
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