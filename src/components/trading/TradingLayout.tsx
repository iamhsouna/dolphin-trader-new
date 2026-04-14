"use client";

import { ReactNode, useState, useEffect } from "react";
import TradingNavbar from "./TradingNavbar";
import TradingSidebar from "./TradingSidebar";
import WatchlistPanel from "./WatchlistPanel";

interface TradingLayoutProps {
  children: ReactNode;
  locale: string;
}

export default function TradingLayout({ children, locale }: TradingLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkBreakpoints = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkBreakpoints();
    window.addEventListener("resize", checkBreakpoints);
    return () => window.removeEventListener("resize", checkBreakpoints);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const saved = localStorage.getItem("sidebar-collapsed");
      if (saved !== null) {
        setIsSidebarCollapsed(JSON.parse(saved));
      }
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(isSidebarCollapsed));
    }
  }, [isSidebarCollapsed, isMobile]);

  return (
    <div className="trading-layout">
      <TradingNavbar locale={locale} />

      {!isMobile && (
        <TradingSidebar locale={locale} />
      )}

      <main className="trading-main" role="main">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {!isMobile && <WatchlistPanel />}
    </div>
  );
}
