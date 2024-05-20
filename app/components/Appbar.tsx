"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();

  return (
    <div>
      <button onClick={() => signIn()}>Signin</button>
      <button onClick={() => signOut()}>SignOut</button>
      {JSON.stringify(session)}
    </div>
  );
};
