"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PartnerPage() {
  const t = useTranslations("Partner");

  const stats = [
    { label: "Total Commissions", value: "$12,450.00", icon: "💰" },
    { label: "Pending Commission", value: "$1,250.00", icon: "⏳" },
    { label: "Total Referrals", value: "47", icon: "👥" },
    { label: "Total Volume", value: "$2.5M", icon: "📊" },
  ];

  const recentCommissions = [
    { date: "2024-01-15", trader: "John D.", volume: "$50,000", commission: "$125.00" },
    { date: "2024-01-14", trader: "Sarah M.", volume: "$35,000", commission: "$87.50" },
    { date: "2024-01-13", trader: "Mike T.", volume: "$28,000", commission: "$70.00" },
    { date: "2024-01-12", trader: "Emma W.", volume: "$42,000", commission: "$105.00" },
  ];

  const referralLink = "https://dolmarkets.com/ref/johndoe123";

  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">{t("partnerPortal")}</h1>
            <p className="text-slate-400">IB Partner Dashboard</p>
          </div>
          <Link href="/partner/register" className="btn-primary px-4 py-2">
            Become a Partner
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">{t("referralLink")}</h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(referralLink)}
                  className="btn-secondary px-6 py-3"
                >
                  Copy
                </button>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Share this link to earn commissions on every client that signs up through your referral.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">{t("commissionHistory")}</h2>
                <Link href="/partner/history" className="text-cyan-400 hover:underline text-sm">View All</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-slate-400 border-b border-slate-700">
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Trader</th>
                      <th className="pb-3">Volume</th>
                      <th className="pb-3">Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCommissions.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3">{item.date}</td>
                        <td className="py-3">{item.trader}</td>
                        <td className="py-3">{item.volume}</td>
                        <td className="py-3 text-green-400 font-medium">{item.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Partner Tools</h2>
              <div className="space-y-3">
                {[
                  { icon: "🎨", label: "Marketing Materials", href: "/partner/materials" },
                  { icon: "📧", label: "Email Templates", href: "/partner/emails" },
                  { icon: "📱", label: "Banner Ads", href: "/partner/banners" },
                  { icon: "📊", label: "Performance Reports", href: "/partner/reports" },
                ].map((tool, i) => (
                  <Link
                    key={i}
                    href={tool.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <span className="font-medium">{tool.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">{t("withdrawCommission")}</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Available</span>
                  <span className="font-bold text-green-400">$11,200.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Pending</span>
                  <span className="font-bold text-amber-400">$1,250.00</span>
                </div>
              </div>
              <button className="w-full btn-primary py-3 mt-4">
                Withdraw to Bank Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
