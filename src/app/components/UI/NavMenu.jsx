import { Bars, CircleInfo, Headphones, House, Picture, SquareArticle, Timeline } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import MyAccount from "./MyAccount";
import { Icon } from "@iconify/react";

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
      {/* Trigger Button - Adaptive to Scroll */}
      <Button
        variant="ghost"
        className={`border transition-all duration-300 rounded-full px-4 ${
          scrolled
            ? "border-stone-200 bg-white/80 backdrop-blur-md text-stone-800 shadow-sm hover:bg-stone-50"
            : "border-white/30 bg-transparent text-white hover:bg-white/10"
        }`}
      >
        <Bars className="size-5" />
      </Button>

      <Drawer.Backdrop className="bg-stone-900/40 backdrop-blur-sm">
        <Drawer.Content placement="left">
          <Drawer.Dialog className="bg-white border-none shadow-2xl h-full flex flex-col w-[320px]">
            
            {/* Header Area */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
              <Image
                width={130}
                height={36}
                src="/ANF-Eng-Horizontal-Black.png"
                alt="An-Nujum Foundation"
                className="object-contain"
              />
              <Drawer.CloseTrigger className="p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-900 rounded-full transition-colors">
                <Icon icon="solar:close-circle-bold" className="text-xl" />
              </Drawer.CloseTrigger>
            </div>

            {/* Subtle Arabic Motif Section */}
            <div className="px-6 pt-6 pb-2 relative overflow-hidden group">
              <p className="font-serif text-yellow-600/70 text-lg italic text-right leading-relaxed font-semibold" dir="rtl">
                وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
              </p>
              <div className="h-0.5 w-full bg-linear-to-r from-yellow-400/50 via-yellow-100/15 to-transparent mt-3" />
              {/* Floating Decorative Star Backdrop */}
              <div className="absolute -right-4 -top-4 opacity-[0.05] pointer-events-none group-hover:rotate-45 transition-transform duration-1000">
                <Icon icon="solar:star-bold" className="text-7xl text-yellow-400" />
              </div>
            </div>

            {/* Navigation Body */}
            <Drawer.Body className="py-4 flex-1">
              <nav className="flex flex-col gap-1.5 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl px-4 py-3.5 text-base font-medium text-stone-700 transition-all hover:bg-yellow-50 hover:text-yellow-700 group active:scale-[0.98]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 group-hover:shadow-inner transition-all shrink-0">
                      <item.icon className="size-5 text-yellow-600 group-hover:text-yellow-700 transition-colors" />
                    </div>
                    <span className="tracking-tight">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </Drawer.Body>

            {/* Actions Area */}
            <div className="px-6 pb-6 space-y-4">
              {/* Primary CTA */}
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-black font-bold py-4 rounded-2xl text-sm hover:bg-yellow-500 transition-all duration-300 shadow-xl shadow-yellow-400/25 active:translate-y-0.5"
              >
                <Icon icon="solar:heart-bold" className="text-lg" />
                Donate Now
              </Link>

              {/* Account Section - Integration with Light Theme */}
              <div className="pt-4 border-t border-stone-100">
                <div className="p-1 rounded-2xl bg-stone-50/80 border border-stone-100">
                  <MyAccount />
                </div>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="px-6 py-4 bg-stone-50 text-center">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                Serving the Ummah since 2021
              </p>
            </div>

          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}