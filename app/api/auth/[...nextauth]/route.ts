import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

 const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
  }
  const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }