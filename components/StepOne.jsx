"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().nonempty({ message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone Number must be at least 10 digits" }),
});

export default function StepOne({ formData, updateFormData, nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b pb-3 border-gray-200 dark:border-gray-700">
        Personal Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name Field */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("fullName")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1.5 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1.5 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            {...register("phoneNumber")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1.5 font-medium">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            disabled={true}
            type="button"
            className="px-5 py-2.5 bg-gray-300 dark:bg-gray-600 text-white rounded-lg cursor-not-allowed opacity-70"
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
