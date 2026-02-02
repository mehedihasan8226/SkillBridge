
"use client";

import { createReviews } from "@/actions/student.action";
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
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import { useForm } from "@tanstack/react-form";
// import { zodValidator } from "@tanstack/zod-form-adapter";
import { toast } from "sonner";
import { z } from "zod";

/* ---------------- Schema ---------------- */
const reviewSchema = z.object({
    tutorId: z
    .string()
    .min(5, "tutorId must be at least 5 characters")
    .max(500, "tutorId is too long"),
  rating: z
    // .number({ invalid_type_error: "Rating must be a number" })
    .number("Rating must be a number")
    .min(1, "Minimum rating is 1")
    .max(5, "Maximum rating is 5"),
  comment: z
    .string()
    .min(5, "Comment must be at least 5 characters")
    .max(500, "Comment is too long"),

});

/* ---------------- Component ---------------- */
export default function ReviewForm({tutorId}: {tutorId: string}) {
  const form = useForm({
    defaultValues: {
      tutorId:tutorId,
      rating: 5,
      comment: "",
    },
    // validatorAdapter: zodValidator(),
    validators: {
      onSubmit: reviewSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Submitting your review...");

      try {
        const res = await createReviews(value);

        // console.log(res.data.message);
        if(res.data && res.data.success == false){
            toast.error(res.data.message, { id: toastId });
            return
        }
        
        if (res?.error) {
          toast.error(res.error.message || "Failed to submit review", { id: toastId });
          return;
        }

        toast.success("Review submitted successfully!", { id: toastId });
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
        <CardTitle>Leave a Review</CardTitle>
        <CardDescription>
          Share your experience with us. Ratings are from 1 to 5.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="review-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Rating Field */}
            <form.Field name="rating">
              {(field) => (
                <Field>
                  <FieldLabel>Rating</FieldLabel>
                  <Input
                    type="number"
                    min={1}
                    max={5}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* Comment Field */}
            <form.Field name="comment">
              {(field) => (
                <Field>
                  <FieldLabel>Comment</FieldLabel>
                  <Textarea
                    placeholder="Describe your experience..."
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    rows={4}
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
              form="review-form"
              type="submit"
              className="w-full"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Post Review"}
            </Button>
          )}
        </form.Subscribe>
      </CardFooter>
    </Card>
  );
}