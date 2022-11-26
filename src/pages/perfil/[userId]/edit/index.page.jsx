import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Wrapper from "../../../../components/wrapper";
// import { getUserByEmail } from "../../lib/fetchUsers";

function ProfilePage() {
  const [user, setUser] = useState(null);

  const session = useSession();

  useEffect(() => {
    // if (session) {
    //   async function getUser() {
    //     const usuario = await getUserByEmail(session.data.user.email);
    //   }
    //   getUser();
    // }
  }, []);

  return (
    <>
      <h2>Meu perfil</h2>
      <Wrapper>editar perfil</Wrapper>
    </>
  );
}

export default ProfilePage;
