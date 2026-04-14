"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AdminPage() {
  const t = useTranslations("admin");

  const stats = [
    { label: t("totalUsers"), value: "1,247", change: "+12%", icon: "👥" },
    { label: t("activeTraders"), value: "892", change: "+8%", icon: "📊" },
    { label: t("totalDeposits"), value: "$2.5M", change: "+15%", icon: "💰" },
    { label: t("pendingKYC"), value: "23", change: "-", icon: "⏳" },
  ];

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", status: t("verified"), joined: "2024-01-15" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", status: t("pending"), joined: "2024-01-15" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", status: t("verified"), joined: "2024-01-14" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", status: t("rejected"), joined: "2024-01-14" },
  ];

  const recentDeposits = [
    { id: 1, user: "John D.", amount: "$5,000.00", method: "Bank Transfer", status: t("approved"), date: "2024-01-15" },
    { id: 2, user: "Sarah M.", amount: "$2,000.00", method: "USDT", status: t("pending"), date: "2024-01-15" },
    { id: 3, user: "Mike T.", amount: "$1,000.00", method: "Skrill", status: t("approved"), date: "2024-01-14" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{t("adminPanel")}</h1>
          <p className="text-muted-foreground">{t("dashboardSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <span className={`text-sm font-medium ${stat.change.startsWith("+") ? "text-signal-green" : stat.change === "-" ? "text-muted-foreground" : "text-signal-red"}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{t("recentUsersTitle")}</h2>
              <button className="text-primary hover:underline text-sm">{t("viewAll")}</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-muted-foreground border-b border-border">
                    <th className="pb-3">{t("name")}</th>
                    <th className="pb-3">{t("email")}</th>
                    <th className="pb-3">{t("status")}</th>
                    <th className="pb-3">{t("joined")}</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border/50">
                      <td className="py-3 font-medium">{user.name}</td>
                      <td className="py-3 text-sm text-muted-foreground">{user.email}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === t("verified") ? "bg-signal-green/20 text-signal-green" :
                          user.status === t("pending") ? "bg-signal-amber/20 text-signal-amber" :
                          "bg-signal-red/20 text-signal-red"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 text-sm text-muted-foreground">{user.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{t("recentDepositsTitle")}</h2>
              <button className="text-primary hover:underline text-sm">{t("viewAll")}</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-muted-foreground border-b border-border">
                    <th className="pb-3">{t("user")}</th>
                    <th className="pb-3">{t("amount")}</th>
                    <th className="pb-3">{t("method")}</th>
                    <th className="pb-3">{t("status")}</th>
                    <th className="pb-3">{t("date")}</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDeposits.map((deposit) => (
                    <tr key={deposit.id} className="border-b border-border/50">
                      <td className="py-3 font-medium">{deposit.user}</td>
                      <td className="py-3 text-signal-green font-medium">{deposit.amount}</td>
                      <td className="py-3 text-sm text-muted-foreground">{deposit.method}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          deposit.status === t("approved") ? "bg-signal-green/20 text-signal-green" :
                          "bg-signal-amber/20 text-signal-amber"
                        }`}>
                          {deposit.status}
                        </span>
                      </td>
                      <td className="py-3 text-sm text-muted-foreground">{deposit.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("quickActions")}</h3>
            <div className="space-y-3">
              {[
                { label: t("reviewKYC"), icon: "📋", count: 23 },
                { label: t("approveWithdrawals"), icon: "💸", count: 8 },
                { label: t("sendAnnouncement"), icon: "📢", count: 0 },
              ].map((action, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{action.icon}</span>
                    <span className="font-medium">{action.label}</span>
                  </div>
                  {action.count > 0 && (
                    <span className="bg-primary text-foreground px-2 py-1 rounded-full text-xs font-bold">
                      {action.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("systemStatus")}</h3>
            <div className="space-y-3">
              {[
                { service: t("mt5Server"), status: t("operational"), icon: "🟢" },
                { service: t("depositProcessor"), status: t("operational"), icon: "🟢" },
                { service: t("withdrawalProcessor"), status: t("operational"), icon: "🟢" },
                { service: t("kycSystem"), status: t("operational"), icon: "🟢" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{item.service}</span>
                  <span className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span className="text-sm text-signal-green">{item.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">{t("topTradersToday")}</h3>
            <div className="space-y-3">
              {[
                { name: "Mike T.", profit: "+$4,250", trades: 45 },
                { name: "Sarah M.", profit: "+$3,180", trades: 32 },
                { name: "Emma W.", profit: "+$2,890", trades: 28 },
              ].map((trader, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B31F5] to-[#7B57FF] flex items-center justify-center text-sm font-bold text-foreground">
                      {trader.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{trader.name}</div>
                      <div className="text-xs text-muted-foreground">{trader.trades} {t("trades")}</div>
                    </div>
                  </div>
                  <span className="text-signal-green font-medium">{trader.profit}</span>
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
