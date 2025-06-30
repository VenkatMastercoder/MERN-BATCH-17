import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  message: z.string().min(5, { message: "Required Min 5 Characters" }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  console.log("isValid:", isValid);
  console.log("isDirty:", isDirty);

  const handleSubmits = (data) => {
    try {
      console.log("Form Data:", data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(watch("name"));

  return (
    <>
      <p>Contact us Page</p>

      <form onSubmit={handleSubmit(handleSubmits)}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border border-red-500"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="text-red-400">{errors.name?.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="border border-red-500"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-red-400">{errors.email?.message}</p>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="border border-red-500"
          {...register("message")}></textarea>
        {errors.message?.message && (
          <p className="text-red-400">{errors.message?.message}</p>
        )}

        <button
          className={!isDirty || !isValid ? "bg-red-500" : "bg-green-500"}
          disabled={!isDirty || !isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
