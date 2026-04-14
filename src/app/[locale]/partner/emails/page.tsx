"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PartnerEmailsPage() {
  const t = useTranslations("partner");

  const templates = [
    { name: "Welcome Email", subject: "Welcome to Our Partner Program!", icon: "📧" },
    { name: "Product Introduction", subject: "Discover Our Trading Platform", icon: "📈" },
    { name: "Promotional Offer", subject: "Special Partner Bonus Inside", icon: "🎁" },
    { name: "Monthly Newsletter", subject: "Your Monthly Market Update", icon: "📊" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link href="/partner" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← {t("viewAll")}
          </Link>
          <h1 className="text-3xl font-bold">{t("emailTemplates")}</h1>
        </div>

        <div className="space-y-4">
          {templates.map((template, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{template.icon}</span>
                <div>
                  <div className="font-medium">{template.name}</div>
                  <div className="text-sm text-muted-foreground">{template.subject}</div>
                </div>
              </div>
              <button className="btn-secondary px-4 py-2">
                {t("copy")}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
