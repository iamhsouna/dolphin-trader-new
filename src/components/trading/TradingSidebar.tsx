"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeftClose, PanelLeft } from "lucide-react";
import SidebarItem, { sidebarItems } from "./SidebarItem";
import { cn } from "@/lib/utils";

interface TradingSidebarProps {
  locale: string;
}

export default function TradingSidebar({ locale }: TradingSidebarProps) {
  const t = useTranslations("navigation");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) {
      setIsCollapsed(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
    }
  }, [isCollapsed, isMobile]);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const sidebarContent = (
    <>
      <div className="sidebar-header">
        <button
          onClick={isMobile ? toggleMobile : toggleCollapse}
          className="sidebar-toggle"
          aria-label={isMobile ? "Close menu" : isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed && !isMobile ? (
            <PanelLeft className="w-5 h-5 rtl-flip" />
          ) : (
            <PanelLeftClose className="w-5 h-5 rtl-flip" />
          )}
        </button>
      </div>
      <nav className="sidebar-nav" role="navigation" aria-label="Main navigation">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={t(item.labelKey)}
            href={`/${locale}${item.href}`}
            isCollapsed={isCollapsed && !isMobile}
          />
        ))}
      </nav>
    </>
  );

  if (isMobile) {
    return (
      <>
        <button
          onClick={toggleMobile}
          className="sidebar-toggle fixed top-18 left-4 z-50 bg-background border border-border rounded-lg p-2"
          aria-label="Open menu"
          aria-expanded={isMobileOpen}
        >
          <PanelLeft className="w-5 h-5 rtl-flip" />
        </button>

        <AnimatePresence>
          {isMobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="sidebar-overlay is-visible"
                onClick={closeMobile}
                aria-hidden="true"
              />
              <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="mobile-drawer"
                role="dialog"
                aria-label="Navigation menu"
              >
                {sidebarContent}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isCollapsed ? 60 : 240,
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={cn(
        "trading-sidebar",
        isCollapsed && "is-collapsed"
      )}
      role="navigation"
      aria-label="Sidebar navigation"
    >
      {sidebarContent}
    </motion.aside>
  );
}
