"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TradingSignalsPage() {
  const t = useTranslations("TradingTools");
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📡</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("tradingSignals")}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t("dailySignals")} - {t("technicalAnalysisLabel")}
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{t("tradingSignals")}</h2>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Live</span>
          </div>
          <div className="space-y-4">
            {[
              { pair: "EUR/USD", type: "BUY", entry: "1.0850", sl: "1.0820", tp: "1.0920", time: "09:30", status: "Active" },
              { pair: "GBP/JPY", type: "SELL", entry: "188.50", sl: "189.00", tp: "187.50", time: "10:15", status: "Active" },
              { pair: "XAU/USD", type: "BUY", entry: "2025.00", sl: "2018.00", tp: "2040.00", time: "11:00", status: "Active" },
              { pair: "USD/CHF", type: "SELL", entry: "0.8750", sl: "0.8790", tp: "0.8680", time: "14:30", status: "Pending" },
            ].map((signal, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-slate-700/50 last:border-0">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded text-sm font-bold ${
                    signal.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}>
                    {signal.type}
                  </span>
                  <div>
                    <span className="font-bold text-lg">{signal.pair}</span>
                    <span className="text-slate-400 text-sm ml-3">{signal.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-slate-400">{t("entry")}: </span>
                    <span className="font-mono">{signal.entry}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">{t("stopLoss")}: </span>
                    <span className="font-mono text-red-400">{signal.sl}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">{t("takeProfit")}: </span>
                    <span className="font-mono text-green-400">{signal.tp}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    signal.status === "Active" ? "bg-cyan-500/20 text-cyan-400" : "bg-amber-500/20 text-amber-400"
                  }`}>
                    {signal.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("tradingSignals")}</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                {t("dailySignals")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                {t("technicalAnalysisLabel")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                {t("entryExitPoints")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                {t("riskManagement")}
              </li>
            </ul>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("performance")}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">87%</div>
                <div className="text-xs text-slate-400">{t("winRate")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1.5</div>
                <div className="text-xs text-slate-400">{t("riskReward")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">+245%</div>
                <div className="text-xs text-slate-400">{t("ytdReturn")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-xs text-slate-400">{t("subscribers")}</div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("subscribe")}</h3>
            <p className="text-slate-400 text-sm mb-4">
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
