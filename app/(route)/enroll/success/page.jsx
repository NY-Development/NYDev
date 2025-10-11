// app/enroll/success/page.jsx

"use client";
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function EnrollmentSuccessPage() {
  const searchParams = useSearchParams();
  const txRef = searchParams.get('tx_ref');

  // You would typically make an API call here to your backend 
  // to finally verify the transaction status using the txRef.

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border border-green-200 dark:border-green-700/50">
        
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" />
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Enrollment Successful!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your payment was successfully processed. We'll be in touch shortly with course access details.
        </p>
        
        {txRef && (
            <p className="text-sm text-gray-500 dark:text-gray-500 border-t pt-3 mt-3 border-dashed dark:border-gray-700">
                Transaction Reference: <span className="font-mono bg-gray-100 dark:bg-gray-700 p-1 rounded-md text-gray-700 dark:text-gray-200">{txRef}</span>
            </p>
        )}
        
        <a 
          href="/" 
          className="mt-6 inline-block bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}