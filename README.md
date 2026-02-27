## SkillBridge






#### SkillBridge is a full-stack web application designed to connect learners with expert tutors seamlessly. Students can browse tutors, check availability, and book sessions instantly, while tutors can manage their profiles, schedule availability, and track sessions. Admins oversee the platform to ensure smooth operations and user management.


🛠️ Tech Stack

Frontend:


<li>Next.js</li>
<li>TypeScript</li>
<li>Tailwind CSS</li>


Backend:

<li>Node.js + Express</li>

<li>PostgreSQL</li>

<li>Prisma ORM</li>

Authentication & Authorization:

<li>Role-based access control: Student, Tutor, Admin</li>




🌟 Project Overview

SkillBridge provides a streamlined platform for online tutoring with three main user roles:

1. Student: Browse tutors, book sessions, manage profile, and leave reviews.

2. Tutor: Create/update profiles, set availability, view sessions, and receive ratings/reviews.

3. Admin: Seeded role; manages users, categories, and oversees bookings.

The platform ensures smooth interaction between learners and educators, making online tutoring efficient and transparent.


📌 Features
Public Features

<li>Browse and search tutors by subject, rating, and price</li>

<li>Filter tutors by category</li>

<li>View detailed tutor profiles with reviews</li>

<li>Landing page showcasing featured tutors</li>

Student Features

<li>Register and login as a student</li>

<li>Book tutoring sessions</li>

<li>View upcoming and past bookings</li>

<li>Leave reviews after sessions</li>

<li>Manage personal profile</li>

Tutor Features

<li>Register and login as a tutor</li>

<li>Create and update tutor profile</li>

<li>Set availability slots for sessions</li>

<li>View all teaching sessions</li>

<li>Receive ratings and reviews</li>

Admin Features

<li>View all users (students and tutors)</li>

<li>Manage user status (ban/unban)</li>

<li>View all bookings</li>

<li>Manage categories and tutor-category assignments</li>


🔗 Live Demo

<li>Frontend: https://skillbridgeprintend.vercel.app</li>

<li>Backend: https://skillbridgebackend.vercel.app</li>



📂 API Routes

<ul>
  <li><strong>Authentication</strong>
    <ul>
      <li>GET /me – Get current user profile (roles: Admin, Tutor, Student)</li>
      <li>GET / – Get all users</li>
      <li>PUT /:id – Update user profile</li>
    </ul>
  </li>

  <li><strong>Booking</strong>
    <ul>
      <li>GET / – Get all bookings</li>
      <li>GET /getbookingbyuserid – Get bookings by user ID</li>
      <li>POST /:tutorId/:availabilityId – Create a new booking</li>
      <li>GET /:id – Get booking by ID</li>
    </ul>
  </li>

  <li><strong>Categories</strong>
    <ul>
      <li>POST / – Create category (Admin only)</li>
      <li>GET / – Get all categories</li>
    </ul>
  </li>

  <li><strong>Reviews</strong>
    <ul>
      <li>POST / – Create review (Student only)</li>
      <li>GET / – Get all reviews</li>
      <li>GET /:id – Get review by ID</li>
    </ul>
  </li>

  <li><strong>Students</strong>
    <ul>
      <li>POST / – Create student (Admin only)</li>
      <li>GET / – Get all students</li>
      <li>GET /:id – Get student by ID</li>
    </ul>
  </li>

  <li><strong>Tutor Availability</strong>
    <ul>
      <li>POST / – Create availability (Tutor/Admin)</li>
      <li>GET / – Get tutor availabilities (Tutor/Admin)</li>
      <li>GET /all-availability-tutor – Get all tutor availabilities (Tutor/Admin)</li>
      <li>PUT /:id – Update availability (Tutor/Admin)</li>
      <li>DELETE /:id – Delete availability (Tutor/Admin)</li>
    </ul>
  </li>

  <li><strong>Tutor Categories</strong>
    <ul>
      <li>POST /tutor-categories – Assign categories to tutor (Admin only)</li>
      <li>GET /tutor-categories – Get all assigned tutor categories (Admin only)</li>
      <li>DELETE /tutors/:tutorId/categories/:categoryId – Remove category from tutor (Admin only)</li>
    </ul>
  </li>

  <li><strong>Tutor Profiles</strong>
    <ul>
      <li>POST / – Create tutor profile (Tutor/Admin)</li>
      <li>GET / – Get all tutor profiles</li>
      <li>GET /:id – Get tutor profile by ID</li>
      <li>PUT /:id – Update tutor profile/availability (Tutor/Admin)</li>
    </ul>
  </li>
</ul>


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

