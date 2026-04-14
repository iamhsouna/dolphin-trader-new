"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ComingSoonModal from "@/components/ComingSoonModal";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TechnicalAnalysisPage() {
  const t = useTranslations("TradingTools");
  const [showModal, setShowModal] = useState(true);

  const pairs = ["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD", "BTC/USD"];
  const [selectedPair, setSelectedPair] = useState("EUR/USD");

  return (
    <div className="min-h-screen pt-16 bg-background">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📊</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("technicalAnalysis")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("indicators")} - {t("chartPatterns")}
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{t("technicalAnalysis")}</h2>
            <div className="flex gap-2">
              {pairs.map((pair) => (
                <button
                  key={pair}
                  onClick={() => setSelectedPair(pair)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedPair === pair 
                      ? "bg-primary text-foreground" 
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary/50"
                  }`}
                >
                  {pair}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-secondary/50 rounded-xl h-80 flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-muted-foreground">{t("chartPatterns")}</p>
              <p className="text-muted-foreground text-sm mt-2">{t("poweredByTradingView")}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["1H", "4H", "D1", "W1", "M1"].map((tf) => (
              <button key={tf} className="px-4 py-2 bg-secondary/50 rounded-lg text-sm hover:bg-secondary/50">
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("indicators")}</h3>
            <div className="space-y-3">
              {[
                { name: "RSI (14)", value: "58.4", signal: "Neutral" },
                { name: "MACD", value: "Bullish", signal: "Cross" },
                { name: "MA 50", value: "1.0832", signal: "Above Price" },
                { name: "MA 200", value: "1.0750", signal: "Below Price" },
                { name: "Bollinger", value: "1.0800-1.0900", signal: "Range" },
              ].map((ind, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground text-sm">{ind.name}</span>
                  <div className="text-right">
                    <div className="font-mono text-sm">{ind.value}</div>
                    <div className="text-xs text-primary">{ind.signal}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("keyLevels")}</h3>
            <div className="space-y-3">
              {[
                { type: "Resistance", level: "1.0900", strength: "Strong" },
                { type: "Resistance", level: "1.0850", strength: "Medium" },
                { type: "Support", level: "1.0800", strength: "Strong" },
                { type: "Support", level: "1.0750", strength: "Strong" },
              ].map((level, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className={`text-sm ${level.type === "Resistance" ? "text-signal-red" : "text-signal-green"}`}>
                    {level.type === "Resistance" ? t("resistance") : t("support")}
                  </span>
                  <div className="text-right">
                    <div className="font-mono">{level.level}</div>
                    <div className="text-xs text-muted-foreground">
                      {level.strength === "Strong" ? t("strong") : t("mediumStrength")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("chartPatterns")}</h3>
            <div className="space-y-3">
              {[
                { pattern: "Bull Flag", confidence: "78%", direction: "Bullish" },
                { pattern: "Double Bottom", confidence: "65%", direction: "Bullish" },
                { pattern: "RSI Div.", confidence: "72%", direction: "Bearish" },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="font-medium text-sm">{p.pattern}</span>
                  <div className="text-right">
                    <div className="text-primary text-sm">{p.confidence}</div>
                    <div className={`text-xs ${p.direction === "Bullish" ? "text-signal-green" : "text-signal-red"}`}>
                      {p.direction}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
