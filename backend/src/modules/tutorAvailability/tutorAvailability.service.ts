import { prisma } from "../../lib/prisma";


const createTutorAvailability = async (payload: any) => {
    const result = await prisma.tutorAvailability.create({
        data: {
            ...payload,
            startTime: new Date(payload.startTime),
            endTime: new Date(payload.endTime),
        },
    });

    return result;
};

const getTutorAvailabilities = async (tutorId: string) => {
    return prisma.tutorAvailability.findMany({
        where: { tutorId },
        include: { booking: true }, 
    });
};

const updateTutorAvailability = async (id: string, payload: any) => {
    return prisma.tutorAvailability.update({
        where: { id },
        data: {
            ...payload,
            startTime: payload.startTime ? new Date(payload.startTime) : undefined,
            endTime: payload.endTime ? new Date(payload.endTime) : undefined,
        },
    });
};

const deleteTutorAvailability = async (id: string) => {
    return prisma.tutorAvailability.delete({
        where: { id },
    });
};

export const TutorAvailabilityService = {
    createTutorAvailability,
    getTutorAvailabilities,
    updateTutorAvailability,
    deleteTutorAvailability,
};
