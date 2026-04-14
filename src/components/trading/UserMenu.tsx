"use client";

import { useState, useRef } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";

export default function UserMenu() {
  const t = useTranslations("navigation");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    router.push("/login");
  };

  const handleSettings = () => {
    router.push("/settings");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="user-avatar"
          aria-label="User menu"
          aria-expanded={isOpen}
        >
          DM
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        ref={menuRef}
        align="end"
        className="w-48"
        sideOffset={8}
      >
        <DropdownMenuItem onClick={handleProfile} className="gap-2 cursor-pointer">
          <User className="w-4 h-4" />
          <span>{t("profile")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSettings} className="gap-2 cursor-pointer">
          <Settings className="w-4 h-4" />
          <span>{t("settings")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="gap-2 cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="w-4 h-4" />
          <span>{t("logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
