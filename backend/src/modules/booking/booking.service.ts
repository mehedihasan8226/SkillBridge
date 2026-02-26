import { Result } from "pg";
import { PrismaAction } from "../../generated/prisma/internal/prismaNamespace";
import { prisma } from "../../lib/prisma"



const createBooking = async (data: any) => {
    // const { userId, availabilityId } = data;
    const { userId, availabilityId, tutorId } = data;

    const tutor = await prisma.tutorProfile.findUnique({
        where: { id: tutorId } 
    });

    if (!tutor) throw new Error("Tutor not found");


    const availability = await prisma.tutorAvailability.findUnique({
        where: { id: availabilityId }
    });

    if (!availability || availability.isBooked) {
        throw new Error("Selected slot is not available");
    }
  

    return await prisma.$transaction(async (tx) => {
        const booking = await tx.booking.create({
            data: {
                userId: userId, 
                tutorId: tutor.id,
                tutorAvailabilityId: availability.id,
                price: tutor.monthlyRate,
            },
        });

        await tx.tutorAvailability.update({
            where: { id: availabilityId },
            data: { isBooked: true }
        });

        await tx.tutorProfile.update({
            where: { id: tutor.id },
            data: { availability: false },
            });

        return booking;
    });
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


// const getBookingByUserId = async (id: string) => {

//         const result = await prisma.booking.findMany({
//                where: { userId: id.trim() },
//                 include: {
//                 user: true,              
//                 tutor: true,              
//                 tutorAvailability: true, 
//                 reviews: true,
//                 },
//         });

//         return result;
// }


const getBookingByUserId = async (id: string) => {

    const tutorProfiles = await prisma.tutorProfile.findUnique({
        where: {userId: id.trim()}
    })

    // if(!tutorProfiles){
    //     throw new Error("tutorProfiles id is not found!")
    // }

        const result = await prisma.booking.findMany({
               where: {  OR: [
                    { userId: id.trim() },
                    ...(tutorProfiles ? [{ tutorId: tutorProfiles.id }] : [])
                ]},
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
        getBookingById,
        getBookingByUserId
}