"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useTranslations } from "next-intl";

export default function MT5Page() {
  const t = useTranslations("MT5");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen pt-16 bg-background">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navigation />
      
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <span className="text-primary text-sm font-medium">{t("industryStandard")}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {t("metaTrader5")}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t("mt5Description")}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button onClick={() => setShowModal(true)} className="btn-primary flex items-center gap-2">
                  <span>📥</span>
                  <span>{t("downloadForWindows")}</span>
                </button>
                <Link href="/webtrader" className="btn-secondary flex items-center gap-2">
                  <span>🌐</span>
                  <span>{t("launchWebTrader")}</span>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-signal-green rounded-full animate-pulse" />
                  <span>{t("serverOnline")}</span>
                </div>
                <span>|</span>
                <span>{t("version")}</span>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-4 bg-background/80">
                <Image
                  src="/logo.png"
                  alt="MT5 Platform"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold">{t("connected")}</div>
                    <div className="text-xs text-muted-foreground">{t("liveAccount")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t("platformFeatures")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: t("instantExecutionFeature"), desc: t("instantExecutionFeatureDesc") },
              { icon: "📊", title: t("technicalIndicatorsFeature"), desc: t("technicalIndicatorsFeatureDesc") },
              { icon: "🤖", title: t("automatedTradingFeature"), desc: t("automatedTradingFeatureDesc") },
              { icon: "📈", title: t("advancedCharts"), desc: t("advancedChartsDesc") },
              { icon: "🔄", title: t("hedgingAllowed"), desc: t("hedgingAllowedDesc") },
              { icon: "📱", title: t("mobileTradingFeature"), desc: t("mobileTradingFeatureDesc") },
              { icon: "🌐", title: t("webTerminal"), desc: t("tradeAnywhereDesc") },
              { icon: "📊", title: t("depthOfMarket"), desc: t("depthOfMarketDesc") },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover-lift">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t("downloadTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-8 text-center hover-lift">
              <div className="text-5xl mb-4">🪟</div>
              <h3 className="text-xl font-bold mb-2">{t("windows")}</h3>
              <p className="text-muted-foreground text-sm mb-6">{t("metaTrader5")} for Windows</p>
              <button onClick={() => setShowModal(true)} className="btn-primary w-full">
                {t("downloadExe")}
              </button>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center hover-lift">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-xl font-bold mb-2">{t("ios")}</h3>
              <p className="text-muted-foreground text-sm mb-6">MetaTrader 5 for iPhone/iPad</p>
              <button onClick={() => setShowModal(true)} className="btn-secondary w-full">
                {t("appStore")}
              </button>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center hover-lift">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">{t("android")}</h3>
              <p className="text-muted-foreground text-sm mb-6">MetaTrader 5 for Android</p>
              <button onClick={() => setShowModal(true)} className="btn-secondary w-full">
                {t("googlePlayStore")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("readyToStart")}</h2>
          <p className="text-muted-foreground mb-8">
            {t("openAccountInMinutes")}
          </p>
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

      <Footer />
    </div>
  );
}
