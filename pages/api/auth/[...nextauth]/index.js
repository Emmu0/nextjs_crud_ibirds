import NextAuth from "next-auth"
// import { GoogleProvider } from "next-auth/providers/google";
// import Providers  from "next-auth/providers"
import GoogleProvider from 'next-auth/providers/google';

console.log("jai ram 1");
export default NextAuth({
  providers: [
    GoogleProvider({
        clientId:  process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});