import { prisma } from "../../lib/prisma"


const createReview = async (payload: any ) => {
       
        const result = await prisma.review.create({
                data: payload
        })

        return result;

}


const getAllReview = async ()=>{
        
        const result = await prisma.review.findMany()
        return result
}


const getReviewById = async (id: string) => {

    const result = await prisma.review.findFirst({
        where: {
          id: id.trim(),
        },
        // Optional: include related data if needed
        // include: { user: true } 
    });

    return result;
}


export const ReviewService = {
      createReview,
      getAllReview,
      getReviewById
}