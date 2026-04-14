"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { initialPrices, accountTypes, features, platformFeatures, testimonials, badges, regulations, PriceData } from "@/lib/constants";

function PriceTicker({ prices }: { prices: PriceData[] }) {
  const tickerPrices = [...prices, ...prices, ...prices, ...prices];

  return (
    <div className="bg-background/80 border-b border-border/50 py-3 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-ticker whitespace-nowrap">
        {tickerPrices.map((price, i) => (
          <div key={i} className="flex items-center gap-3 px-6 border-r border-border/50 hover:bg-muted/30 transition-colors cursor-default">
            <span className="text-sm font-medium text-muted-foreground">{price.symbol}</span>
            <span className="text-sm font-mono text-foreground">{price.bid.toFixed(price.symbol.includes("JPY") || price.symbol.includes("XAU") || price.symbol.includes("BTC") ? 2 : 4)}</span>
            <span className={`text-xs font-medium ${price.change >= 0 ? "text-signal-green" : "text-signal-red"}`}>
              {price.change >= 0 ? "▲" : "▼"} {Math.abs(price.changePercent).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero({ openRegister, prices }: { openRegister: () => void; prices: PriceData[] }) {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="animate-slide-up"
          >
            <div className="inline-flex items-center gap-2 bg-signal-green/10 border border-signal-green/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-signal-green rounded-full animate-pulse" />
              <span className="text-sm text-signal-green font-medium"> {t("marketsLive")}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              {t("heroTitle")}
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={openRegister} className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
                <span>{t("startTradingCTA")}</span>
                <span className="text-xl">→</span>
              </button>
              <Link href="/demo" className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
                <span>🎮</span>
                <span>{t("tryDemo")}</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              {[
                { icon: "✓", text: t("regulatedByFSC") },
                { icon: "✓", text: t("segregatedFunds") },
                { icon: "✓", text: t("executionSpeed") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-signal-green/20 flex items-center justify-center text-signal-green text-xs">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 animate-float"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">{t("liveMarketPrices")}</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-signal-green rounded-full animate-pulse" />
                  <span className="text-xs text-signal-green">{t("realtime")}</span>
                </div>
              </div>

              <div className="space-y-1">
                {prices.slice(0, 8).map((price, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0 hover:bg-muted/30 -mx-4 px-4 rounded transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${price.change >= 0 ? "bg-signal-green" : "bg-signal-red"}`} />
                      <span className="font-medium">{price.symbol}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm">{price.bid.toFixed(price.symbol.includes("JPY") || price.symbol.includes("XAU") || price.symbol.includes("BTC") ? 2 : 4)}</div>
                      <div className={`text-xs ${price.change >= 0 ? "text-signal-green" : "text-signal-red"}`}>
                        {price.change >= 0 ? "+" : ""}{price.changePercent.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/dashboard" className="block mt-4 text-center text-sm text-primary hover:underline py-2 border-t border-border/30">
                {t("viewAllMarkets")} →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 animate-pulse-glow"
            >
              <div className="text-xs text-muted-foreground mb-2">{t("todaysProfit")}</div>
              <div className="text-3xl font-bold text-signal-green">+$12,450.00</div>
              <div className="text-xs text-muted-foreground mt-1">+24.5% return</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -left-4 glass-card rounded-xl p-4 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl">🏆</div>
                <div>
                  <div className="font-semibold text-sm">{t("topRated")}</div>
                  <div className="text-xs text-muted-foreground">{t("brokerAward")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const t = useTranslations("Stats");
  const statsData = [
    { value: "$2.5B+", label: t("monthlyVolume"), icon: "📊" },
    { value: "150K+", label: t("activeTraders"), icon: "👥" },
    { value: "60+", label: t("currencyPairs"), icon: "💱" },
    { value: "0.1ms", label: t("executionSpeed"), icon: "⚡" },
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const t = useTranslations("Products");

  const productsList = [
    { nameKey: "forex", icon: "💱", descKey: "forexDesc", spread: "0.0", link: "/products/forex", color: "from-[#5B31F5] to-[#7B57FF]" },
    { nameKey: "preciousMetals", icon: "🥇", descKey: "goldSilverDesc", spread: "0.0", link: "/products/metals", color: "from-amber-500 to-yellow-500" },
    { nameKey: "indices", icon: "📊", descKey: "indicesDesc", spread: "0.2", link: "/products/indices", color: "from-purple-500 to-pink-500" },
    { nameKey: "commodities", icon: "🛢️", descKey: "oilDesc", spread: "0.3", link: "/products/commodities", color: "from-green-500 to-emerald-500" },
    { nameKey: "crypto", icon: "₿", descKey: "cryptoDesc", spread: "0.5", link: "/products/crypto", color: "from-orange-500 to-red-500" },
    { nameKey: "shares", icon: "📈", descKey: "sharesDesc", spread: "0.1", link: "/products/shares", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t("tradingProductsSection")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">{t("allMarketsTitle")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("allMarketsDesc")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsList.map((product, i) => (
            <Link key={i} href={product.link} className="glass-card rounded-2xl p-6 hover-lift group cursor-pointer relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-10 rounded-full blur-2xl`} />
              <div className="relative">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{t(product.nameKey as any)}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t(product.descKey as any)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-sm font-semibold">{t("fromPipsValue", { spread: product.spread })}</span>
                  <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors flex items-center gap-1">
                    {t("startTrading")} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  const t = useTranslations("Platforms");

  return (
    <section id="platforms" className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t("tradingPlatforms")}</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">{t("metaTrader5")} - {t("industryStandard")}</h2>
            <p className="text-muted-foreground text-muted-foreground mb-8">{t("metaTraderDesc")}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {platformFeatures.map((feature, i) => (
                <div key={i} className="glass rounded-xl p-4 hover:bg-muted/50 transition-colors">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <div className="font-semibold mb-1">{t(feature.titleKey as any)}</div>
                  <div className="text-sm text-muted-foreground">{t(feature.descKey as any)}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2">
                <span>🚀</span>
                <span>{t("launchWebTrader")}</span>
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <span>↓</span>
                <span>{t("downloadMT5")}</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5" />
              <div className="relative">
                <div className="text-8xl mb-6">📱</div>
                <h3 className="text-2xl font-bold mb-3">{t("tradeAnywhere")}</h3>
                <p className="text-muted-foreground mb-8">{t("tradeAnywhereDesc")}</p>

                <div className="flex justify-center gap-4 flex-wrap">
                  {[
                    { icon: "🍎", labelKey: "iosAppStore", labelSub: "download", href: "#" },
                    { icon: "🤖", labelKey: "googlePlay", labelSub: "download", href: "#" },
                    { icon: "💻", labelKey: "windows", labelSub: "download", href: "#" },
                  ].map((app, i) => (
                    <a key={i} href={app.href} className="flex items-center gap-2 bg-muted/80 rounded-xl px-4 py-3 hover:bg-muted/80 transition-colors">
                      <span className="text-2xl">{app.icon}</span>
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">{t(app.labelKey as any)}</div>
                        <div className="text-sm font-medium">{t(app.labelSub as any)}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl">✓</div>
                <div>
                  <div className="font-bold">{t("connected")}</div>
                  <div className="text-xs text-muted-foreground">{t("liveAccount")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccountTypesSection({ openRegister }: { openRegister: () => void }) {
  const t = useTranslations("Accounts");
  const tf = useTranslations("Features");

  return (
    <section id="accounts" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{tf("accountTypesSection")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">{t("chooseAccount")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("transparentPricing")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {accountTypes.map((account, i) => (
            <div key={i} className={`glass-card rounded-2xl p-8 hover-lift relative ${i === 1 ? "border-primary/50 ring-2 ring-primary/20 scale-105" : ""}`}>
              {i === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5B31F5] to-[#7B57FF] text-primary-foreground text-xs font-bold px-6 py-2 rounded-full shadow-lg shadow-primary/30">
                  ⭐ {t("mostPopular")}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{account.name === "Standard" ? t("standard") : account.name === "ECN Pro" ? t("ecnPro") : t("vip")}</h3>
                <div className="text-4xl font-bold gradient-text mb-1">{account.spread}</div>
                <div className="text-sm text-muted-foreground">{t("averageSpread")}</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">{t("commission")}</span>
                  <span className="font-semibold">{account.commission}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">{t("minDeposit")}</span>
                  <span className="font-semibold">{account.minDeposit}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">{t("maxLeverage")}</span>
                  <span className="font-semibold">{account.leverage}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">{t("platform")}</span>
                  <span className="font-semibold">MT5</span>
                </div>
              </div>

              <button onClick={openRegister} className={i === 1 ? "btn-primary w-full py-4 text-lg" : "btn-secondary w-full py-4 text-lg"}>
                {t("openAccount")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const t = useTranslations("Features");

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t("whyDolphinMarkets")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">{t("tradersChoice")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("tradersTrust")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover-lift group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{t(feature.titleKey as any)}</h3>
              <p className="text-sm text-muted-foreground">{t(feature.descKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ openRegister }: { openRegister: () => void }) {
  const t = useTranslations("CTA");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t("readyToStart")}</h2>
        <p className="text-xl text-muted-foreground mb-10">{t("openMinutes")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={openRegister} className="btn-primary text-lg px-10 py-5 shadow-lg shadow-primary/30">
            {t("createLiveAccount")}
          </button>
          <Link href="/demo" className="btn-secondary text-lg px-10 py-5">
            {t("tryDemoFirst")}
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          {[
            { icon: "✓", text: t("noHiddenFees") },
            { icon: "✓", text: t("fastKYC") },
            { icon: "✓", text: t("support247CTA") },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-signal-green">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t("testimonials")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">{t("trustedByTraders")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("whatClientsSay")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B31F5] to-[#7B57FF] flex items-center justify-center text-lg font-bold text-foreground">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{t(testimonial.roleKey as any)}</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">&quot;{t(testimonial.textKey as any)}&quot;</p>
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-signal-amber">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">{t("secureTrusted")}</h3>
            <p className="text-sm text-muted-foreground">{t("securityMeasures")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-3xl mx-auto mb-3">
                  {badge.icon}
                </div>
                <div className="font-medium text-sm">{t(badge.labelKey as any)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulationSection() {
  const t = useTranslations("Regulation");

  return (
    <section className="py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t("securityRegulation")}</span>
          <h2 className="text-3xl font-bold mt-4 mb-4">{t("fundsProtected")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regulations.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-4xl mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(item.titleKey as any)}</h3>
              <p className="text-sm text-muted-foreground">{t(item.descKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnnouncementBar() {
  const t = useTranslations("Announcement");

  return (
    <div className="relative z-40 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/40 border-b border-primary/30 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-primary animate-pulse">📢</span>
          <span className="text-muted-foreground">{t("marketUpdate")}: {t("usSessionOpen")}</span>
          <span className="ml-auto">
            <Link href="/trading-tools" className="text-primary hover:underline text-xs">{t("viewCalendar")} →</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [prices, setPrices] = useState(initialPrices);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((price) => {
          const change = (Math.random() - 0.5) * price.spread * 0.1;
          const newBid = price.bid + change;
          const spreadMultiplier = price.symbol.includes("XAU") || price.symbol.includes("BTC") ? 100 : 1;
          return {
            ...price,
            bid: newBid,
            ask: newBid + (price.spread / 10000) * spreadMultiplier,
            change: change,
            changePercent: (change / price.bid) * 100,
            timestamp: Date.now(),
          };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const openRegister = () => {
    // In a real app, this would open an auth modal
  };

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <AnnouncementBar />
      <PriceTicker prices={prices} />
      <Hero openRegister={openRegister} prices={prices} />
      <StatsSection />
      <ProductsSection />
      <PlatformsSection />
      <AccountTypesSection openRegister={openRegister} />
      <FeaturesSection />
      <CTASection openRegister={openRegister} />
      <TestimonialsSection />
      <RegulationSection />
      <Footer />
    </div>
  );
}
