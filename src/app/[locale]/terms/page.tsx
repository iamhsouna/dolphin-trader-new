"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">{t("pageTitle")}</h1>
        <p className="text-muted-foreground mb-8">{t("lastUpdated")}</p>

        <div className="glass-card rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">{t("agreementToTerms")}</h2>
            <p className="text-muted-foreground">
              {t("agreementText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("servicesDescription")}</h2>
            <p className="text-muted-foreground mb-4">
              {t("servicesList")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t("onlineTrading")}</li>
              <li>{t("access200")}</li>
              <li>{t("copyTradingServices")}</li>
              <li>{t("educationalResources")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("accountTerms")}</h2>
            <p className="text-muted-foreground mb-4">
              {t("accountRequirements")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t("requirement1")}</li>
              <li>{t("requirement2")}</li>
              <li>{t("requirement3")}</li>
              <li>{t("requirement4")}</li>
              <li>{t("requirement5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("tradingConditions")}</h2>
            <p className="text-muted-foreground mb-4">
              {t("tradingRules")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t("rule1")}</li>
              <li>{t("rule2")}</li>
              <li>{t("rule3")}</li>
              <li>{t("rule4")}</li>
              <li>{t("rule5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("depositsWithdrawals")}</h2>
            <p className="text-muted-foreground mb-4">
              {t("fundsRules")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t("fundRule1")}</li>
              <li>{t("fundRule2")}</li>
              <li>{t("fundRule3")}</li>
              <li>{t("fundRule4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("riskDisclosure")}</h2>
            <p className="text-muted-foreground">
              {t("riskText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("prohibitedActivities")}</h2>
            <p className="text-muted-foreground mb-4">
              {t("prohibitedRules")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t("prohibit1")}</li>
              <li>{t("prohibit2")}</li>
              <li>{t("prohibit3")}</li>
              <li>{t("prohibit4")}</li>
              <li>{t("prohibit5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("limitationLiability")}</h2>
            <p className="text-muted-foreground">
              {t("liabilityText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("amendments")}</h2>
            <p className="text-muted-foreground">
              {t("amendmentsText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{t("contactInformation")}</h2>
            <p className="text-muted-foreground">
              {t("contactText")}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
