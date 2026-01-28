// import { email, logger } from "better-auth/*";
// import { UserRole } from "../middlewares/auth";
import { prisma } from "../lib/prisma";
import { convertFromDB } from "better-auth/db";
import { countReset } from "node:console";


async function seedAdmin(){
    try {
        const adminData = {
            name: "Admin",
            email: "amdin@gmail.com",
            // role: UserRole.ADMIN,
            role: "Admin",
            password: "admin1234"
        }
        //check user exist on db or not:
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email

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
                    email: adminData.email
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