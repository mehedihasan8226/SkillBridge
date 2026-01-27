import { Result } from "pg";
import { PrismaAction } from "../../generated/prisma/internal/prismaNamespace";
import { prisma } from "../../lib/prisma"


const createBooking = async (data: any) => {

        const result = await prisma.booking.create({
                // data: payload
                data: {
                ...data,
                sessionDate: new Date(data.sessionDate),
                startTime: new Date(data.startTime),
                endTime: new Date(data.endTime),
                }
        })

        return result;

}


const getAllBooking = async () => {

        const result = await prisma.booking.findMany()
        return result
}


const getBookingById = async (id: string) => {

        const result = await prisma.booking.findFirst({
                where: {
                        id: id.trim(),
                },
                // Optional: include related data if needed
                // include: { user: true } 
        });

        return result;
}


export const BookingService = {
        createBooking,
        getAllBooking,
        getBookingById
}