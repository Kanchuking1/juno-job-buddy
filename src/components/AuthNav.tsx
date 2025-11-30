"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function AuthNav() {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, borderBottom: "1px solid #eee" }}>
      <div style={{ fontSize: 14 }}>
        {session?.user?.name ?? session?.user?.email}
      </div>
      <Button
        onClick={() => signOut({ callbackUrl: "/login" })}
        style={{ padding: "6px 12px", cursor: "pointer" }}
      >
        Logout
      </Button>
    </div>
  );
}
