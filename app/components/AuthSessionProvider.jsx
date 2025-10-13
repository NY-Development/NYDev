// app/components/AuthSessionProvider.jsx
'use client';

import { SessionProvider } from 'next-auth/react';

// This component is required to enable the useSession hook in client components
export default function AuthSessionProvider({ children }) {
  // You can optionally pass the session prop if you fetch it server-side, 
  // but for simplicity, we rely on the default client-side fetching here.
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}