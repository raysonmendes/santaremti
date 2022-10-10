import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user }) {
      const { email, name } = user;

      try {
        const { db } = await clientPromise();

        const filter = { email: email };
        const options = { upsert: true };

        //cria objeto com informações do usuário
        const updateDoc = {
          $setOnInsert: {
            name: name,
            email: email,
            cpf: "",
            cel: "",
            role: ["client"],
          },
        };

        const result = await db
          .collection("users")
          .updateOne(filter, updateDoc, options);

        return true;
      } catch {
        return false;
      }
    },
  },
};
export default NextAuth(authOptions);
