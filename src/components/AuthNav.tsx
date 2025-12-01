"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AuthNav() {
    const { data: session, status } = useSession();

    if (status !== "authenticated") return null;

    return (
        <div className="flex pl-1 pr-12 py-2 border-b-1" style={{ alignItems: "center" }}>
            <SidebarTrigger className="mr-4" />
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
