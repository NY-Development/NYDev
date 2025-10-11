// app/enroll/success/page.jsx

import { Suspense } from 'react';
import SuccessContent from './SuccessContent'; // Import the new client component
import { Loader2 } from 'lucide-react'; // Import a simple loading icon

// Define a simple loading fallback component
const LoadingFallback = () => (
    <div className="max-w-md w-full text-center p-8">
        <Loader2 className="w-10 h-10 text-indigo-500 mx-auto mb-4 animate-spin" />
        <p className="text-gray-600 dark:text-gray-400">Loading payment details...</p>
    </div>
);


export default function EnrollmentSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      {/* Wrap the client component that uses useSearchParams() 
        in a Suspense boundary. This resolves the build error.
      */}
      <Suspense fallback={<LoadingFallback />}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}