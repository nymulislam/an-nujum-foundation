"use client";

import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
import { LogoFacebook } from "@gravity-ui/icons";
import { BsGoogle } from "react-icons/bs";

const inputClass = [
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2",
  "text-slate-900 text-sm placeholder:text-slate-400",
  "focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30",
  "transition-all duration-300",
].join(" ");

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="grid place-items-center min-h-screen bg-zinc-50 px-4">
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
            Welcome back
          </Card.Title>
          <Card.Description className="text-slate-500 text-sm text-center mt-1">
            Please enter your details to sign in.
          </Card.Description>
        </Card.Header>

        <Form onSubmit={onSubmit}>
          {/* ── Body ── */}
          <Card.Content className="flex flex-col gap-5 px-8 pt-6 pb-0">

            {/* Email */}
            <TextField name="email" type="email" className="flex flex-col gap-1.5">
              <Label className="text-sm font-semibold text-slate-900">
                Email address
              </Label>
              <Input placeholder="you@example.com" className={inputClass} />
            </TextField>

            {/* Password */}
            <TextField name="password" type="password" className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold text-slate-900">
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-300"
                >
                  Forgot password?
                </Link>
              </div>
              <Input placeholder="••••••••" className={inputClass} />
            </TextField>

            {/* Remember me */}
            <Checkbox id="remember-me" className="mt-1 ">
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label htmlFor="remember-me" className="text-sm text-slate-700 cursor-pointer">
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
              className="w-full h-11 rounded-xl font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all duration-300 shadow-sm shadow-amber-200 hover:shadow-md"
            >
              Sign In
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

            {/* Register */}
            <p className="text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-300"
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