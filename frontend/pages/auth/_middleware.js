import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !(token && token.user),
  },
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
});