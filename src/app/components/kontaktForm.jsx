"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Button from "./button";

export default function KontaktForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_wj6fh2o",
        "template_khdk9ih",
        {
          name: data.name,
          company: data.company,
          email: data.email,
          message: data.message,
        },
        "B03wYMdLnGyLaM57B"
      );

      reset(
        { name: "", company: "", email: "", message: "" },
        { keepIsSubmitSuccessful: true }
      );
    } catch (error) {
      console.error("EmailJS error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full space-y-4"
    >
      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium">Navn</label>
        <input
          type="text"
          {...register("name", { required: "Navn er påkrævet" })}
          className="w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:border-black"
        />
        {errors.name && (
          <p className="text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium">Virksomhed</label>
        <input
          type="text"
          {...register("company")}
          className="w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:border-black"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email er påkrævet",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Indtast en gyldig email",
            },
          })}
          className="w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:border-black"
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium">
          Projektbeskrivelse / Besked
        </label>
        <textarea
          rows={5}
          {...register("message", { required: "Skriv gerne en kort besked" })}
          className="w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:border-black resize-none"
        />
        {errors.message && (
          <p className="text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Button
          type="submit"
          knapTekst={isSubmitting ? "Sender..." : "Send Besked"}
        />

        {isSubmitSuccessful && (
          <p className="text-xl text-green-600 mt-2">
            Tak for din besked! Vi vender tilbage hurtigst muligt.
          </p>
        )}
      </div>
    </form>
  );
}
