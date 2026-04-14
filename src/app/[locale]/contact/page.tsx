"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const offices = t.raw("offices") as Array<{ city: string; email: string }>;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! Our team will respond within 24 hours.");
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t("pageTitle")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pageSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: "📧", title: t("emailSupport"), value: t("supportEmail"), desc: t("emailResponse") },
            { icon: "📞", title: t("phoneSupport"), value: t("phoneNumber"), desc: t("liveChat") },
            { icon: "💬", title: t("liveChat"), value: t("clickToStart"), desc: t("instantResponse") },
          ].map((contact, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center hover-lift">
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
              <p className="text-primary font-medium mb-1">{contact.value}</p>
              <p className="text-sm text-muted-foreground">{contact.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t("sendMessage")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("fullName")}</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("namePlaceholder")}
                    className="bg-secondary/50 border-border"
                  />
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("phone")}</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t("phonePlaceholder")}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("subject")}</label>
                  <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2">
                    <option value="general">{t("subjectOptions.general")}</option>
                    <option value="account">{t("subjectOptions.account")}</option>
                    <option value="trading">{t("subjectOptions.trading")}</option>
                    <option value="deposits">{t("subjectOptions.deposits")}</option>
                    <option value="partnership">{t("subjectOptions.partnership")}</option>
                    <option value="other">{t("subjectOptions.other")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("message")}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 resize-none"
                />
              </div>

              <Button type="submit" className="w-full btn-primary py-6">
                {t("sendButton")}
              </Button>
            </form>
          </div>

          <div>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">{t("headOffice")}</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h3 className="font-semibold">{t("addressLabel")}</h3>
                    <p className="text-muted-foreground">
                      {t("addressDetails")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <h3 className="font-semibold">{t("regulator")}</h3>
                    <p className="text-muted-foreground">
                      {t("licenseInfo")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">{t("regionalOffices")}</h2>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                    <span className="font-medium">{office.city}</span>
                    <span className="text-primary text-sm">{office.email}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
