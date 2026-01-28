// import { email, logger } from "better-auth/*";
// import { UserRole } from "../middlewares/auth";
import { prisma } from "../lib/prisma";
import { convertFromDB } from "better-auth/db";
import { countReset } from "node:console";
import { Role } from "../generated/prisma/enums";


async function seedAdmin(){
    try {
        const adminData = {
            name: process.env.adminData_name,
            email: process.env.adminData_email,
            role: Role.Admin,
            password: process.env.adminData_password
        }
        //check user exist on db or not:
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email!

            }
        });

        if(existingUser){
            throw new Error("User already exists!")
        }
        
        const signUpAdmin = await fetch("http://localhost:5000/api/auth/sign-up/email",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: JSON.stringify(adminData)
        })
        
        if(signUpAdmin.ok){
            await prisma.user.update({
                where: {
                    email: adminData.email!
                },
                data: {
                    emailVerified: true
                }
            })
        }

        console.log("Success...");
        


        

    } catch (error) {
            console.error(error);
            
    }
}

seedAdmin()