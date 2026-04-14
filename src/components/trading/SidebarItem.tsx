"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  LineChart,
  Briefcase,
  ClipboardList,
  Eye,
  Newspaper,
  Settings,
  LucideIcon,
} from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isCollapsed?: boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  href,
  isCollapsed = false,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "sidebar-item relative",
        isActive && "is-active"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="sidebar-item-icon" />
      <span className="sidebar-item-label">{label}</span>
      {isCollapsed && (
        <span className="sidebar-tooltip" role="tooltip">
          {label}
        </span>
      )}
    </Link>
  );
}

export const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: LineChart, label: "Live Charts", href: "/charts" },
  { icon: Briefcase, label: "Portfolio", href: "/portfolio" },
  { icon: ClipboardList, label: "Orders", href: "/orders" },
  { icon: Eye, label: "Watchlist", href: "/watchlist" },
  { icon: Newspaper, label: "News", href: "/news" },
  { icon: Settings, label: "Settings", href: "/settings" },
];
