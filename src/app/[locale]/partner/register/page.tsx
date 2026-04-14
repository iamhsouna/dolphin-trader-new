"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function PartnerRegisterPage() {
  const t = useTranslations("Partner");

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link href="/partner" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← {t("viewAll")}
          </Link>
          <h1 className="text-3xl font-bold">{t("becomePartner")}</h1>
        </div>

        <div className="glass-card rounded-xl p-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("firstName")}
                </label>
                <Input className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("lastName")}
                </label>
                <Input className="bg-secondary/50 border-border" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {t("email")}
              </label>
              <Input type="email" className="bg-secondary/50 border-border" />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {t("phone")}
              </label>
              <Input type="tel" className="bg-secondary/50 border-border" />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {t("country")}
              </label>
              <Input className="bg-secondary/50 border-border" />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {t("platform")}
              </label>
              <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3">
                <option>MT5</option>
              </select>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-[#5B31F5] to-[#7B57FF] hover:from-[#7B57FF] hover:to-[#5B31F5]">
              {t("becomePartner")}
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
