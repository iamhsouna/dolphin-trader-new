"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const t = useTranslations("About");

  const team = t.raw("teamMembers") as Array<{ name: string; role: string; avatar: string }>;

  const milestones = [
    { year: "2018", event: t("companyFounded") },
    { year: "2019", event: t("launchedMT5") },
    { year: "2020", event: t("reached50000") },
    { year: "2021", event: t("introducedCopyTrading") },
    { year: "2022", event: t("expandedTo100") },
    { year: "2023", event: t("launchedMobileApps") },
    { year: "2024", event: t("reached150000") },
  ];

  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">{t("pageTitle")}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t("pageSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("ourMission")}</h2>
            <p className="text-slate-300 text-lg mb-6">
              {t("missionText")}
            </p>
            <p className="text-slate-400 mb-6">
              {t("missionDescription")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "150K+", label: t("activeTraders") },
                { value: "100+", label: t("countriesServed") },
                { value: "200+", label: t("instrumentsAvailable") },
                { value: "$2.5B+", label: t("monthlyVolumeLabel") },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">{t("whyChooseUs")}</h2>
            <div className="space-y-4">
              {[
                { icon: "🏛️", title: t("fscRegulated"), desc: t("fscRegulatedDesc") },
                { icon: "🔒", title: t("segregatedFundsFeature"), desc: t("segregatedFundsFeatureDesc") },
                { icon: "⚡", title: t("fastExecution"), desc: t("fastExecutionDesc") },
                { icon: "📊", title: t("lowSpreads"), desc: t("lowSpreadsDesc") },
                { icon: "📱", title: t("multiPlatform"), desc: t("multiPlatformDesc") },
                { icon: "💰", title: t("fastWithdrawals"), desc: t("fastWithdrawalsDesc") },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t("ourJourney")}</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 transform -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-1/2 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="glass-card rounded-xl p-4 inline-block">
                      <div className="text-cyan-400 font-bold text-lg">{milestone.year}</div>
                      <div className="text-slate-300">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t("leadershipTeam")}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass-card rounded-xl p-6 text-center hover-lift">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-slate-900 mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-slate-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center glass-card rounded-2xl p-12 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <h2 className="text-3xl font-bold mb-4">{t("startTradingToday")}</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            {t("ctaDescription")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="btn-primary text-lg px-8 py-4">
              {t("openLiveAccount")}
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              {t("contactUs")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
