import { Bars, CircleInfo, Headphones, House, Picture, SquareArticle, Timeline } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import MyAccount from "./MyAccount";

export function NavMenu() {
  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: CircleInfo, label: "About Us", href: "/about" },
    { icon: Timeline, label: "Activities", href: "/activities" },
    { icon: Picture, label: "Gallery", href: "/gallery" },
    { icon: SquareArticle, label: "Blogs", href: "/blogs" },
    { icon: Headphones, label: "Contact", href: "/contact" },
  ];

  return (
    <Drawer>
      <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300">
        <Bars />
      </Button>
      <Drawer.Backdrop className="bg-black/60">
        <Drawer.Content placement="left">
          {/* Main Container - Dark Background */}
          <Drawer.Dialog className="bg-zinc-900 border-none shadow-2xl h-full flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <Image
                width={140}
                height={40}
                src="/ANF-Eng-Horizontal-White.png" // সাদা লোগো ব্যবহার করা হয়েছে
                alt="An-Nujum Foundation"
                className="object-contain"
              />
              <Drawer.CloseTrigger className="p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-full transition-colors" />
            </div>

            {/* Body */}
            <Drawer.Body className="py-4">
              <nav className="flex flex-col gap-2 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition-all hover:bg-zinc-800 hover:text-amber-400 group"
                  >
                    <item.icon className="size-5 transition-colors group-hover:text-amber-400" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Drawer.Body>

            {/* Bottom Section - My Account */}
            <div className="p-4 mt-auto border-t border-zinc-800 bg-zinc-950/50">
              <MyAccount />
            </div>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}