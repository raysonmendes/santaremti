import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToDatabase from "../../../lib/mongodb";
import User from "../../../models/user";

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
    //ao logar, cadastrar usuario no banco, caso ele não exista
    async signIn({ user }) {
      await connectToDatabase();
      const { email, name, image } = user;

      try {
        const filter = { email: email };
        const options = { upsert: true };

        //cria objeto com informações do usuário
        const updateDoc = {
          $setOnInsert: {
            name: name,
            email: email,
            avatarUri: image,
          },
        };

        //usa uma query de atualizar para conseguir inserir um novo usuário apenas se ele não existir no banco
        //caso contrário, não faz nada devido a flag 'setOnInsert' passada no objeto da query de inserção
        var created = await User.updateOne(filter, updateDoc, options);

        return true;
      } catch {
        return false;
      }
    },
  },
};
export default NextAuth(authOptions);

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import connectToDatabase from "../../../lib/mongodb";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     // ...add more providers here
//   ],
//   jwt: {
//     encryption: true,
//   },
//   secret: process.env.JWT_SECRET,
//   callbacks: {
//     async signIn({ user }) {
//       const { email, name } = user;

//       try {
//         const { db } = await connectToDatabase();

//         const filter = { email: email };
//         const options = { upsert: true };

//         //cria objeto com informações do usuário
//         const updateDoc = {
//           $setOnInsert: {
//             name: name,
//             email: email,
//             cpf: "",
//             cel: "",
//             role: ["client"],
//           },
//         };

//         const result = await db
//           .collection("users")
//           .updateOne(filter, updateDoc, options);

//         return true;
//       } catch {
//         return false;
//       }
//     },
//   },
// };
// export default NextAuth(authOptions);
