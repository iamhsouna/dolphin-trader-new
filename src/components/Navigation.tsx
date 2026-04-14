"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { ModeToggle } from "./ModeToggle";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { name: t("products"), items: [
      { href: "/products/forex", label: t("forex"), icon: "💱" },
      { href: "/products/metals", label: t("metals"), icon: "🥇" },
      { href: "/products/commodities", label: t("commodities"), icon: "🛢️" },
      { href: "/products/indices", label: t("indices"), icon: "📊" },
      { href: "/products/crypto", label: t("crypto"), icon: "₿" },
      { href: "/products/shares", label: t("shares"), icon: "📈" },
    ]}
  ];

  const platforms = [
    { name: t("platforms"), items: [
      { href: "/platforms/mt5", label: t("metaTrader5"), icon: "📱" },
      { href: "/platforms/mobile", label: t("mobileApps"), icon: "📲" },
      { href: "/platforms/webtrader", label: t("webTrader"), icon: "🌐" },
    ]}
  ];

  const company = [
    { name: t("company"), items: [
      { href: "/about", label: t("aboutUs"), icon: "🏢" },
      { href: "/contact", label: t("contact"), icon: "📧" },
      { href: "/faq", label: t("faq"), icon: "❓" },
      { href: "/partner", label: t("partnership"), icon: "🤝" },
    ]}
  ];

  const navItems: Array<{
    key: string;
    name?: string;
    items?: Array<{ href: string; label: string; icon: string }>;
    href?: string;
    label?: string;
    icon?: string;
  }> = [
    { key: "products", name: t("products"), items: products[0].items },
    { key: "platforms", name: t("platforms"), items: platforms[0].items },
    { key: "company", name: t("company"), items: company[0].items },
    { key: "copy-trading", href: "/copy-trading", label: t("copyTrading"), icon: "📈" },
    { key: "trading-tools", href: "/trading-tools", label: t("tradingTools"), icon: "🛠️" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50"
          : "bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
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
                      onMouseEnter={() => setOpenDropdown(item.key)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                        className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.key ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.key && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-xl shadow-black/20 py-2 animate-fade-in z-50">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                            >
                              <span>{subItem.icon}</span>
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                    >
                      <span>{item.icon}</span>
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
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                {t("login")}
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25">
                {t("getStarted")}
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800/50 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.key}>
                {item.items ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-cyan-400"
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
                            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                          >
                            <span>{subItem.icon}</span>
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
                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-800/50 flex flex-col gap-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  {t("login")}
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
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
