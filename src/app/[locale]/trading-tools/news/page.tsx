"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function MarketNewsPage() {
  const t = useTranslations("tradingtools");
  const [showModal, setShowModal] = useState(true);

  const news = [
    { id: 1, time: "10 min ago", title: "Fed Signals Potential Rate Cut in June Meeting", source: "Reuters", impact: "High", sentiment: "Bearish" },
    { id: 2, time: "45 min ago", title: "EUR/USD Hits 3-Month High on Strong German CPI", source: "Bloomberg", impact: "High", sentiment: "Bullish" },
    { id: 3, time: "1 hour ago", title: "Gold Prices Rally as Dollar Weakens", source: "FX Street", impact: "Medium", sentiment: "Bullish" },
    { id: 4, time: "2 hours ago", title: "Bank of Japan Maintains Ultra-Low Interest Rates", source: "Nikkei", impact: "High", sentiment: "Neutral" },
    { id: 5, time: "3 hours ago", title: "Oil Prices Surge on Middle East Tensions", source: "CNBC", impact: "Medium", sentiment: "Bullish" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("marketNews")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("updates247")} - {t("sentimentAnalysis")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {news.map((item) => (
              <div key={item.id} className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-muted-foreground text-sm">{item.time}</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">{item.source}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    item.impact === "High" ? "bg-signal-red/20 text-signal-red" : "bg-signal-amber/20 text-signal-amber"
                  }`}>
                    {item.impact} {t("impact")}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-primary cursor-pointer">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    item.sentiment === "Bullish" ? "text-signal-green" : 
                    item.sentiment === "Bearish" ? "text-signal-red" : "text-muted-foreground"
                  }`}>
                    {item.sentiment}
                  </span>
                  <button className="text-primary text-sm hover:underline">{t("readMore")} →</button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">{t("marketOverview")}</h3>
              <div className="space-y-3">
                {[
                  { pair: "EUR/USD", change: "+0.45%", sentiment: "63% Bullish" },
                  { pair: "GBP/USD", change: "+0.12%", sentiment: "55% Bullish" },
                  { pair: "USD/JPY", change: "-0.28%", sentiment: "52% Bearish" },
                  { pair: "XAU/USD", change: "+0.82%", sentiment: "71% Bullish" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="font-medium">{item.pair}</span>
                    <div className="text-right">
                      <div className={item.change.startsWith("+") ? "text-signal-green" : "text-signal-red"}>{item.change}</div>
                      <div className="text-xs text-muted-foreground">{item.sentiment}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">{t("customAlerts")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("customAlerts")}
              </p>
              <button onClick={() => setShowModal(true)} className="btn-primary w-full">
                {t("customAlerts")}
              </button>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">{t("marketNews")}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> {t("reuters")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> {t("bloomberg")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> {t("fxStreet")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> {t("cnbc")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> {t("dailyFx")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
