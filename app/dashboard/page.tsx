"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const userSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    district: z.string().min(2),
    phone: z.string().min(10),
    pincode: z.string().min(4),
    age: z.number().min(18).max(100),
    bloodType: z.string(),
    address: z.string().min(5),
    lastDonationDate: z.string(),
});

const UserDashboard = () => {
    const [user, setUser] = useState({
        name: "Dinoy Raj K",
        email: "dinoyraj@gmail.com",
        district: "Kozhikode",
        phone: "7306185930",
        pincode: "673014",
        age: 21,
        bloodType: "O+ve",
        address: "Karuvally Reenugeetham House",
        lastDonationDate: "11-10-2021",
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: user,
    });
    const [open, setOpen] = useState(false);

    const onSubmit = (data: any) => {
        setUser(data);
        setOpen(false);
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button>Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Label>Full Name</Label>
                                <Input {...register("name")} />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input {...register("email")} type="email" />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                            <Button type="submit" className="w-full">Save</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Card className="col-span-2 shadow-md p-6">
                    <CardContent>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <div className="space-y-2">
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>District:</strong> {user.district}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Pincode:</strong> {user.pincode}</p>
                            <p><strong>Age:</strong> {user.age}</p>
                            <p><strong>Blood Group:</strong> {user.bloodType}</p>
                            <p><strong>Address:</strong> {user.address}</p>
                            <p><strong>Last Donation Date:</strong> {user.lastDonationDate}</p>
                        </div>
                    </CardContent>
                </Card>
                <div>
                    <Card className="shadow-md p-6 mb-4">
                        <CardContent>
                            <h3 className="text-lg font-semibold mb-4">Calendar</h3>
                            <Calendar />
                        </CardContent>
                    </Card>
                    <Card className="shadow-md p-6">
                        <CardContent>
                            <h3 className="text-lg font-semibold mb-4">Donation History</h3>
                            <ul className="space-y-2">
                                <li>13 Dec 2020 - 120 Units</li>
                                <li>28 Nov 2020 - 20 Units</li>
                                <li>04 Nov 2020 - 40 Units</li>
                                <li>15 Oct 2020 - 310 Units</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;