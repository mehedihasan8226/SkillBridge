import { Result } from "pg";
import { PrismaAction } from "../../generated/prisma/internal/prismaNamespace";
import { prisma } from "../../lib/prisma"
import { AppError } from "../../middlewares/AppError";
import { string } from "better-auth";


const createTutorProfile = async (payload: any ) => {

    const existing = await prisma.tutorProfile.findUnique({
        where: { userId: payload.userId }
        });
  
    
  if (existing) {
    throw new AppError("Profile already exists for this user", 409);
  }
       
        const result = await prisma.tutorProfile.create({
                data: payload
        })

        return result;

}


const getAllTutorProfile = async (payload: {search: string | undefined})=>{
        
        const result = await prisma.tutorProfile.findMany({
            where:{
                majorSubject: {
                    contains: payload.search as string,
                    mode: "insensitive"
                }
            }
        })
        return result
}


const getTutorProfileById = async (id: string) => {

    const result = await prisma.tutorProfile.findFirst({
       where: { id: id.trim() },
       include: {
            user: true,
            categories: true,
            tutorAvailabilities: true,
            reviews: true,
        }
    });

    return result;
}


const updateTutorAvailability = async (id: string, availability: boolean) => {
    const result = await prisma.tutorProfile.update({
        where: {
            id: id,
        },
        data: {
            availability: availability,
        },
    });
    
    return result;
}

export const TutorProfileService = {
      createTutorProfile,
      getAllTutorProfile,
      updateTutorAvailability,
      getTutorProfileById
}