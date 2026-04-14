"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WithdrawPage() {
  const t = useTranslations("Dashboard");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("card");

  const methods = [
    { id: "card", icon: "💳", name: "Credit/Debit Card" },
    { id: "bank", icon: "🏦", name: "Bank Transfer" },
    { id: "skrill", icon: "📱", name: "Skrill" },
    { id: "neteller", icon: "💰", name: "Neteller" },
    { id: "crypto", icon: "₿", name: "Cryptocurrency" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Withdrawal of $${amount} via ${method} submitted!`);
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{t("withdraw")}</h1>
          <p className="text-muted-foreground mt-2">{t("withdrawDescription")}</p>
        </div>

        <div className="glass-card rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl mb-6">
            <span className="text-muted-foreground">{t("available")}</span>
            <span className="text-xl font-bold text-signal-green">$17,500.00</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {t("withdrawLabel")}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="pl-8 bg-secondary/50 border-border text-white text-lg"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-muted-foreground mb-3">
                {t("withdrawMethod")}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {methods.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethod(m.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      method === m.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-secondary/50 hover:border-border"
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{m.icon}</span>
                    <span className="text-sm font-medium">{m.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-gradient-to-r from-[#5B31F5] to-[#7B57FF] hover:from-[#7B57FF] hover:to-[#5B31F5]">
                {t("withdraw")}
              </Button>
              <Button type="button" variant="ghost" className="px-6">
                {t("cancel")}
              </Button>
            </div>
          </form>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4">{t("withdrawLabel")}</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• {t("minWithdrawMessage")}</p>
            <p>• {t("processingTimeWithdraw")}</p>
            <p>• {t("verificationMessage")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
