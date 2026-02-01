"use client";

import { 
  createAssignCategories,
  getCategories, 

} from "@/actions/admin.action";
import { getTutorProfile } from "@/actions/tutor.action";
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
import { Tutor } from "@/types";
import { useForm } from "@tanstack/react-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

/* ---------------- Schema ---------------- */
const assignSchema = z.object({
  tutorId: z.string().min(1, "Please select a tutor"),
  categoryIds: z.array(z.string()).min(1, "Select at least one category"),
});

export default function AssignCategoryForm() {

  const [tutors, setTutors] = useState<any[]>([]);

  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [tutorRes, catRes] = await Promise.all([
        getTutorProfile(),
        getCategories()
      ]);

      if (tutorRes?.data) setTutors(tutorRes.data.data);
      if (catRes?.data) setCategories(catRes.data.data);
       
      
    };
    fetchData();
  }, []);


  const form = useForm({
    defaultValues: {
      tutorId: "",
      categoryIds: [] as string[],
    },
    validators: {
      onSubmit: assignSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Assigning categories...");
      try {
        const res = await createAssignCategories(value);
        
        if (res?.data?.success === false || res?.error) {
          toast.error(res?.error?.message || res?.data?.message || "Failed to assign", { id: toastId });
          return;
        }

        toast.success("Categories assigned successfully!", { id: toastId });
        form.reset();
      } catch (err) {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Assign Categories</CardTitle>
        <CardDescription>Map a tutor to multiple teaching categories.</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="assign-form"
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Tutor Dropdown */}
            <form.Field name="tutorId">
              {(field) => (
                <Field>
                  <FieldLabel>Select Tutor</FieldLabel>
               

                  <select
                    className="..."
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  >
                    <option value="">-- Select a Tutor --</option>
                    {tutors.map((t) => (
                      <option key={t.id} value={t.id}>

                        {t.university} - {t.majorSubject} ({t.id.substring(0, 5)})
                      </option>
                    ))}
                  </select>
             
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* Categories Checkbox List */}
            <form.Field name="categoryIds">
              {(field) => (
                <Field>
                  <FieldLabel>Categories</FieldLabel>
                  <div className="grid grid-cols-2 gap-2 mt-2 border p-3 rounded-md max-h-40 overflow-y-auto">
                    {categories.map((cat) => (
                      <div key={cat.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={cat.id}
                          checked={field.state.value.includes(cat.id)}
                          onChange={(e) => {
                            const current = field.state.value;
                            if (e.target.checked) {
                              field.handleChange([...current, cat.id]);
                            } else {
                              field.handleChange(current.filter((id) => id !== cat.id));
                            }
                          }}
                        />
                        <label htmlFor={cat.id} className="text-sm cursor-pointer">
                          {cat.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              form="assign-form"
              type="submit"
              className="w-full"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Assign Categories"}
            </Button>
          )}
        </form.Subscribe>
      </CardFooter>
    </Card>
  );
}