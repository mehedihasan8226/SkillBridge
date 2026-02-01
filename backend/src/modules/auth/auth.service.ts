import { UserStatus } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";


const getAuthUser = async ()=>{
        
        const result = await prisma.user.findMany()
        return result
}



const getAuthProfileById = async (id: string) => {


    const result = await prisma.user.findFirst({
        where: {
          id: id.trim(),
        },
    
        include: { 
            tutorProfile: true,
            bookings: true,
            reviews: true
        } 
    });

    return result;
}





const updateAuthUser = async (id: string, status : UserStatus) => {
    const result = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            status: status,
        },
    });
    
    return result;
}



export const AuthService = {
    getAuthUser,
    getAuthProfileById,
    updateAuthUser

}