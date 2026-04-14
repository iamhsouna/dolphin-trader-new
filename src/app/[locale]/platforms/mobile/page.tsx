"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useTranslations } from "next-intl";

export default function MobilePage() {
  const t = useTranslations("Mobile");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navigation />
      
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-green-400 text-sm font-medium">{t("tradeAnywhereAnytime")}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {t("mobileTitle")}
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              {t("mobileDescription")}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button onClick={() => setShowModal(true)} className="btn-primary flex items-center gap-3 px-8 py-4">
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs opacity-80">{t("downloadFrom")}</div>
                  <div className="font-bold">{t("appStore")}</div>
                </div>
              </button>
              <button onClick={() => setShowModal(true)} className="btn-primary flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400">
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs opacity-80">{t("downloadFor")}</div>
                  <div className="font-bold">{t("googlePlayStore")}</div>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>{t("freeDownload")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>{t("noMonthlyFees")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>{t("realDemoAccounts")}</span>
              </div>
            </div>
          </div>

          <div className="relative max-w-md mx-auto">
            <div className="glass-card rounded-3xl p-8 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
              <div className="text-center text-8xl mb-6">📱</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">EUR/USD</span>
                  <span className="text-green-400 font-mono">1.0852</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">XAU/USD</span>
                  <span className="text-amber-400 font-mono">2024.50</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-400">BTC/USD</span>
                  <span className="text-orange-400 font-mono">67500.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t("fullFeaturedTrading")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: t("interactiveCharts"), desc: t("interactiveChartsDesc") },
              { icon: "📈", title: t("allInstruments"), desc: t("allInstrumentsDesc") },
              { icon: "🔔", title: t("priceAlerts"), desc: t("priceAlertsDesc") },
              { icon: "📊", title: t("realTimeQuotes"), desc: t("realTimeQuotesDesc") },
              { icon: "🔐", title: t("secureAccess"), desc: t("secureAccessDesc") },
              { icon: "💬", title: t("inAppChat"), desc: t("inAppChatDesc") },
              { icon: "📊", title: t("tradingHistory"), desc: t("tradingHistoryDesc") },
              { icon: "💳", title: t("instantDeposits"), desc: t("instantDepositsDesc") },
              { icon: "⚡", title: t("oneTapTrading"), desc: t("oneTapTradingDesc") },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("iosOptimized")}</h2>
              <p className="text-slate-400 mb-6">
                {t("iosOptimizedDesc")}
              </p>
              <ul className="space-y-3">
                {[t("faceIdTouchId"), t("ipadMultitasking"), t("pushNotifications"), t("hapticFeedback"), t("darkModeOptimized")].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowModal(true)} className="btn-primary mt-6">
                {t("downloadForIOS")}
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("androidOptimized")}</h2>
              <p className="text-slate-400 mb-6">
                {t("androidOptimizedDesc")}
              </p>
              <ul className="space-y-3">
                {[t("fingerprintUnlock"), t("widgetSupport"), t("backgroundNotifications"), t("androidAutoCompatible"), t("splitScreenMultitasking")].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowModal(true)} className="btn-primary mt-6">
                {t("downloadForAndroid")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("startTradingOnGo")}</h2>
          <p className="text-slate-400 mb-8">
            {t("downloadApp")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="btn-primary text-lg px-8 py-4">
              Open Live Account
            </Link>
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
              Try Demo First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
