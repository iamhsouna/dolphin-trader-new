"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PartnerBannersPage() {
  const t = useTranslations("partner");

  const banners = [
    { name: "Leaderboard 728x90", size: "728x90", format: "GIF" },
    { name: "Medium Rectangle 300x250", size: "300x250", format: "PNG" },
    { name: "Wide Skyscraper 160x600", size: "160x600", format: "GIF" },
    { name: "Large Rectangle 336x280", size: "336x280", format: "PNG" },
    { name: "Mobile Banner 320x50", size: "320x50", format: "GIF" },
    { name: "Half Page 300x600", size: "300x600", format: "PNG" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link href="/partner" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← {t("viewAll")}
          </Link>
          <h1 className="text-3xl font-bold">{t("bannerAds")}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {banners.map((banner, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="bg-secondary rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-muted-foreground">{banner.size}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{banner.name}</div>
                  <div className="text-sm text-muted-foreground">{banner.format}</div>
                </div>
                <button className="btn-secondary px-4 py-2">
                  {t("copy")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
