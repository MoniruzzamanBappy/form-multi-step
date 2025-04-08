"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function StepThree({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep(); // Proceed to the next step
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b pb-3 border-gray-200 dark:border-gray-700">
        Account Setup
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Username
          </label>
          <input
            {...register("username")}
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          {errors.username && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1.5 font-medium">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg pr-20 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1.5 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Re-enter your password"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg pr-20 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1.5 font-medium">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="px-5 py-2.5 bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-opacity-50"
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500 focus:ring-opacity-50"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
