"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/test-auth");
    }
  }, [status, router]);

  return (
      <Card className="w-full max-w-sm mx-auto mt-40">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in to access the application</CardDescription>
        </CardHeader>
        <CardContent> 
          <p className="mb-4">Please sign in using your Google account.</p>
        </CardContent>
        <CardFooter>  
          <Button
            variant="outline"
            onClick={() => signIn("google", { callbackUrl: "/test-auth" })}
            className="w-full"
          >
            Sign in with Google
          </Button>
        </CardFooter>

      </Card>
  );
}
