"use client";

import { Button, Card, Form, Input, Label, Link, TextField } from "@heroui/react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

const LoginPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <div className="grid place-items-center min-h-screen bg-zinc-50 px-4">
            <Card className="w-full max-w-md shadow-2xl border-none p-2 bg-white">

                <Card.Header className="flex flex-col gap-1 items-center p-6 pb-2">
                    <Card.Title className="text-3xl font-extrabold text-zinc-900">Login</Card.Title>
                    <Card.Description className="text-zinc-500 text-center text-sm">
                        Enter your credentials to access your account
                    </Card.Description>
                </Card.Header>

                <Form onSubmit={onSubmit}>
                    <Card.Content className="p-6 pt-2">
                        <div className="flex flex-col gap-6">

                            {/* Email Field */}
                            <TextField name="email" type="email" className="flex flex-col gap-2">
                                <Label className="font-bold text-zinc-900 ml-1 text-sm">Email</Label>
                                <Input
                                    placeholder="email@example.com"
                                    variant="bordered"
                                    radius="xl"
                                />
                            </TextField>

                            {/* Password Field */}
                            <TextField name="password" type="password" className="flex flex-col gap-2">
                                <Label className="font-bold text-zinc-900 ml-1 text-sm">Password</Label>
                                <Input
                                    placeholder="email@example.com"
                                    variant="bordered"
                                    radius="xl"
                                    color="warning"
                                />
                            </TextField>

                        </div>
                    </Card.Content>

                    <Card.Footer className="flex flex-col gap-4 p-6 pt-0">
                        <Button
                            className="w-full bg-amber-500 text-zinc-950 font-bold h-12 text-md shadow-lg shadow-amber-200 hover:bg-amber-600 transition-all duration-300 active:scale-95"
                            type="submit"
                        >
                            Sign In
                        </Button>

                        <Link
                            className="w-full justify-center text-sm text-amber-600 font-bold hover:text-amber-700 transition-colors"
                            href="#"
                        >
                            Forgot password?
                        </Link>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;