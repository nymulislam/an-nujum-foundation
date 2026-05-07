"use client";

import {
    Button,
    Card,
    Checkbox,
    Form,
    Input,
    InputGroup,
    Label,
    Link,
    TextField,
} from "@heroui/react";
import { Envelope, Eye, EyeSlash, LogoFacebook } from "@gravity-ui/icons";
import { BsGoogle } from "react-icons/bs";
import { useState } from "react";

// inputGroupClass updated for Dark Theme
const inputGroupClass = [
    "w-full rounded-xl border border-white/10 bg-white/5",
    "text-white text-sm placeholder:text-slate-500",
    "focus-within:outline-none focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20",
    "transition-all duration-300",
].join(" ");

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <div className="grid place-items-center min-h-screen bg-[#080808] px-4">
            <Card className="w-full max-w-md border border-white/5 shadow-2xl bg-[#111] rounded-2xl">

                {/* ── Header ── */}
                <Card.Header className="flex flex-col items-center gap-1 px-8 pt-8 pb-0">
                    <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center mb-3 shadow-sm shadow-amber-400/20">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7l10 5 10-5-10-5Z" fill="#0D0D0D" />
                            <path d="M2 17l10 5 10-5" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
                            <path d="M2 12l10 5 10-5" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <Card.Title className="text-2xl font-extrabold text-white tracking-tight">
                        Welcome back
                    </Card.Title>
                    <Card.Description className="text-slate-400 text-sm text-center mt-1">
                        Please enter your details to sign in.
                    </Card.Description>
                </Card.Header>

                <Form onSubmit={onSubmit}>
                    {/* ── Body ── */}
                    <Card.Content className="flex flex-col gap-5 px-8 pt-6 pb-0">

                        {/* Email */}
                        <TextField name="email" type="email" className="flex flex-col gap-1.5">
                            <Label className="text-sm font-semibold text-slate-200">
                                Email address
                            </Label>
                            <InputGroup className={inputGroupClass}>
                                <InputGroup.Input placeholder="name@email.com" className="bg-transparent text-white" />
                                <InputGroup.Suffix>
                                    <Envelope className="size-4 text-slate-500" />
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        {/* Password */}
                        <TextField name="password" type="password" className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <Label className="text-sm font-semibold text-slate-200">
                                    Password
                                </Label>
                                <Link
                                    href="#"
                                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <InputGroup className={inputGroupClass}>
                                <InputGroup.Input
                                    className="w-full bg-transparent text-white"
                                    type={isVisible ? "text" : "password"}
                                    placeholder="••••••••"
                                />
                                <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        className="text-slate-400 hover:bg-transparent hover:text-amber-400"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        {/* Remember me */}
                        <Checkbox id="remember-me" className="mt-1">
                            <Checkbox.Control className="border-white/20 data-[selected=true]:bg-amber-400 data-[selected=true]:border-amber-400">
                                <Checkbox.Indicator className="text-black" />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label htmlFor="remember-me" className="text-sm text-slate-300 cursor-pointer">
                                    Remember me
                                </Label>
                            </Checkbox.Content>
                        </Checkbox>

                    </Card.Content>

                    {/* ── Footer ── */}
                    <Card.Footer className="flex flex-col gap-4 px-8 pt-5 pb-8">

                        {/* Sign in */}
                        <Button
                            type="submit"
                            className="w-full h-11 rounded-xl font-bold text-sm text-black bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all duration-300 shadow-sm shadow-amber-900/20 hover:shadow-md"
                        >
                            Sign In
                        </Button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-white/5" />
                            <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">
                                or continue with
                            </span>
                            <div className="flex-1 h-px bg-white/5" />
                        </div>

                        {/* Social buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="h-10 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-medium text-sm hover:bg-white/10 hover:border-amber-400/50 flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                <BsGoogle size={15} className="text-amber-400" />
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="h-10 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-medium text-sm hover:bg-white/10 hover:border-amber-400/50 flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                <LogoFacebook className="size-4 text-amber-400" />
                                Facebook
                            </Button>
                        </div>

                        {/* Register */}
                        <p className="text-center text-sm text-slate-400">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300"
                            >
                                Register now
                            </Link>
                        </p>

                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;