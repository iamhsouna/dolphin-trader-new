"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, Lock, BarChart3, Gem } from "lucide-react";

interface ProductLayoutProps {
  children?: React.ReactNode;
  title: string;
  description: string;
  iconKey: string;
  productCategory: "forex" | "metals" | "indices" | "commodities" | "crypto" | "shares";
  instruments: { symbol: string; spread: string; leverage: string }[];
}

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  exchange: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3L21 7L17 11" />
      <path d="M21 7H9" />
      <path d="M7 13L3 17L7 21" />
      <path d="M3 17H15" />
    </svg>
  ),
  gem: Gem,
  barChart: BarChart3,
  droplet: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  crypto: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 8H14C15.1 8 16 8.9 16 10V14C16 15.1 15.1 16 14 16H10C8.9 16 8 15.1 8 14V10C8 8.9 8.9 8 10 8" />
      <path d="M10 12H14" />
      <path d="M10 10V14" />
    </svg>
  ),
  trendingUp: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

export default function ProductLayout({
  children,
  title,
  description,
  iconKey,
  productCategory,
  instruments,
}: ProductLayoutProps) {
  const t = useTranslations("productlayout");

  const productColors: Record<string, string> = {
    forex: "product-bg-forex",
    metals: "product-bg-metals",
    indices: "product-bg-indices",
    commodities: "product-bg-commodities",
    crypto: "product-bg-crypto",
    shares: "product-bg-shares",
  };

  const IconComponent = iconComponents[iconKey] || iconComponents.barChart;

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 ${productColors[productCategory]}`} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
              <IconComponent className="w-10 h-10" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-foreground">{title}</h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">{t("tradingInstruments")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {instruments.map((inst, i) => (
                <div key={i} className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary/70 transition-colors">
                  <div className="font-semibold text-lg mb-2 text-foreground">{inst.symbol}</div>
                  <div className="flex justify-between text-sm text-foreground-muted">
                    <span>{t("spread")}: <span className="text-accent">{inst.spread}</span></span>
                    <span>{inst.leverage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("instantExecution")}</h3>
              <p className="text-foreground-muted">{t("instantExecutionDesc")}</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("secureTrading")}</h3>
              <p className="text-foreground-muted">{t("secureTradingDesc")}</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("realtimeQuotes")}</h3>
              <p className="text-foreground-muted">{t("realtimeQuotesDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">{t("readyToStart")}</h2>
          <p className="text-foreground-muted mb-8">{t("openAccountDesc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="btn-primary text-lg px-8 py-4">
              {t("openLiveAccount")}
            </Link>
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
              {t("tryDemoFirst")}
            </Link>
          </div>
        </div>
      </section>

      {children}
      <Footer />
    </div>
  );
}
