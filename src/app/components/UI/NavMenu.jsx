import { Bars, CircleInfo, Headphones, House, Picture, SquareArticle, Timeline } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";

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
          <Drawer.Dialog className="border-green-300 border-2">


         <div className="flex items-center justify-between pl-3 pb-4 border-b border-gray-50">
              <Image
                width={150}
                height={50}
                src="/ANF-Eng-Horizontal-Black.png" // আপনার লোগো পাথ
                alt="An-Nujum Foundation"
                className="object-contain"
              />
              <Drawer.CloseTrigger className="mt-2 w-8 h-8 rounded-full" />
            </div>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}