"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations("Dashboard");

  const accounts = [
    { id: "MT5-001", type: "Standard", balance: 12500.00, equity: 12850.00, margin: 2500.00, leverage: "1:500" },
    { id: "MT5-002", type: "ECN Pro", balance: 5000.00, equity: 4850.00, margin: 1000.00, leverage: "1:1000" },
  ];

  const recentTrades = [
    { id: 1, symbol: "EUR/USD", type: "BUY", lots: 0.5, open: 1.0850, current: 1.0875, profit: 125.00 },
    { id: 2, symbol: "XAU/USD", type: "SELL", lots: 0.2, open: 2030.00, current: 2025.00, profit: 100.00 },
    { id: 3, symbol: "BTC/USD", type: "BUY", lots: 0.1, open: 67000.00, current: 67500.00, profit: 50.00 },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">{t("myDashboard")}</h1>
            <p className="text-muted-foreground">{t("welcomeBack")}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/register" className="btn-secondary px-4 py-2">
              + {t("createAccount")}
            </Link>
            <Link href="/deposit" className="btn-primary px-4 py-2">
              {t("deposit")}
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: t("totalBalance"), value: "$17,500.00", change: "+2.5%", icon: "💰", color: "from-[#5B31F5] to-[#7B57FF]" },
            { label: t("equity"), value: "$17,700.00", change: "+3.2%", icon: "📊", color: "from-green-500 to-emerald-500" },
            { label: t("availableMargin"), value: "$15,200.00", change: "-", icon: "📈", color: "from-purple-500 to-pink-500" },
            { label: t("openPositions"), value: "3", change: "-", icon: "🎯", color: "from-amber-500 to-orange-500" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className={`text-sm font-medium ${stat.change.startsWith("+") ? "text-signal-green" : stat.change === "-" ? "text-muted-foreground" : "text-signal-red"}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">{t("mt5Accounts")}</h2>
                <Link href="/mt5-accounts" className="text-primary hover:underline text-sm">{t("viewAll")}</Link>
              </div>
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div key={account.id} className="bg-secondary/50 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{account.id}</div>
                      <div className="text-sm text-muted-foreground">{account.type} | {account.leverage}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">${account.balance.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{t("equity")}: ${account.equity.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">{t("recentTrades")}</h2>
                <Link href="/history" className="text-primary hover:underline text-sm">{t("viewAll")}</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-muted-foreground border-b border-border">
                      <th className="pb-3">{t("symbol")}</th>
                      <th className="pb-3">{t("type")}</th>
                      <th className="pb-3">{t("lots")}</th>
                      <th className="pb-3">{t("open")}</th>
                      <th className="pb-3">{t("current")}</th>
                      <th className="pb-3">{t("profit")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTrades.map((trade) => (
                      <tr key={trade.id} className="border-b border-border/50">
                        <td className="py-3 font-medium">{trade.symbol}</td>
                        <td className={`py-3 ${trade.type === "BUY" ? "text-signal-green" : "text-signal-red"}`}>{trade.type}</td>
                        <td className="py-3">{trade.lots}</td>
                        <td className="py-3">{trade.open}</td>
                        <td className="py-3">{trade.current}</td>
                        <td className={`py-3 font-medium ${trade.profit >= 0 ? "text-signal-green" : "text-signal-red"}`}>
                          {trade.profit >= 0 ? "+" : ""}${trade.profit.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">{t("wallet")}</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="text-muted-foreground">{t("available")} USD</span>
                  <span className="font-bold">$17,500.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="text-muted-foreground">{t("pending")}</span>
                  <span className="font-bold text-signal-amber">$0.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">{t("total")}</span>
                  <span className="font-bold text-lg">$17,500.00</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Link href="/deposit" className="flex-1 btn-primary text-center py-3">
                  {t("deposit")}
                </Link>
                <Link href="/withdraw" className="flex-1 btn-secondary text-center py-3">
                  {t("withdraw")}
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">{t("quickActions")}</h2>
              <div className="space-y-3">
                {[
                  { icon: "📊", label: t("openNewTrade"), href: "/trading" },
                  { icon: "📈", label: t("copyTrading"), href: "/copy-trading" },
                  { icon: "💱", label: t("deposit"), href: "/deposit" },
                  { icon: "💸", label: t("withdraw"), href: "/withdraw" },
                  { icon: "⚙️", label: t("settings"), href: "/settings" },
                ].map((action, i) => (
                  <Link
                    key={i}
                    href={action.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-xl">{action.icon}</span>
                    <span className="font-medium">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
