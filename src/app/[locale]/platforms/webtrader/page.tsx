"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WebTraderPage() {
  const t = useTranslations("webtrader");

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />
      
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="text-primary text-sm font-medium">{t("noDownloadRequired")}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {t("webTraderTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t("webTraderDescription")}
            </p>
            
            <button className="btn-primary text-lg px-10 py-5 shadow-lg shadow-primary/30">
              🚀 {t("launchWebTrader")}
            </button>
            
            <p className="text-sm text-muted-foreground mt-4">
              {t("compatibleBrowsers")}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto bg-background/80">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-signal-red" />
                  <div className="w-3 h-3 rounded-full bg-signal-amber" />
                  <div className="w-3 h-3 rounded-full bg-signal-green" />
                </div>
                <span className="text-sm text-muted-foreground">WebTrader - EUR/USD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-signal-green rounded-full animate-pulse" />
                <span className="text-xs text-signal-green">{t("connected")}</span>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-muted-foreground">{t("chartPlaceholder")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t("whyWebTrader")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌐", title: t("browserBased"), desc: t("browserBasedDesc") },
              { icon: "⚡", title: t("instantAccess"), desc: t("instantAccessDesc") },
              { icon: "🔒", title: t("secureConnection"), desc: t("secureConnectionDesc") },
              { icon: "📱", title: t("responsiveDesign"), desc: t("responsiveDesignDesc") },
              { icon: "📊", title: t("fullCharting"), desc: t("fullChartingDesc") },
              { icon: "📈", title: t("allInstrumentsAccess"), desc: t("allInstrumentsAccessDesc") },
              { icon: "💳", title: t("accountManagement"), desc: t("accountManagementDesc") },
              { icon: "💬", title: t("liveSupportInPlatform"), desc: t("liveSupportInPlatformDesc") },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("perfectForAnyDevice")}</h2>
              <p className="text-muted-foreground mb-6">
                {t("perfectForAnyDeviceDesc")}
              </p>
              <ul className="space-y-4">
                {[
                  t("noSoftwareRequired"),
                  t("worksOnAllOS"),
                  t("samePowerfulFeatures"),
                  t("synchronizedWithMobile"),
                  t("alwaysLatestVersion")
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-4xl mb-2">🖥️</div>
                  <div className="text-sm text-muted-foreground">{t("desktop")}</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="text-sm text-muted-foreground">{t("laptop")}</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-sm text-muted-foreground">{t("tablet")}</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary/50 rounded-xl text-center">
                <p className="text-sm text-muted-foreground">
                  {t("compatibleBrowsers")}
                </p>
                <div className="flex justify-center gap-4 mt-2">
                  {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
                    <span key={browser} className="text-xs text-muted-foreground">{browser}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("startTradingInSeconds")}</h2>
          <p className="text-muted-foreground mb-8">
            {t("startTradingInSecondsDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary text-lg px-10 py-5 shadow-lg shadow-primary/30">
              🚀 {t("launchWebTraderNow")}
            </button>
            <Link href="/register" className="btn-secondary text-lg px-8 py-4">
              {t("openLiveAccount")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
