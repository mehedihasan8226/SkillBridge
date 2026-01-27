import { prisma } from "../../lib/prisma";




const getAuthProfileById = async (id: string) => {

    const result = await prisma.user.findFirst({
        where: {
          id: id.trim(),
        },
        // Optional: include related data if needed
        // include: { user: true } 
    });

    return result;
}



export const AuthService = {
    getAuthProfileById

}