

"use client";


import { createTutorProfiles } from "@/actions/tutor.action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gender, TutorProfile } from "@/types/tutorProfile.type";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
// import { zodValidator } from "@tanstack/zod-form-adapter";


/* ---------------- Schema ---------------- */
const tutorSchema = z.object({
  phone: z.string().min(11, "Phone must be at least 11 digits"),
  qualification: z.string().min(2, "Qualification is required"),
  university: z.string().min(2, "University is required"),
  majorSubject: z.string().min(2, "Major subject is required"),
  experience: z.number().min(0, "Experience cannot be negative"),
  monthlyRate: z.number().min(0, "Rate cannot be negative"),
  availability: z.boolean(),
  
  // optional
  profileImage: z.string(),
  gender: z.string(),
  dateOfBirth: z.string(),
  nationality: z.string(),
  bio: z.string(),
  languages: z.string(),
});

/* ---------------- Component ---------------- */

export default function CreateTutorProfileFormClient() {
  const form = useForm({
    defaultValues: {
      // required
      phone: "",
      qualification: "",
      university: "",
      majorSubject: "",
      experience: 0,
      monthlyRate: 0,
      availability: true,

      // optional
      profileImage: "",
      gender: "",
      dateOfBirth: "",
      nationality: "",
      bio: "",
      languages: "",
    },
   
validators: {
    onSubmit: tutorSchema, 
  },


    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating tutor profile...");


      const tutorData: TutorProfile = {
     

        ...value,
   
    dateOfBirth: value.dateOfBirth 
      ? new Date(value.dateOfBirth).toISOString() 
      : null, 

    gender:
      value.gender === "Male" || value.gender === "Female" || value.gender === "Other"
        ? (value.gender as Gender)
        : null,
    
    languages: value.languages
      ? value.languages.split(",").map(l => l.trim())
      : null,
      };


      
      try {
 
        const res = await createTutorProfiles(tutorData);
        // console.log(res.data); 
  
        
        if (res?.error) {
            console.log(res);
            if(res.status==409){
              toast.error("Profile already exists for this user",  { id: toastId });

            }else{
               toast.error(res.error.message,  { id: toastId });
            }
            
       
  
          return;
        }

       

        toast.success("Tutor Profile Created", { id: toastId });
      } catch (err) {
        
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create Tutor Profile</CardTitle>
        <CardDescription>
          Fill in your information to create your tutor profile
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="tutor-profile"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submit clicked");
            form.handleSubmit(e);
          }}
        >
          <FieldGroup>
            {/* Required fields */}

            <form.Field name="phone">
              {(field) => (
                <Field data-invalid={!field.state.meta.isValid}>
                  <FieldLabel>Phone</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="01717349434"
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="qualification">
              {(field) => (
                <Field>
                  <FieldLabel>Qualification</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="BCS"
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="university">
              {(field) => (
                <Field>
                  <FieldLabel>University</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Barishal"
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="majorSubject">
              {(field) => (
                <Field>
                  <FieldLabel>Major Subject</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="CSC"
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="profileImage">
              {(field) => (
                <Field>
                  <FieldLabel>Profile Image</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Image url"
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* <form.Field name="experience">
            {(field) => (
              <Input
                type="number"
                value={field.state.value}
                onChange={(e) => field.handleChange(Number(e.target.value))} // Keep this Number() conversion!
              />
            )}
            </form.Field> */}

             <form.Field name="experience">
              {(field) => (
                <Field>
                  <FieldLabel>Experience (years)</FieldLabel>
                  <Input
                    type="number"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(Number(e.target.value))
                    }
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="monthlyRate">
              {(field) => (
                <Field>
                  <FieldLabel>Monthly Rate</FieldLabel>
                  <Input
                    type="number"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(Number(e.target.value))
                    }
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* Optional fields */}

            {/* <form.Field name="gender">
              {(field) => (
                <Field>
                  <FieldLabel>Gender</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Male / Female"
                  />
                </Field>
              )}
            </form.Field> */}

            <form.Field name="gender">
            {(field) => (
              <Field>
                <FieldLabel>Gender</FieldLabel>
                <select
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    borderRadius: '4px',
                    border: '1px solid #ccc' 
                  }}
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                
                {/* Showing error message if validation exists */}
                {field.state.meta.errors ? (
                  <em style={{ color: 'red' }}>{field.state.meta.errors.join(', ')}</em>
                ) : null}
              </Field>
            )}
          </form.Field>

            <form.Field name="dateOfBirth">
              {(field) => (
                <Field>
                  <FieldLabel>Date of Birth</FieldLabel>
                  <Input
                    type="date"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="nationality">
              {(field) => (
                <Field>
                  <FieldLabel>Nationality</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="languages">
              {(field) => (
                <Field>
                  <FieldLabel>Languages (comma separated)</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="English, Bangla"
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="bio">
              {(field) => (
                <Field>
                  <FieldLabel>Bio</FieldLabel>
                  <Textarea
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Tell something about yourself"
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button form="tutor-profile" type="submit" className="w-full">
          Create Profile
        </Button>
      </CardFooter>
    </Card>
  );
}


