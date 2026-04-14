"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">{t("pageTitle")}</h1>
        <p className="text-slate-400 mb-8">{t("lastUpdated")}</p>

        <div className="glass-card rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">{t("informationWeCollect")}</h2>
            <p className="text-slate-300 mb-4">
              {t("informationWeCollectText")}
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>{t("info1")}</li>
              <li>{t("info2")}</li>
              <li>{t("info3")}</li>
              <li>{t("info4")}</li>
              <li>{t("info5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("howWeUse")}</h2>
            <p className="text-slate-300 mb-4">
              {t("howWeUseText")}
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>{t("use1")}</li>
              <li>{t("use2")}</li>
              <li>{t("use3")}</li>
              <li>{t("use4")}</li>
              <li>{t("use5")}</li>
              <li>{t("use6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("informationSharing")}</h2>
            <p className="text-slate-300 mb-4">
              {t("sharingText")}
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>{t("share1")}</li>
              <li>{t("share2")}</li>
              <li>{t("share3")}</li>
              <li>{t("share4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("dataSecurity")}</h2>
            <p className="text-slate-300">
              {t("securityText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("cookies")}</h2>
            <p className="text-slate-300">
              {t("cookiesText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("yourRights")}</h2>
            <p className="text-slate-300 mb-4">
              {t("rightsText")}
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>{t("right1")}</li>
              <li>{t("right2")}</li>
              <li>{t("right3")}</li>
              <li>{t("right4")}</li>
              <li>{t("right5")}</li>
              <li>{t("right6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("contactUs")}</h2>
            <p className="text-slate-300">
              {t("contactText")}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
