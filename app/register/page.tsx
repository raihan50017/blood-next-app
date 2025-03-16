"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async () => {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            alert("Registration successful");
            router.push("/login");
        } else {
            alert("Registration failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl mb-4 font-semibold">Register</h2>
            <Input type="text" placeholder="Name" className="mb-2 w-64" onChange={(e) => setName(e.target.value)} />
            <Input type="email" placeholder="Email" className="mb-2 w-64" onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" className="mb-2 w-64" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleRegister} className="w-64">
                Sign Up
            </Button>
        </div>
    );
}
