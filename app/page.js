import DarkModeToggle from "@/components/DarkModeToggle";
import MultiStepForm from "@/components/MultiStepForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Place the toggle button in a corner */}
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      <MultiStepForm />
    </div>
  );
}
