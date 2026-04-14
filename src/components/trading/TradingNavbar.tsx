"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import MarketTicker from "./MarketTicker";
import NotificationBell from "./NotificationBell";
import { ModeToggle } from "@/components/ModeToggle";
import LanguageSwitcherTrading from "./LanguageSwitcherTrading";
import UserMenu from "./UserMenu";

interface NavItem {
  key: string;
  label: string;
  href?: string;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

interface TradingNavbarProps {
  locale: string;
}

export default function TradingNavbar({ locale }: TradingNavbarProps) {
  const t = useTranslations("navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      key: "markets",
      label: t("markets"),
      children: [
        { label: t("forex"), href: `/${locale}/products/forex`, description: "Currency pairs" },
        { label: t("crypto"), href: `/${locale}/products/crypto`, description: "Cryptocurrencies" },
        { label: t("commodities"), href: `/${locale}/products/commodities`, description: "Commodities" },
        { label: t("indices"), href: `/${locale}/products/indices`, description: "Stock indices" },
      ],
    },
    {
      key: "forex",
      label: t("forex"),
      href: `/${locale}/products/forex`,
    },
    {
      key: "crypto",
      label: t("crypto"),
      href: `/${locale}/products/crypto`,
    },
    {
      key: "commodities",
      label: t("commodities"),
      href: `/${locale}/products/commodities`,
    },
    {
      key: "indices",
      label: t("indices"),
      href: `/${locale}/products/indices`,
    },
  ];

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 100);
    setDropdownTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={cn("trading-navbar", isScrolled && "is-scrolled")}
      role="banner"
    >
      <div className="trading-navbar-inner">
        <div className="navbar-section-left">
          <Link href={`/${locale}`} className="navbar-brand">
            <Image
              src="/logo.png"
              alt={t("brandName")}
              width={36}
              height={36}
              className="navbar-brand-logo"
            />
            <span className="navbar-brand-name hidden sm:inline">
              {t("brandName")}
            </span>
          </Link>

          <nav className="navbar-section-center hidden lg:flex" role="navigation">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children ? (
                  <>
                    <button
                      className={cn(
                        "nav-link flex items-center gap-1",
                        openDropdown === item.key && "is-active"
                      )}
                      aria-expanded={openDropdown === item.key}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform rtl-flip",
                          openDropdown === item.key && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.key && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="dropdown-menu is-open"
                          role="menu"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="dropdown-item"
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div>
                                <div className="font-medium">{child.label}</div>
                                {child.description && (
                                  <div className="text-xs text-muted-foreground">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="navbar-section-right">
          <div className="hidden md:block">
            <MarketTicker />
          </div>

          <NotificationBell />

          <ModeToggle />

          <LanguageSwitcherTrading />

          <UserMenu />

          <Link
            href={`/${locale}/register`}
            className="navbar-cta hidden sm:inline-flex"
          >
            {t("openAccount")}
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="navbar-mobile-menu lg:hidden p-2 text-foreground"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="navbar-mobile-drawer is-open lg:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-items">
              {navItems.map((item) => (
                <div key={item.key}>
                  {item.children ? (
                    <>
                      <button
                        className="mobile-nav-link w-full text-start"
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.key ? null : item.key)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 ml-auto transition-transform rtl-flip",
                            openDropdown === item.key && "rotate-180"
                          )}
                        />
                      </button>
                      {openDropdown === item.key && (
                        <div className="pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="mobile-nav-link"
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="mobile-nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mobile-nav-divider" />
              <div className="mobile-nav-actions">
                <Link
                  href={`/${locale}/register`}
                  className="navbar-cta w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("openAccount")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
