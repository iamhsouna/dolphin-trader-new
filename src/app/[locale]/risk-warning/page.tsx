"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RiskWarningPage() {
  const t = useTranslations("RiskWarning");

  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <Navigation />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8">{t("pageTitle")}</h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">⚠️</span>
                <div>
                  <h2 className="text-xl font-bold text-amber-400 mb-2">{t("importantNotice")}</h2>
                  <p className="text-slate-300">
                    {t("importantText")}
                  </p>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("generalRisk")}</h2>
              <p className="text-slate-300 mb-4">
                {t("generalRiskText")}
              </p>
              <p className="text-slate-300">
                {t("generalRiskText2")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("leverageRisk")}</h2>
              <p className="text-slate-300 mb-4">
                {t("leverageRiskText")}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>{t("leverageRiskList1")}</li>
                <li>{t("leverageRiskList2")}</li>
                <li>{t("leverageRiskList3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("marketRisk")}</h2>
              <p className="text-slate-300 mb-4">
                {t("marketRiskText")}
              </p>
              <p className="text-slate-300">
                {t("marketRiskText2")}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-2">
                <li>{t("marketList1")}</li>
                <li>{t("marketList2")}</li>
                <li>{t("marketList3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("counterpartyRisk")}</h2>
              <p className="text-slate-300">
                {t("counterpartyRiskText")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("operationalRisk")}</h2>
              <p className="text-slate-300 mb-4">
                {t("operationalRiskText")}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>{t("operationalList1")}</li>
                <li>{t("operationalList2")}</li>
                <li>{t("operationalList3")}</li>
                <li>{t("operationalList4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("legalRisk")}</h2>
              <p className="text-slate-300 mb-4">
                {t("legalRiskText")}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>{t("legalList1")}</li>
                <li>{t("legalList2")}</li>
                <li>{t("legalList3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("negativeBalance")}</h2>
              <p className="text-slate-300">
                {t("negativeBalanceText")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t("riskManagement")}</h2>
              <p className="text-slate-300 mb-4">
                {t("riskManagementText")}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>{t("riskList1")}</li>
                <li>{t("riskList2")}</li>
                <li>{t("riskList3")}</li>
                <li>{t("riskList4")}</li>
                <li>{t("riskList5")}</li>
                <li>{t("riskList6")}</li>
                <li>{t("riskList7")}</li>
              </ul>
            </section>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <p className="text-slate-300">
                <strong>{t("disclaimer")}</strong>
              </p>
            </div>

            <p className="text-sm text-slate-400 text-center">
              {t("lastUpdated")} | {t("footer")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
