SkillBridge






SkillBridge is a full-stack web application designed to connect learners with expert tutors seamlessly. Students can browse tutors, check availability, and book sessions instantly, while tutors can manage their profiles, schedule availability, and track sessions. Admins oversee the platform to ensure smooth operations and user management.


🛠️ Tech Stack

Frontend:

Next.js

TypeScript

Tailwind CSS

Backend:

Node.js + Express

PostgreSQL

Prisma ORM

Authentication & Authorization:

Role-based access control: Student, Tutor, Admin




🌟 Project Overview

SkillBridge provides a streamlined platform for online tutoring with three main user roles:

Student: Browse tutors, book sessions, manage profile, and leave reviews.

Tutor: Create/update profiles, set availability, view sessions, and receive ratings/reviews.

Admin: Seeded role; manages users, categories, and oversees bookings.

The platform ensures smooth interaction between learners and educators, making online tutoring efficient and transparent.


📌 Features
Public Features

Browse and search tutors by subject, rating, and price

Filter tutors by category

View detailed tutor profiles with reviews

Landing page showcasing featured tutors

Student Features

Register and login as a student

Book tutoring sessions

View upcoming and past bookings

Leave reviews after sessions

Manage personal profile

Tutor Features

Register and login as a tutor

Create and update tutor profile

Set availability slots for sessions

View all teaching sessions

Receive ratings and reviews

Admin Features

View all users (students and tutors)

Manage user status (ban/unban)

View all bookings

Manage categories and tutor-category assignments


🔗 Live Demo

Frontend: https://skillbridgeprintend.vercel.app

Backend: https://skillbridgebackend.vercel.app



📂 API Routes
Authentication

GET /me – Get current user profile (roles: Admin, Tutor, Student)

GET / – Get all users

PUT /:id – Update user profile

Booking

GET / – Get all bookings

GET /getbookingbyuserid – Get bookings by user ID

POST /:tutorId/:availabilityId – Create a new booking

GET /:id – Get booking by ID

Categories

POST / – Create category (Admin only)

GET / – Get all categories

Reviews

POST / – Create review (Student only)

GET / – Get all reviews

GET /:id – Get review by ID

Students

POST / – Create student (Admin only)

GET / – Get all students

GET /:id – Get student by ID

Tutor Availability

POST / – Create availability (Tutor/Admin)

GET / – Get tutor availabilities (Tutor/Admin)

GET /all-availability-tutor – Get all tutor availabilities (Tutor/Admin)

PUT /:id – Update availability (Tutor/Admin)

DELETE /:id – Delete availability (Tutor/Admin)

Tutor Categories

POST /tutor-categories – Assign categories to tutor (Admin only)

GET /tutor-categories – Get all assigned tutor categories (Admin only)

DELETE /tutors/:tutorId/categories/:categoryId – Remove category from tutor (Admin only)

Tutor Profiles

POST / – Create tutor profile (Tutor/Admin)

GET / – Get all tutor profiles

GET /:id – Get tutor profile by ID

PUT /:id – Update tutor profile/availability (Tutor/Admin)


🏗️ Installation & Setup

Clone the repository

```
git clone https://github.com/mehedihasan8226/SkillBridge.git
cd SkillBridge

cd backend
npm install

npx prisma migrate dev

npm run dev

cd frontend
npm install
npm run dev

Access frontend at http://localhost:3000



🎨 UI & Styling

Tailwind CSS is used for responsive and modern UI

Clean dashboard layouts for Students, Tutors, and Admin



📝 Notes

Admin is seeded by default

Role-based authorization ensures secure access to routes

Prisma ORM handles database interactions efficiently



📌 Future Enhancements

Add payment integration for session bookings

Enable real-time notifications for tutors and students

Add chat functionality between students and tutors

Implement advanced analytics for Admin dashboard


Repository

GitHub Repo

