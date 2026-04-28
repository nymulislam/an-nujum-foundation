import { Input, Label } from "@heroui/react";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="custom-input">Project name</Label>
                <Input
                    id="custom-input"
                    className="rounded-xl border border-border/70 bgsurface px-4 py-2 text-sm shadow-sm focus-visible:border-primary"
                    placeholder="New web app"
                />
            </div>
        </div>
    );
};

export default Footer;