# Multi-Step Form Project

This project is a multi-step form built with Next.js, React, and Tailwind CSS. The form is designed with client-side validation using React Hook Form and Zod. It includes light/dark mode support and features a dark mode toggle. The form collects user information in multiple steps, displays a review page before final submission, and then logs the collected data to the console while resetting the form.

## Features

- **Multi-Step Form:**  
  Gather user information across four steps: Personal Information, Address Details, Account Setup, and Final Review.
  
- **Form Validation:**  
  Use React Hook Form with Zod to enforce validation rules for each field.
  
- **Password Visibility Toggle:**  
  Enable users to toggle between "Show" and "Hide" for password fields during account setup.
  
- **Final Data Review:**  
  Display a summary of all submitted data before final submission.
  
- **Dark/Light Mode Support:**  
  Responsive dark mode using Tailwind CSS. Toggle dark mode via a dedicated component.
  
- **Responsive Design:**  
  Fully responsive layout that adapts to mobile devices using Tailwind’s utility classes.

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Tailwind CSS](https://tailwindcss.com/)
- *(Optional)* React Query or RTK Query for simulating API calls

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MoniruzzamanBappy/form-multi-step.git
   cd form-multi-step
2. **Install dependencies:**

   ```bash
   npm install
   3. **Run the development server:**

   ```bash
   npm run dev

Usage
- **Navigation Through Steps:**
Start filling out your information step by step. Use the "Next" and "Previous" buttons to navigate between form steps.

- **Dark Mode Toggle:**
Use the dark mode toggle button (available in the header or a designated location) to switch between light and dark themes.

- **Final Submission:**
On the review page, click the "Submit" button to log your information to the console. This will also reset the form back to the initial step

### Project Structure
├── components
│   ├── DarkModeToggle.jsx     // Component to toggle dark mode
│   ├── MultiStepForm.jsx      // Main multi-step form container
│   ├── StepOne.jsx            // Collects personal information
│   ├── StepTwo.jsx            // Collects address details
│   ├── StepThree.jsx          // Collects account setup details (with password toggles)
│   └── StepFour.jsx           // Review and final submission
├── pages / app                // Next.js pages or app folder for routing
├── public                     // Static assets
├── styles
│   └── globals.css            // Global CSS including Tailwind directives
├── tailwind.config.js         // Tailwind CSS configuration
└── package.json               // Project configurations and dependencies
