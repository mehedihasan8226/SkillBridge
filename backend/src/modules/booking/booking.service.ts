import { Result } from "pg";
import { PrismaAction } from "../../generated/prisma/internal/prismaNamespace";
import { prisma } from "../../lib/prisma"


// const createBooking = async (data: any) => {

//         const result = await prisma.booking.create({
//                 // data: payload
//                 data: {
//                 ...data,
//                 sessionDate: new Date(data.sessionDate),
//                 startTime: new Date(data.startTime),
//                 endTime: new Date(data.endTime),
//                 }
//         })

//         return result;

// }


const createBooking = async (data: any) => {
   
    const tutor = await prisma.tutorProfile.findUnique({
        where: { id: data.tutorId }
    });

    if (!tutor) throw new Error("Tutor not found");

    const availability = await prisma.tutorAvailability.findUnique({
        where: { id: data.tutorAvailabilityId }
    });
    if (!availability || availability.isBooked) {
        throw new Error("Selected slot is not available");
    }

    const result = await prisma.booking.create({
        data: {
            ...data,
            // userId: tutor.userId,
            // tutorId: tutor.id,
            sessionDate: new Date(data.sessionDate),
            startTime: new Date(data.startTime),
            endTime: new Date(data.endTime),
            price: tutor.monthlyRate, 
        },
    });

    // slot as booked
    await prisma.tutorAvailability.update({
        where: { id: data.tutorAvailabilityId },
        data: { isBooked: true }
    });

    return result;
};



const getAllBooking = async () => {

        const result = await prisma.booking.findMany()
        return result
}


const getBookingById = async (id: string) => {

        const result = await prisma.booking.findFirst({
               where: { id: id.trim() },
                include: {
                user: true,              
                tutor: true,              
                tutorAvailability: true, 
                reviews: true,
                },
        });

        return result;
}


export const BookingService = {
        createBooking,
        getAllBooking,
        getBookingById
}