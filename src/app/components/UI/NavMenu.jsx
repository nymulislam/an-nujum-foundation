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
      <Button variant="outline">
        <Bars />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog className="bg-white border-none shadow-2xl h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-50">
              <Image
                width={140}
                height={40}
                src="/ANF-Eng-Horizontal-Black.png"
                alt="An-Nujum Foundation"
                className="object-contain"
              />
              <Drawer.CloseTrigger className="p-2 hover:bg-slate-100 rounded-full transition-colors" />
            </div>

            {/* Body */}
            <Drawer.Body className="py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-amber-50 hover:text-amber-600"
                  >
                    <item.icon className="size-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Drawer.Body>

            {/* Bottom Section - My Account */}
            <div className="p-4 mt-auto border-t border-slate-100 bg-slate-50/50">
              <MyAccount />
            </div>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}