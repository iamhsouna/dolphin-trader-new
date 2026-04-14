"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CopyTradingPage() {
  const t = useTranslations("copytrading");

  const masterTraders = [
    { id: 1, name: "Alex Thompson", avatar: "AT", winRate: 87, roi: 145, followers: 1247, equity: "$125,000", drawdown: "12%", trades: 1523 },
    { id: 2, name: "Maria Santos", avatar: "MS", winRate: 82, roi: 98, followers: 892, equity: "$89,000", drawdown: "8%", trades: 2156 },
    { id: 3, name: "James Chen", avatar: "JC", winRate: 79, roi: 76, followers: 654, equity: "$67,000", drawdown: "15%", trades: 987 },
    { id: 4, name: "Sofia Rodriguez", avatar: "SR", winRate: 91, roi: 112, followers: 1089, equity: "$156,000", drawdown: "6%", trades: 3421 },
    { id: 5, name: "David Kim", avatar: "DK", winRate: 85, roi: 89, followers: 543, equity: "$78,000", drawdown: "10%", trades: 1567 },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("copyTradingTitle")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pageDescription")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">{t("masterTraders")}</h3>
            <p className="text-muted-foreground">{t("chooseDescription")}</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">{t("instantCopy")}</h3>
            <p className="text-muted-foreground">{t("instantCopyDesc")}</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">{t("fullControl")}</h3>
            <p className="text-muted-foreground">{t("fullControlDesc")}</p>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t("masterTraders")}</h2>
          <div className="flex gap-3">
            <select className="bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm">
              <option>{t("sortByROI")}</option>
              <option>{t("sortByWinRate")}</option>
              <option>{t("sortByFollowers")}</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masterTraders.map((trader) => (
            <div key={trader.id} className="glass-card rounded-xl p-6 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5B31F5] to-[#7B57FF] flex items-center justify-center text-xl font-bold text-foreground">
                  {trader.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{trader.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{trader.followers.toLocaleString()} {t("followersLabel")}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-signal-green">{trader.roi}%</div>
                  <div className="text-xs text-muted-foreground">{t("roi")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{trader.winRate}%</div>
                  <div className="text-xs text-muted-foreground">{t("winRate")}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{trader.drawdown}</div>
                  <div className="text-xs text-muted-foreground">{t("drawdown")}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{trader.trades.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{t("totalTrades")}</div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground mb-4">
                {t("equity")}: <span className="text-white font-medium">{trader.equity}</span>
              </div>

              <button className="w-full btn-primary py-3">
                {t("subscribe")}
              </button>
            </div>
          ))}
        </div>

        <section className="mt-16 py-16 bg-gradient-to-r from-primary/30 to-primary/30 rounded-2xl">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t("becomeMaster")}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t("masterDescription")}
            </p>
            <Link href="/copy-trading/apply" className="btn-primary text-lg px-8 py-4">
              {t("applyButton")}
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
