
import { Request, Response } from "express";
import { StudentService } from "./student.service";


const createStudent = async (req: Request, res: Response) =>{
    try {
        // const user = req.user;
        // req.body.authorId = user?.id
        const result = await StudentService.createStudent(req.body)
    
        res.status(201).json(result)
        
    } catch (e) {
        res.status(400).json({
            error: "student creation failed!",
            details: e
        })
    }
}




const getAllStudent = async (req: Request, res: Response)=>{
        try {
        
            const result = await StudentService.getAllStudent()
            res.status(200).json(result)
            
        } catch (error) {
        res.status(400).json({
            error: "student get failed",
            details: error
        })
    }
        
}


const getStudentById = async (req: Request, res: Response) => {
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
        res.status(400).json({
            success: false,
            message: "Failed to get student",
            details: error instanceof Error ? error.message : error
        });
    }
}



export const StudentController = {
    createStudent,
    getAllStudent,
    getStudentById

}



