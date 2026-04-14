"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

interface ProductLayoutProps {
  children?: React.ReactNode;
  title: string;
  description: string;
  icon: string;
  color: string;
  instruments: { symbol: string; spread: string; leverage: string }[];
}

export default function ProductLayout({
  children,
  title,
  description,
  icon,
  color,
  instruments,
}: ProductLayoutProps) {
  const t = useTranslations("productlayout");

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">{icon}</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">{t("tradingInstruments")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {instruments.map((inst, i) => (
                <div key={i} className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary/70 transition-colors">
                  <div className="font-semibold text-lg mb-2">{inst.symbol}</div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{t("spread")}: <span className="text-primary">{inst.spread}</span></span>
                    <span>{inst.leverage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">{t("instantExecution")}</h3>
              <p className="text-muted-foreground">{t("instantExecutionDesc")}</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">{t("secureTrading")}</h3>
              <p className="text-muted-foreground">{t("secureTradingDesc")}</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">{t("realtimeQuotes")}</h3>
              <p className="text-muted-foreground">{t("realtimeQuotesDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("readyToStart")}</h2>
          <p className="text-muted-foreground mb-8">{t("openAccountDesc")}</p>
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
