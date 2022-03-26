import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const useRequireAuth = () => {
  const { data: session } = useSession();

  const router = useRouter();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (!session && typeof session != "undefined") {
      router.push(`/login`);
    }
  }, [session, router]);

  return session;
}
