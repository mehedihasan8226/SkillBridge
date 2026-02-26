


"use client";

import { createTutoravailability } from "@/actions/tutor.action"; // Adjust path
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
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";

/* ---------------- Schema ---------------- */
const availabilitySchema = z.object({
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  isBooked: z.boolean(),
}).refine((data) => new Date(data.endTime) > new Date(data.startTime), {
  message: "End time must be after start time",
  path: ["endTime"],
});

/* ---------------- Component ---------------- */
export default function CreateAvailabilityForm() {
  const form = useForm({
    defaultValues: {
      startTime: "",
      endTime: "",
      isBooked: false,
    },
    validators: {
      onSubmit: availabilitySchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Saving availability...");

      // Format data to match your requested JSON structure
      const payload = {
        startTime: new Date(value.startTime).toISOString(),
        endTime: new Date(value.endTime).toISOString(),
        isBooked: value.isBooked,
      };

      try {
        const res = await createTutoravailability(payload);

        if (res?.error) {
          toast.error(res.error.message || "Failed to save", { id: toastId });
          return;
        }

        toast.success("Availability Created", { id: toastId });
        form.reset();
      } catch (err) {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Set Availability</CardTitle>
        <CardDescription>
          Choose your start and end times for tutoring.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="availability-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Start Time Field */}
            <form.Field name="startTime">
              {(field) => (
                <Field>
                  <FieldLabel>Start Time</FieldLabel>
                  <Input
                    type="datetime-local"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* End Time Field */}
            <form.Field name="endTime">
              {(field) => (
                <Field>
                  <FieldLabel>End Time</FieldLabel>
                  <Input
                    type="datetime-local"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* Is Booked Field (Checkbox) */}
            <form.Field name="isBooked">
              {(field) => (
                <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                  <Checkbox
                    checked={field.state.value}
                    onCheckedChange={(checked) => field.handleChange(!!checked)}
                  />
                  <FieldLabel className="cursor-pointer">
                    Mark as already booked
                  </FieldLabel>
                </div>
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
              form="availability-form"
              type="submit"
              className="w-full"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Create Slot"}
            </Button>
          )}
        </form.Subscribe>
      </CardFooter>
    </Card>
  );
}