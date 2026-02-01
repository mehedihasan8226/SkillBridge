"use client";

import { createCategories } from "@/actions/admin.action";
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
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";

/* ---------------- Schema ---------------- */
const categorySchema = z.object({
  name: z
    .string()
    .min(2, "Category name must be at least 2 characters")
    .max(50, "Category name is too long"),
});

/* ---------------- Component ---------------- */
export default function CategoryForm() {
  const form = useForm({
    defaultValues: {
      name: "",
    },
    validators: {
      onSubmit: categorySchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating category...");

      try {
        const res = await createCategories(value);
        console.log(res);
        
        if (res?.data && res.data.success === false) {
          toast.error(res.data.message, { id: toastId });
          return;
        }

        if (res?.error) {
          toast.error(res.error.message || "Failed to create category", { id: toastId });
          return;
        }

        toast.success("Category created successfully!", { id: toastId });
        form.reset();
      } catch (err) {
        toast.error("Something went wrong", { id: toastId });
        console.error("Submission Error:", err);
      }
    },
  });

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Create Category</CardTitle>
        <CardDescription>
          Add a new category for your courses or products.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="category-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Category Name Field */}
            <form.Field name="name">
              {(field) => (
                <Field>
                  <FieldLabel>Category Name</FieldLabel>
                  <Input
                    placeholder="e.g. Math, Science, Art"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              form="category-form"
              type="submit"
              className="w-full"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Category"}
            </Button>
          )}
        </form.Subscribe>
      </CardFooter>
    </Card>
  );
}