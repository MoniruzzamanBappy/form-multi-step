"use client";
import { useState } from "react";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const initialFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  streetAddress: "",
  city: "",
  zipCode: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleFinalSubmission = () => {
    console.log("Final Submitted Data:", formData);
    // Reset the form data and steps
    setFormData(initialFormData);
    setStep(1);
  };

  // Total number of steps in the form
  const totalSteps = 4;

  // Step titles for the progress tracker
  const stepTitles = ["Personal Info", "Address", "Account", "Review"];

  return (
    <div className="w-5/6 p-6 bg-white dark:bg-gray-800 dark:text-gray-100 shadow rounded">
      {/* Step Progress Tracker */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
            (stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-full border-2 
                  ${
                    step === stepNumber
                      ? "border-teal-600 bg-teal-600 text-white"
                      : stepNumber < step
                      ? "border-teal-600 bg-white dark:bg-gray-800 text-teal-600"
                      : "border-gray-300 bg-white dark:bg-gray-800 text-gray-500"
                  }`}
                >
                  {stepNumber < step ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    stepNumber
                  )}
                </div>
                <span className="mt-2 text-xs text-center">
                  {stepTitles[stepNumber - 1]}
                </span>
              </div>
            )
          )}
        </div>

        {/* Progress Bar */}
        <div className="relative mt-4">
          <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 w-full rounded"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-teal-600 rounded transition-all duration-300 ease-in-out"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <StepOne
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <StepThree
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <StepFour
          formData={formData}
          prevStep={prevStep}
          handleFinalSubmission={handleFinalSubmission}
        />
      )}
    </div>
  );
}
