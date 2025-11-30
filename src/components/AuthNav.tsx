"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function AuthNav() {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return null;

  return (
    <div className="flex px-12 py-2 border-b-1" style={{ alignItems: "center" }}>
      <h1 className="text-4xl font-extrabold">
        Juno
      </h1>
      <div className="flex items-center ml-auto">
        <span className="font-medium mr-4">Hello, {session.user?.name}</span>
        <Button
            className="font-bold"
            onClick={() => signOut({ callbackUrl: "/login" })}
        >
            Logout
        </Button>
      </div>
    </div>
  );
}
