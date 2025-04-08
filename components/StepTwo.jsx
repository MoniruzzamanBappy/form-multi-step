"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  streetAddress: z.string().nonempty({ message: "Street Address is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  zipCode: z
    .string()
    .nonempty({ message: "Zip Code is required" })
    .regex(/^\d+$/, { message: "Zip Code must contain only numbers" })
    .min(5, { message: "Zip Code must be at least 5 digits" }),
});

export default function StepTwo({
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
      streetAddress: formData.streetAddress,
      city: formData.city,
      zipCode: formData.zipCode,
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
        Address Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Street Address
          </label>
          <input
            {...register("streetAddress")}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter your street address"
          />
          {errors.streetAddress && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1.5 font-medium">
              {errors.streetAddress.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            City
          </label>
          <input
            {...register("city")}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter your city"
          />
          {errors.city && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1.5 font-medium">
              {errors.city.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
            Zip Code
          </label>
          <input
            {...register("zipCode")}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter your zip code"
          />
          {errors.zipCode && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1.5 font-medium">
              {errors.zipCode.message}
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
