import { Result } from "pg";
import { PrismaAction } from "../../generated/prisma/internal/prismaNamespace";
import { prisma } from "../../lib/prisma"

// const createTutorProfile = async (payload: {
//         content: string,
//         authorId: string,
//         postId: string,
//         parentId: string
// }) => {
//         await prisma.post.findUniqueOrThrow(
//                 {
//                         where: {
//                                 id: payload.postId
//                         }
//                 }
//         )

//         if (payload.parentId) {
//                 await prisma.comment.findUniqueOrThrow({
//                         where: {
//                                 id: payload.parentId
//                         }
//                 })
//         }

//         const result = await prisma.comment.create({
//                 data: payload
//         })

//         return result;

// }




const createTutorProfile = async (payload: any ) => {
       
        const result = await prisma.tutorProfile.create({
                data: payload
        })

        return result;

}


const getAllTutorProfile = async ()=>{
        
        const result = await prisma.tutorProfile.findMany()
        return result
}


const getTutorProfileById = async (id: string) => {

    const result = await prisma.tutorProfile.findFirst({
        where: {
          id: id.trim(),
        },
        // Optional: include related data if needed
        // include: { user: true } 
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