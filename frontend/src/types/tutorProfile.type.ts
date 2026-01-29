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
