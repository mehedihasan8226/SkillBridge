// types/tutor.ts
export interface Tutor {
  id: string;
  userId: string;
  phone: string;
  profileImage?: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  dateOfBirth?: string | null;
  nationality?: string | null;
  qualification: string;
  university: string;
  majorSubject: string;
  experience: number;
  bio?: string | null;
  teachingMode:  "Online" | "Offline" | "Both"
  monthlyRate: number;
}




export type Gender = "Male" | "Female" | "Other";

export interface TutorProfile {
  phone: string;
  qualification: string;
  university: string;
  majorSubject: string;
  experience: number;
  monthlyRate: number;
  availability: boolean;

  profileImage: string | null;
  gender: Gender | null;
  dateOfBirth: string | null;
  nationality: string | null;
  bio: string | null;
  languages: string[] | null;
}


export interface Tutoravailability {
  startTime: string
  endTime: string
  isBooked: boolean | null
}