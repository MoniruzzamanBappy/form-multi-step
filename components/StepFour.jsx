"use client";

export default function StepFour({
  formData,
  prevStep,
  handleFinalSubmission,
}) {
  return (
    <div className="break-all">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b pb-3">
        Review Your Information
      </h2>

      <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-lg shadow-sm mb-6 bg-gray-50 dark:bg-gray-900">
        <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              Full Name:
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              {formData.fullName}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              Email:
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              {formData.email}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              Phone Number:
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              {formData.phoneNumber}
            </span>
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-300 border-t pt-4">
          Address Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              Street Address:
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              {formData.streetAddress}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              City:
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              {formData.city}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              Zip Code:
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              {formData.zipCode}
            </span>
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-300 border-t pt-4">
          Account Setup
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              Username:
            </span>
            <span className="text-gray-800 dark:text-gray-100">
              {formData.username}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-600 dark:text-gray-400 block">
              Password:
            </span>
            <span className="text-gray-800 dark:text-gray-100">••••••••</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          className="px-5 py-2.5 bg-gray-600 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleFinalSubmission}
          className="px-5 py-2.5 bg-teal-600 dark:bg-teal-700 hover:bg-teal-700 dark:hover:bg-teal-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
