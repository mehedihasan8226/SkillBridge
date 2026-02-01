import { useForm } from '@tanstack/react-form';

export default function ReviewForm() {
  const form = useForm({
    defaultValues: {
      rating: 4,
      comment: '',
    },
    onSubmit: async ({ value }) => {
      // Logic for handling the API call
      try {
        await createReviews(value);
        console.log('Review submitted successfully!');
      } catch (error) {
        console.error('Failed to submit review:', error);
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      {/* Rating Field */}
      <form.Field
        name="rating"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Rating:</label>
            <input
              id={field.name}
              type="number"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.valueAsNumber)}
            />
          </div>
        )}
      />

      {/* Comment Field */}
      <form.Field
        name="comment"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Comment:</label>
            <textarea
              id={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <button type="submit" disabled={!canSubmit}>
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        )}
      />
    </form>
  );
}