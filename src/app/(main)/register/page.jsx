"use client";

import {
    Button,
    Card,
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

const inputGroupClass = [
    "w-full rounded-xl border border-slate-200 bg-white",
    "text-slate-900 text-sm placeholder:text-slate-400",
    "focus-within:outline-none focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/30",
    "transition-all duration-300",
].join(" ");

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        alert("Registration successful!");
    };

    return (
        <div className="grid place-items-center min-h-screen bg-zinc-50 px-4 py-26">
            <Card className="w-full max-w-md border border-slate-100 shadow-xl bg-white rounded-2xl">

                {/* ── Header ── */}
                <Card.Header className="flex flex-col items-center gap-1 px-8 pt-8 pb-0">
                    <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center mb-3 shadow-sm shadow-amber-200">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7l10 5 10-5-10-5Z" fill="#0D0D0D" />
                            <path d="M2 17l10 5 10-5" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
                            <path d="M2 12l10 5 10-5" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <Card.Title className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        Create an account
                    </Card.Title>
                    <Card.Description className="text-slate-500 text-sm text-center mt-1">
                        Fill in the details below to get started.
                    </Card.Description>
                </Card.Header>

                <Form onSubmit={onSubmit}>
                    {/* ── Body ── */}
                    <Card.Content className="flex flex-col gap-5 px-8 pt-6 pb-0">

                        {/* Full Name — two columns */}
                        <div className="grid grid-cols-2 gap-3">
                            <TextField name="firstName" className="flex flex-col gap-1.5">
                                <Label className="text-sm font-semibold text-slate-900">
                                    First name
                                </Label>
                                <Input placeholder="Mohammad" className={inputGroupClass} />
                            </TextField>

                            <TextField name="lastName" className="flex flex-col gap-1.5">
                                <Label className="text-sm font-semibold text-slate-900">
                                    Last name
                                </Label>
                                <Input placeholder="Rahman" className={inputGroupClass} />
                            </TextField>
                        </div>

                        {/* Email */}
                        <TextField name="email" type="email" className="flex flex-col gap-1.5">
                            <Label className="text-sm font-semibold text-slate-900">
                                Email address
                            </Label>
                             <InputGroup className={inputGroupClass}>
                                <InputGroup.Input placeholder="name@email.com" />
                                <InputGroup.Suffix>
                                    <Envelope className="size-4 text-muted" />
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        {/* Phone */}
                        <TextField name="phone" type="tel" className="flex flex-col gap-1.5">
                            <Label className="text-sm font-semibold text-slate-900">
                                Phone number
                            </Label>
                            <Input placeholder="+880 1X XX XXX XXX" className={inputGroupClass} />
                        </TextField>

                        {/* Password */}
                        <TextField name="password" type="password" className="flex flex-col gap-1.5">
                            <Label className="text-sm font-semibold text-slate-900">
                                Password
                            </Label>
                            <InputGroup className={inputGroupClass}>
                                <InputGroup.Input
                                    className="w-full"
                                    type={isVisible ? "text" : "password"}
                                    value={isVisible ? "87$2h.3diua" : "••••••••"}
                                />
                                <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        {/* Confirm Password */}
                        <TextField name="confirmPassword" type="password" className="flex flex-col gap-1.5">
                            <Label className="text-sm font-semibold text-slate-900">
                                Confirm password
                            </Label>
                            <InputGroup className={inputGroupClass}>
                                <InputGroup.Input
                                    className="w-full"
                                    type={isConfirmPassVisible ? "text" : "password"}
                                    value={isConfirmPassVisible ? "87$2h.3diua" : "••••••••"}
                                />
                                <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isConfirmPassVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsConfirmPassVisible(!isConfirmPassVisible)}
                                    >
                                        {isConfirmPassVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        {/* Terms */}
                        <p className="text-xs text-slate-500 leading-relaxed">
                            By creating an account, you agree to our{" "}
                            <Link href="#" className="font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-300">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-300">
                                Privacy Policy
                            </Link>.
                        </p>

                    </Card.Content>

                    {/* ── Footer ── */}
                    <Card.Footer className="flex flex-col gap-4 px-8 pt-5 pb-8">

                        {/* Register button */}
                        <Button
                            type="submit"
                            className="w-full h-11 rounded-xl font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all duration-300 shadow-sm shadow-amber-200 hover:shadow-md"
                        >
                            Create Account
                        </Button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-slate-200" />
                            <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">
                                or continue with
                            </span>
                            <div className="flex-1 h-px bg-slate-200" />
                        </div>

                        {/* Social buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="h-10 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-amber-50 hover:border-amber-100 flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                <BsGoogle size={15} />
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="h-10 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-amber-50 hover:border-amber-100 flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                <LogoFacebook className="size-4" />
                                Facebook
                            </Button>
                        </div>

                        {/* Login link */}
                        <p className="text-center text-sm text-slate-500">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-300"
                            >
                                Sign in
                            </Link>
                        </p>

                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
};

export default RegisterPage;