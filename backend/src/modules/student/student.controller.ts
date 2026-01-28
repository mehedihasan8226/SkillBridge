
import { NextFunction, Request, Response } from "express";
import { StudentService } from "./student.service";


const createStudent = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        // const user = req.user;
        // req.body.authorId = user?.id
        const result = await StudentService.createStudent(req.body)
    
        res.status(201).json(result)
        
    } catch (error) {
        next(error)
    }
}




const getAllStudent = async (req: Request, res: Response, next: NextFunction)=>{
        try {
        
            const result = await StudentService.getAllStudent()
            res.status(200).json(result)
            
        } catch (error) {
            next(error)
    }
        
}


const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
      
        
        const result = await StudentService.getStudentById(id as string);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "student fetched successfully",
            data: result
        });

    } catch (error) {
      
        next(error)
    }
}



export const StudentController = {
    createStudent,
    getAllStudent,
    getStudentById

}



