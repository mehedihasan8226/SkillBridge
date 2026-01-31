import { NextFunction, Request, Response } from "express";
import { startCPUProfile } from "node:v8";
import { Prisma } from "../generated/prisma/client";
import { AppError } from "./AppError";

function errorHandler(err: any, req: Request, res: Response, next: NextFunction){
    // custome error:
        //  if (err instanceof AppError) {
        //     return res.status(err.statusCode).json({
        //     message: err.message,
        //     error: null
        //     });
        // }

        // other code:

        // let statusCode = 500 
        // let errorMessage = "Internal server error"
        // let errorDetails = err

        let statusCode = err.statusCode || 500;
    let errorMessage = err.message || "Internal server error";
    let errorDetails = err;


    // Sometimes instanceof fails if there are multiple versions of the class
    if (err instanceof AppError || err.name === 'AppError') {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: null
        });
    }

        

        if(err instanceof Prisma.PrismaClientValidationError){
            statusCode = 400
            errorMessage = "You provided incorrect type or missing filed"
        }
        else if(err instanceof Prisma.PrismaClientKnownRequestError){

            if(err.code == "P2025"){
                statusCode = 400
                errorMessage = "An operation failed because it depends on one or more records that were required but not found"
            }
           else if(err.code == "P2002"){
                statusCode = 400
                errorMessage = "Duplicate key err"
            }
           else if(err.code == "P2003"){
                statusCode = 400
                errorMessage = "Foreign key constraint failed"
            }
        }
        else if(err instanceof Prisma.PrismaClientUnknownRequestError){
            statusCode = 500
            errorMessage = "Error occured during query exicusion."
        }
        else if(err instanceof Prisma.PrismaClientInitializationError ){
            if(err.errorCode == "P1000"){
                statusCode = 401
                errorMessage = "Authentication failed. please check your credintial!"

            }
            if(err.errorCode == "P1001"){
                statusCode = 400
                errorMessage = "Can't reach database server!"

            }
        }

        // res.status(statusCode)
        // res.json({
        //     message: errorMessage,
        //     error: errorDetails,

        // })


        // Final fallback - prevents the "200 OK" mystery
    return res.status(statusCode).json({
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? errorDetails : undefined,
    });

        
}

export default errorHandler