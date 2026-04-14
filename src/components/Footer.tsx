"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const tn = useTranslations("Navigation");
  const tp = useTranslations("PageNames");

  const footerLinks = {
    products: {
      title: tn("products"),
      links: [
        { href: "/products/forex", label: tn("forex") },
        { href: "/products/metals", label: tn("metals") },
        { href: "/products/commodities", label: tn("commodities") },
        { href: "/products/indices", label: tn("indices") },
        { href: "/products/crypto", label: tn("crypto") },
        { href: "/products/shares", label: tn("shares") },
      ],
    },
    platforms: {
      title: tn("platforms"),
      links: [
        { href: "/platforms/mt5", label: tn("metaTrader5") },
        { href: "/platforms/mobile", label: tn("mobileApps") },
        { href: "/platforms/webtrader", label: tn("webTrader") },
        { href: "/copy-trading", label: tn("copyTrading") },
        { href: "/trading-tools", label: tn("tradingTools") },
      ],
    },
    company: {
      title: tn("company"),
      links: [
        { href: "/about", label: tp("about") },
        { href: "/contact", label: tp("contact") },
        { href: "/faq", label: tp("faq") },
        { href: "/partner", label: tn("partnership") },
      ],
    },
    legal: {
      title: t("legal"),
      links: [
        { href: "/terms", label: t("terms") },
        { href: "/privacy", label: t("privacy") },
        { href: "/risk-warning", label: t("riskWarning") },
      ],
    },
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt={t("brandName")}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              {t("tagline")}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>{t("supportEmail")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>{t("phone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t("address")}</span>
              </div>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">{t("copyright")}</p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-signal-green rounded-full animate-pulse" />
                {t("systemsOperational")}
              </span>
              <span>{t("license")}</span>
              <span>{t("regulator")}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center max-w-3xl mx-auto">
            {t("riskWarningText")}
          </p>
        </div>
      </div>
    </footer>
  );
}
