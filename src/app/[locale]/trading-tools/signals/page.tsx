"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TradingSignalsPage() {
  const t = useTranslations("tradingtools");
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen pt-16 bg-background">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📡</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("tradingSignals")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("dailySignals")} - {t("technicalAnalysisLabel")}
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{t("tradingSignals")}</h2>
            <span className="px-3 py-1 bg-signal-green/20 text-signal-green rounded-full text-sm">{t("live")}</span>
          </div>
          <div className="space-y-4">
            {[
              { pair: "EUR/USD", type: "BUY", entry: "1.0850", sl: "1.0820", tp: "1.0920", time: "09:30", status: "Active" },
              { pair: "GBP/JPY", type: "SELL", entry: "188.50", sl: "189.00", tp: "187.50", time: "10:15", status: "Active" },
              { pair: "XAU/USD", type: "BUY", entry: "2025.00", sl: "2018.00", tp: "2040.00", time: "11:00", status: "Active" },
              { pair: "USD/CHF", type: "SELL", entry: "0.8750", sl: "0.8790", tp: "0.8680", time: "14:30", status: "Pending" },
            ].map((signal, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded text-sm font-bold ${
                    signal.type === "BUY" ? "bg-signal-green/20 text-signal-green" : "bg-signal-red/20 text-signal-red"
                  }`}>
                    {t(signal.type.toLowerCase())}
                  </span>
                  <div>
                    <span className="font-bold text-lg">{signal.pair}</span>
                    <span className="text-muted-foreground text-sm ml-3">{signal.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground">{t("entry")}: </span>
                    <span className="font-mono">{signal.entry}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t("stopLoss")}: </span>
                    <span className="font-mono text-signal-red">{signal.sl}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t("takeProfit")}: </span>
                    <span className="font-mono text-signal-green">{signal.tp}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    signal.status === "Active" ? "bg-primary/20 text-primary" : "bg-signal-amber/20 text-signal-amber"
                  }`}>
                    {t(signal.status.toLowerCase())}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("tradingSignals")}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-signal-green">✓</span>
                {t("dailySignals")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-signal-green">✓</span>
                {t("technicalAnalysisLabel")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-signal-green">✓</span>
                {t("entryExitPoints")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-signal-green">✓</span>
                {t("riskManagement")}
              </li>
            </ul>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("performance")}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-signal-green">87%</div>
                <div className="text-xs text-muted-foreground">{t("winRate")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1.5</div>
                <div className="text-xs text-muted-foreground">{t("riskReward")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-signal-green">+245%</div>
                <div className="text-xs text-muted-foreground">{t("ytdReturn")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-xs text-muted-foreground">{t("subscribers")}</div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("subscribe")}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t("subscribeDescription")}
            </p>
            <button onClick={() => setShowModal(true)} className="btn-primary w-full">
              {t("subscribe")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
