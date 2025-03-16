"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.ok) {
            router.push("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl mb-4 font-semibold">Login</h2>
            <Input
                type="email"
                placeholder="Email"
                className="mb-2 w-64"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                className="mb-2 w-64"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} className="w-64">
                Sign In
            </Button>
        </div>
    );
}
