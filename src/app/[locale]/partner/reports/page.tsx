"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PartnerReportsPage() {
  const t = useTranslations("partner");

  const stats = [
    { label: t("totalCommissions"), value: "$12,450.00", change: "+12%" },
    { label: t("totalReferrals"), value: "47", change: "+5" },
    { label: t("totalVolume"), value: "$2.5M", change: "+18%" },
    { label: t("conversionRate"), value: "3.2%", change: "+0.4%" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link href="/partner" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← {t("viewAll")}
          </Link>
          <h1 className="text-3xl font-bold">{t("performanceReports")}</h1>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-signal-green">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">{t("monthlyPerformance")}</h2>
          <div className="space-y-3">
            {["Jan 2024", "Dec 2023", "Nov 2023", "Oct 2023"].map((month, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <span className="text-muted-foreground">{month}</span>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Volume: ${(Math.random() * 1000000).toFixed(0)}</span>
                  <span className="text-signal-green">+${(Math.random() * 500).toFixed(0)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
