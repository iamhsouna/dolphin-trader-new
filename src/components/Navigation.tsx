"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown, ArrowLeftRight, Gem, Droplet, BarChart3, TrendingUp, Smartphone, Globe, Building, Mail, HelpCircle, Handshake, Wrench } from "lucide-react";
import { Button } from "./ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { ModeToggle } from "./ModeToggle";

const CryptoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 8H14C15.1 8 16 8.9 16 10V14C16 15.1 15.1 16 14 16H10C8.9 16 8 15.1 8 14V10C8 8.9 8.9 8 10 8" />
    <path d="M10 12H14" />
    <path d="M10 10V14" />
  </svg>
);

export default function Navigation() {
  const t = useTranslations("navigation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 100);
    setDropdownTimeout(timeout);
  };

  const products = [
    { name: t("products"), items: [
      { href: "/products/forex", label: t("forex"), icon: ArrowLeftRight },
      { href: "/products/metals", label: t("metals"), icon: Gem },
      { href: "/products/commodities", label: t("commodities"), icon: Droplet },
      { href: "/products/indices", label: t("indices"), icon: BarChart3 },
      { href: "/products/crypto", label: t("crypto"), icon: CryptoIcon },
      { href: "/products/shares", label: t("shares"), icon: TrendingUp },
    ]}
  ];

  const platforms = [
    { name: t("platforms"), items: [
      { href: "/platforms/mt5", label: t("metaTrader5"), icon: Smartphone },
      { href: "/platforms/mobile", label: t("mobileApps"), icon: Smartphone },
      { href: "/platforms/webtrader", label: t("webTrader"), icon: Globe },
    ]}
  ];

  const company = [
    { name: t("company"), items: [
      { href: "/about", label: t("aboutUs"), icon: Building },
      { href: "/contact", label: t("contact"), icon: Mail },
      { href: "/faq", label: t("faq"), icon: HelpCircle },
      { href: "/partner", label: t("partnership"), icon: Handshake },
    ]}
  ];

  const navItems: Array<{
    key: string;
    name?: string;
    items?: Array<{ href: string; label: string; icon: React.ComponentType<{ className?: string }> }>;
    href?: string;
    label?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }> = [
    { key: "products", name: t("products"), items: products[0].items },
    { key: "platforms", name: t("platforms"), items: platforms[0].items },
    { key: "company", name: t("company"), items: company[0].items },
    { key: "copy-trading", href: "/copy-trading", label: t("copyTrading"), icon: TrendingUp },
    { key: "trading-tools", href: "/trading-tools", label: t("tradingTools"), icon: Wrench },
    { key: "trading", href: "/platforms/webtrader", label: t("trading"), icon: BarChart3 },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-[12px] border-b border-border"
      style={{ backgroundColor: `rgba(var(--navbar-bg-rgb), 0.85)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo-white.png"
                  alt={t("brandName")}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.key} className="relative">
                  {item.items ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                        className="flex items-center gap-1 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.key ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.key && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-xl py-2 animate-fade-in z-50"
                          onMouseEnter={() => handleMouseEnter(item.key)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                            >
                              <subItem.icon className="w-5 h-5 text-accent" />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                    >
                      {item.icon && <item.icon className="w-5 h-5 text-accent" />}
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ModeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-accent">
                {t("login")}
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="btn-primary">
                {t("getStarted")}
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.key}>
                {item.items ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-accent"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.key ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.key && (
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                          >
                            <subItem.icon className="w-5 h-5 text-accent" />
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                  >
                    {item.icon && <item.icon className="w-5 h-5 text-accent" />}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-foreground hover:text-accent">
                  {t("login")}
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full btn-primary">
                  {t("getStarted")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
