import { prisma } from "../../lib/prisma";
import { AppError } from "../../middlewares/AppError";


const createTutorAvailability = async (payload: any) => {
   
    const { startTime, endTime,userId, ...rest } = payload;

    const availability = await prisma.tutorProfile.findUnique({
        where: { userId: payload.userId }
    });

  if (!availability) {
    throw new Error("Tutor profile not found");
  }


    
    await prisma.tutorProfile.update({
  where: { id: availability.id },
  data: { availability: true },
});


    const result = await prisma.tutorAvailability.create({
        data: {
            tutorId: availability?.id,
            ...rest, 
            startTime: new Date(startTime), 
            endTime: new Date(endTime),     
        },
    });

    return result;
};


const getAllTutorAvailabilities = async () => {

   return prisma.tutorAvailability.findMany({
    include: { 
        booking: true,
        tutor: {
            include:{
                user: true
            }
        }
    },
});
};

const getTutorAvailabilities = async (userId: string) => {

    const tutorProfile = await prisma.tutorProfile.findUnique({
        where: {userId: userId}
    })

      if (!tutorProfile) {
        throw new Error("Tutor profile not found");
    }

    return prisma.tutorAvailability.findMany({
        where: { tutorId: tutorProfile?.id },
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

const deleteTutorAvailability = async (id: string, userId: string) => {

     const availability = await prisma.tutorProfile.findUnique({
        where: { userId: userId }
    });

  if (!availability) {
    throw new Error("Tutor profile not found");
  }


    
    await prisma.tutorProfile.update({
  where: { id: availability.id },
  data: { availability: true },
});

    return prisma.tutorAvailability.delete({
        where: { id },
    });
};

export const TutorAvailabilityService = {
    createTutorAvailability,
    getAllTutorAvailabilities,
    getTutorAvailabilities,
    updateTutorAvailability,
    deleteTutorAvailability,
};
