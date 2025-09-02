import React from "react";
import Header from "../SmallComponents/Header";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AdvancedFormValidation = () => {
  return (
    <>
      <Header heading="Complex Form Validation" />

      <FormBody />
    </>
  );
};

export default AdvancedFormValidation;

function FormBody() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    toast.success("Submitting Form. Please Wait...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Form Submitted Successfully...");
  }

  return (
    <section className="mx-auto w-90 lg:w-160 p-5 bg-green-200 rounded text-md font-semibold text-gray-700">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        
        <div className="flex flex-col mb-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 3,
                message: "Name must be atlest 3 Characters.",
              },
              maxLength: {
                value: 30,
                message: "Name cannot have more than 30 Characters.",
              },
            })}
            className={`px-2 py-1 text-gray-700 border border-gray-600 rounded focus:border-2 ${
              errors.name ? "border-red-700 border-2" : ""
            }`}
          />
          {errors.name && (
            <p className="pl-2 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`px-2 py-1 text-gray-700 border border-gray-600 rounded focus:border-2 ${
              errors.name ? "border-red-700 border-2" : ""
            }`}
          />
          {errors.email && (
            <p className="pl-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            {...register("country", { required: "Country is required" })}
            className="px-2 py-1 border border-gray-600 rounded"
          >
            <option value="" selected={true} disabled={true}>
              Select Country
            </option>
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
          {errors.country && (
            <p className="text-red-400">{errors.country.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label>Gender:</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "Gender is required" })}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                {...register("gender", { required: "Gender is required" })}
                className="mr-2"
              />
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-400">{errors.gender.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="resume">Upload Resume (PDF only):</label>
          <input
            type="file"
            id="resume"
            {...register("resume", {
              required: "File is required",
              validate: {
                fileType: (value) =>
                  value[0]?.type === "application/pdf" || "Only PDF allowed",
                fileSize: (value) =>
                  value[0]?.size <= 2 * 1024 * 1024 || "Max file size 2MB",
              },
            })}
            className="px-2 py-1 border rounded border-gray-400 text-gray-500"
          />
          {errors.resume && (
            <p className="text-red-400">{errors.resume.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>
            <input
              type="checkbox"
              {...register("terms", { required: "You must accept terms" })}
              className="mr-2"
            />
            I accept the Terms & Conditions
          </label>
          {errors.terms && (
            <p className="text-red-400">{errors.terms.message}</p>
          )}
        </div>

        <input
          type="submit"
          disabled={isSubmitting}
          className="py-1 mx-8 mt-3 rounded bg-blue-400 text-white disabled:opacity-50"
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </section>
  );
}
