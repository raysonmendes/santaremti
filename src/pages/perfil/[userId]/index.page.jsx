import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/wrapper";
// import { getUserByEmail } from "../../lib/fetchUsers";

function ProfilePage() {
  const [user, setUser] = useState(null);

  const session = useSession();
  const router = useRouter();

  const { userId } = router.query;

  useEffect(() => {
    // if (session) {
    //   async function getUser() {
    //     const usuario = await getUserByEmail(session.data.user.email);
    //   }
    //   getUser();
    // }
    console.log("router query>: ", userId);
  }, []);

  return (
    <>
      <h2>Meu perfil</h2>
      <Wrapper>
        <strong>nome:</strong>
        <p>{user?.name}</p>
      </Wrapper>
    </>
  );
}

export default ProfilePage;
