"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function TradingToolsPage() {
  const t = useTranslations("tradingtools");

  const tools = [
    {
      id: "calendar",
      icon: "📅",
      title: t("economicCalendar"),
      description: t("economicCalendarDescription"),
      features: [
        t("realTimeUpdates"),
        t("customizableEvents"),
        t("impactIndicators"),
        t("historicalData")
      ],
      link: "https://www.forexfactory.com",
      color: "from-primary to-primary",
    },
    {
      id: "signals",
      icon: "📡",
      title: t("tradingSignals"),
      description: t("tradingSignalsDescription"),
      features: [
        t("dailySignals"),
        t("technicalAnalysisLabel"),
        t("entryExitPoints"),
        t("riskManagement")
      ],
      link: "/trading-tools/signals",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "news",
      icon: "📰",
      title: t("marketNews"),
      description: t("marketNewsDescription"),
      features: [
        t("updates247"),
        t("multiSource"),
        t("sentimentAnalysis"),
        t("customAlerts")
      ],
      link: "/trading-tools/news",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "analysis",
      icon: "📊",
      title: t("technicalAnalysis"),
      description: t("technicalAnalysisDescription"),
      features: [
        t("indicators"),
        t("chartPatterns"),
        t("aiAnalysis"),
        t("customIndicatorsLabel")
      ],
      link: "/trading-tools/analysis",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const upcomingEvents = [
    { time: "08:30", currency: "USD", event: "Core CPI m/m", impact: "High", previous: "0.3%", forecast: "0.2%" },
    { time: "10:00", currency: "USD", event: "Michigan Consumer Sentiment", impact: "Medium", previous: "69.7", forecast: "70.2" },
    { time: "14:00", currency: "EUR", event: "ECB President Speech", impact: "High", previous: "-", forecast: "-" },
    { time: "18:00", currency: "USD", event: "Fed Chair Powell Speech", impact: "High", previous: "-", forecast: "-" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("tradingToolsTitle")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("tradingToolsDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tools.map((tool) => (
            <div key={tool.id} className="glass-card rounded-xl p-6 hover-lift">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-4`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-muted-foreground mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.map((feature, i) => (
                  <span key={i} className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href={tool.link}
                className="btn-secondary inline-flex items-center gap-2 px-4 py-2"
                target={tool.link.startsWith("http") ? "_blank" : undefined}
              >
                {t("openTool")}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{t("economicCalendar")} - {t("today")}</h2>
            <Link href="https://www.forexfactory.com" target="_blank" className="text-primary hover:underline text-sm">
              {t("forexFactory")} →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3">{t("time")}</th>
                  <th className="pb-3">{t("currency")}</th>
                  <th className="pb-3">{t("event")}</th>
                  <th className="pb-3">{t("impact")}</th>
                  <th className="pb-3">{t("previous")}</th>
                  <th className="pb-3">{t("forecast")}</th>
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map((event, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 font-mono text-sm">{event.time}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-secondary/50 rounded text-sm font-medium">{event.currency}</span>
                    </td>
                    <td className="py-3 font-medium">{event.event}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        event.impact === "High" ? "bg-signal-red/20 text-signal-red" :
                        event.impact === "Medium" ? "bg-signal-amber/20 text-signal-amber" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {event.impact}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{event.previous}</td>
                    <td className="py-3 text-sm text-primary">{event.forecast}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">{t("marketOverview")}</h3>
            <div className="space-y-3">
              {[
                { pair: "EUR/USD", bid: 1.0852, ask: 1.0854, change: "+0.11%" },
                { pair: "GBP/USD", bid: 1.2645, ask: 1.2648, change: "-0.06%" },
                { pair: "USD/JPY", bid: 149.85, ask: 149.87, change: "+0.10%" },
                { pair: "XAU/USD", bid: 2024.50, ask: 2025.00, change: "+0.62%" },
                { pair: "BTC/USD", bid: 67500, ask: 67600, change: "+1.89%" },
              ].map((pair, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="font-medium">{pair.pair}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{pair.bid} / {pair.ask}</span>
                    <span className={pair.change.startsWith("+") ? "text-signal-green text-sm" : "text-signal-red text-sm"}>
                      {pair.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">{t("marketSentiment")}</h3>
            <div className="space-y-4">
              {[
                { pair: "EUR/USD", buy: 62, sell: 38 },
                { pair: "GBP/USD", buy: 55, sell: 45 },
                { pair: "USD/JPY", buy: 48, sell: 52 },
                { pair: "XAU/USD", buy: 71, sell: 29 },
              ].map((pair, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{pair.pair}</span>
                    <span className="text-muted-foreground">{pair.buy}% {t("buy")} / {pair.sell}% {t("sell")}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: `${pair.buy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
