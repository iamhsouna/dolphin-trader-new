"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PartnerMaterialsPage() {
  const t = useTranslations("partner");

  const materials = [
    { name: "Company Logo Pack", type: "ZIP", size: "2.4 MB" },
    { name: "Brand Guidelines", type: "PDF", size: "1.2 MB" },
    { name: "Product Flyers", type: "PDF", size: "5.8 MB" },
    { name: "Trading Platform Screenshots", type: "ZIP", size: "12.3 MB" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link href="/partner" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← {t("viewAll")}
          </Link>
          <h1 className="text-3xl font-bold">{t("marketingMaterials")}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {materials.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📁</span>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.type} • {item.size}</div>
                </div>
              </div>
              <button className="btn-secondary px-4 py-2">
                {t("download")}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
