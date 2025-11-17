"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/test-auth");
    }
  }, [status, router]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Test Login</h1>
      <button onClick={() => signIn("google", { callbackUrl: "/test-auth" })}>
        Sign in with Google
      </button>
    </div>
  );
}
