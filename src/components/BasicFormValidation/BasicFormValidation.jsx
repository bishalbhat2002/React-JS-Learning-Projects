import React from "react";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BasicFormValidation = () => {
  const explained = "Here, we have created a simple form Validation. The form has 2 input fields - Name and Email. Name is required, minimum length is 3 and maximum length is 30. Email is required, and must be a valid email.";
  return (
    <>
      <Header heading="Basic Form Validation" />
      <FormBody />

      <Explanation explained={explained} />
    </>
  );
};

export default BasicFormValidation;

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
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            {...register("name", { 
                         required: "Name is required.",
                         minLength:{value: 3, message: "Name must be atlest 3 Characters."},
                         maxLength:{value:30, message: "Name cannot have more than 30 Characters."},
                         }
                    )
               }
            className={`px-2 py-1 text-gray-700 border border-gray-600 rounded focus:border-2 ${errors.name?"border-red-700 border-2":""}`}
          />
          {errors.name && (
            <p className="pl-2 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
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
            className={`px-2 py-1 text-gray-700 border border-gray-600 rounded focus:border-2 ${errors.name?"border-red-700 border-2":""}`}
          />
          {errors.email && (
            <p className="pl-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <input
          type="submit"
          disabled={isSubmitting}
          className="py-1 mx-8 mt-3 rounded bg-blue-400 text-white disabled:opacity-50"
          value={isSubmitting?"Submitting...":"Submit"}
        />
      </form>
    </section>
  );
}
