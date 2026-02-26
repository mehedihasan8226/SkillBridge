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

type TutorAvailabilityType = {
  id: string;
  startTime: string;
  endTime: string;
};

export default function TutoravailabilityTable({
  tutoravailAbility,
}: {
  tutoravailAbility: TutorAvailabilityType[];
}) {

  // ✅ create async handler function
  const handleDelete = async (id: string) => {
    try {
      await deleteTutoravailAbilitys(id);
      console.log("Deleted successfully");
      // optionally: refresh page or re-fetch data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>StartTime</TableHead>
            <TableHead>EndTime</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tutoravailAbility.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-8">
                No data found
              </TableCell>
            </TableRow>
          ) : (
            tutoravailAbility.map((availAbility) => (
              <TableRow key={availAbility.id}>
                <TableCell>{availAbility.startTime}</TableCell>
                <TableCell>{availAbility.endTime}</TableCell>
                <TableCell>
                  <div
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDelete(availAbility.id)}  // ✅ correct
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