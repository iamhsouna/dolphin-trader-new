"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DemoPage() {
  const t = useTranslations("Demo");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo account created! Check your email for login credentials.");
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">{t("pageTitle")}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("pageSubtitle")}
            </p>

            <div className="space-y-4">
              {[
                { icon: "💯", title: t("zeroRisk"), desc: t("zeroRiskDesc") },
                { icon: "📊", title: t("realMarketData"), desc: t("realMarketDataDesc") },
                { icon: "📱", title: t("fullPlatformAccess"), desc: t("fullPlatformAccessDesc") },
                { icon: "⏰", title: t("unlimitedTime"), desc: t("unlimitedTimeDesc") },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">{t("formTitle")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("firstName")}</label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder={t("firstNamePlaceholder")}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("lastName")}</label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder={t("lastNamePlaceholder")}
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("emailLabel")}</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("emailPlaceholder")}
                  className="bg-secondary/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("phoneLabel")}</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t("phonePlaceholder")}
                  className="bg-secondary/50 border-border"
                />
              </div>

              <Button type="submit" className="w-full btn-primary py-6 text-lg">
                {t("submitButton")}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                {t("alreadyHaveAccount")}{" "}
                <Link href="/login" className="text-primary hover:underline">
                  {t("signInLink")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
