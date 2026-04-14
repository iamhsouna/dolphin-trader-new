"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PartnerHistoryPage() {
  const t = useTranslations("partner");

  const commissions = [
    { date: "2024-01-15", trader: "John D.", volume: "$50,000", commission: "$125.00" },
    { date: "2024-01-14", trader: "Sarah M.", volume: "$35,000", commission: "$87.50" },
    { date: "2024-01-13", trader: "Mike T.", volume: "$28,000", commission: "$70.00" },
    { date: "2024-01-12", trader: "Emma W.", volume: "$42,000", commission: "$105.00" },
    { date: "2024-01-11", trader: "Alex R.", volume: "$67,000", commission: "$167.50" },
    { date: "2024-01-10", trader: "Lisa K.", volume: "$31,000", commission: "$77.50" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link href="/partner" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← {t("viewAll")}
          </Link>
          <h1 className="text-3xl font-bold">{t("commissionHistory")}</h1>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3">{t("date")}</th>
                  <th className="pb-3">{t("trader")}</th>
                  <th className="pb-3">{t("volume")}</th>
                  <th className="pb-3">{t("commission")}</th>
                </tr>
              </thead>
              <tbody>
                {commissions.map((item, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3">{item.date}</td>
                    <td className="py-3">{item.trader}</td>
                    <td className="py-3">{item.volume}</td>
                    <td className="py-3 text-signal-green font-medium">{item.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
