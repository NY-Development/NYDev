// Example using the App Router structure: /app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      // You must get these from Google Developer Console
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const allowedEmails = ['yamlaknegash96@gmail.com'];
      
      // Allow sign-in only if the user's email is in the allowed list
      if (allowedEmails.includes(user.email)) {
        return true
      } else {
        // Return false to prevent sign-in and redirect to an error page
        return '/unauthorized' 
      }
    },
    // Session callback to ensure the session only exists for authorized users
    async session({ session, token, user }) {
        if (!session.user.email || !allowedEmails.includes(session.user.email)) {
            return null; // Don't return a session if email is not allowed
        }
        return session
    }
  },
  // Define custom pages for sign-in, sign-out, etc.
  pages: {
    signIn: '/admin/login', 
    error: '/admin/unauthorized',
  }
})

export { handler as GET, handler as POST }