import { prisma } from "../../lib/prisma"


const createStudent = async (payload: any ) => {
       
        const result = await prisma.student.create({
                data: payload
        })

        return result;

}


const getAllStudent = async ()=>{
        
        const result = await prisma.student.findMany()
        return result
}


const getStudentById = async (id: string) => {

    const result = await prisma.student.findFirst({
        where: {
          id: id.trim(),
        },
        // Optional: include related data if needed
        // include: { user: true } 
    });

    return result;
}


export const StudentService = {
      createStudent,
      getAllStudent,
      getStudentById
}