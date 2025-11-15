"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Test Login</h1>
      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
}
