import { Bars, CircleInfo, Headphones, House, Picture, SquareArticle, Timeline } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import MyAccount from "./MyAccount";

const navItems = [
  { icon: House, label: "Home", href: "/" },
  { icon: CircleInfo, label: "About Us", href: "/about" },
  { icon: Timeline, label: "Activities", href: "/activities" },
  { icon: Picture, label: "Gallery", href: "/gallery" },
  { icon: SquareArticle, label: "Blogs", href: "/blogs" },
  { icon: Headphones, label: "Contact", href: "/contact" },
];

export function NavMenu({ scrolled }) {
  return (
    <Drawer>
      <Button
        variant="ghost"
        className={`border transition-colors ${
          scrolled
            ? "border-stone-200 hover:bg-amber-50 text-stone-700"
            : "border-white/20 hover:bg-white/10 text-white"
        }`}
      >
        <Bars />
      </Button>

      <Drawer.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Drawer.Content placement="left">
          <Drawer.Dialog className="bg-white border-none shadow-2xl h-full flex flex-col w-80">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
              <Image
                width={140}
                height={40}
                src="/ANF-Eng-Horizontal-Black.png"
                alt="An-Nujum Foundation"
                className="object-contain"
              />
              <Drawer.CloseTrigger className="p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 rounded-full transition-colors" />
            </div>

            {/* Decorative Arabic */}
            <div className="px-5 pt-5 pb-2">
              <p className="font-serif text-amber-400/40 text-lg italic text-right" dir="rtl">
                وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
              </p>
              <div className="h-px bg-gradient-to-r from-amber-400/30 via-amber-400/10 to-transparent mt-3" />
            </div>

            {/* Nav Links */}
            <Drawer.Body className="py-3 flex-1">
              <nav className="flex flex-col gap-1 px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-semibold text-stone-500 transition-all hover:bg-amber-50 hover:text-amber-700 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors flex-shrink-0">
                      <item.icon className="size-4 text-stone-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </Drawer.Body>

            {/* Donate CTA */}
            <div className="px-5 pb-4">
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 w-full bg-amber-400 text-black font-black py-3.5 rounded-xl text-sm hover:bg-amber-500 transition-all duration-300 shadow-[0_4px_20px_rgba(251,191,36,0.3)]"
              >
                Donate Now
              </Link>
            </div>

            {/* Bottom */}
            <div className="px-5 pb-5 pt-3 border-t border-stone-100 bg-stone-50/50">
              <MyAccount />
            </div>

          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}