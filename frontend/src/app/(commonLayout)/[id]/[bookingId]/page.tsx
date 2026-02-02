

// "use client"; // Required in Next.js App Router

// import { createBookins } from '@/actions/student.action';
// import { useForm } from '@tanstack/react-form';
// import { useParams } from 'next/navigation';

// export default function BookingButton() {
//   const params = useParams();
//   // Ensure we are getting a string, even if the param is an array or missing
//   const idValue = Array.isArray(params.bookingId) ? params.bookingId[0] : params.bookingId;

//   const form = useForm({
//     defaultValues: {
//       bookingId: idValue || "",
//     },
//     onSubmit: async ({ value }) => {
//       // Direct check to ensure we have a value
//       if (!value.bookingId) {
//         alert("No booking ID found.");
//         return;
//       }

//       try {
//         await createBookins(value.bookingId);
//         alert("Your request has been success!");
//       } catch (error) {
//         console.error("Booking failed", error);
//         alert("Something went wrong.");
//       }
//     },
//   });

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         form.handleSubmit();
//       }}
//     >
//       {/* We use Subscribe to get the "canSubmit" and "isSubmitting" states 
//          to make the UI more responsive.
//       */}
//       <form.Subscribe
//         selector={(state) => [state.canSubmit, state.isSubmitting]}
//         children={([canSubmit, isSubmitting]) => (
//           <button type="submit" disabled={!canSubmit || isSubmitting}>
//             {isSubmitting ? 'Processing...' : 'Book Now'}
//           </button>
//         )}
//       />
//     </form>
//   );
// }


"use client";

import { createBookins } from '@/actions/student.action';
import { useForm } from '@tanstack/react-form';

export default function BookingButton({ bookingId, tutorId }: any) {
  console.log("bookingId: ",bookingId);
  
  const form = useForm({
    defaultValues: {
      bookingId: bookingId,
      tutorId: tutorId
    },
    onSubmit: async ({ value }) => {
      try {
      const res =  await createBookins(value.bookingId, value.tutorId);
        // console.log("value.id: ", value.id);
        
    
       if (res.data && res.data.success === false) {
      alert(res.data.message); 
      return;
    }

      
        alert("Your request has been success!");
      } catch (error) {
        console.error("Booking failed", error);
        alert("Something went wrong.");
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Subscribe
        selector={(state) => [state.isSubmitting]}
        children={([isSubmitting]) => (
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {isSubmitting ? 'Booking...' : 'Book Now'}
          </button>
        )}
      />
    </form>
  );
}