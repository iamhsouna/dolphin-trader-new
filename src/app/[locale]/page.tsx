"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { initialPrices, accountTypes, features, platformFeatures, testimonials, badges, regulations, PriceData } from "@/lib/constants";
import { Check, Trophy, BarChart3, Users, Zap, Smartphone, Rocket, Star, Megaphone, Gem, Droplet, TrendingUp, Gamepad2 } from "lucide-react";

const ExchangeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3L21 7L17 11" />
    <path d="M21 7H9" />
    <path d="M7 13L3 17L7 21" />
    <path d="M3 17H15" />
  </svg>
);

const CryptoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 8H14C15.1 8 16 8.9 16 10V14C16 15.1 15.1 16 14 16H10C8.9 16 8 15.1 8 14V10C8 8.9 8.9 8 10 8" />
    <path d="M10 12H14" />
    <path d="M10 10V14" />
  </svg>
);

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C12 2 10.5 4 10.5 6.5C10.5 8.5 12 10 12 10C12 10 13.5 8.5 13.5 6.5C13.5 4 12 2 12 2Z" />
    <path d="M12 10V20" />
    <path d="M9 13C9 13 8 17 6 19" />
    <path d="M15 13C15 13 16 17 18 19" />
  </svg>
);

const AndroidIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6H18V18H6V6Z" />
    <path d="M6 9H18" />
    <circle cx="6" cy="15" r="1" fill="currentColor" />
    <circle cx="18" cy="15" r="1" fill="currentColor" />
    <path d="M9 18H15" />
  </svg>
);

const WindowsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);

function PriceTicker({ prices }: { prices: PriceData[] }) {
  const tickerPrices = [...prices, ...prices, ...prices, ...prices];

  return (
    <div className="bg-ticker-bg border-b border-border/50 py-3 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ticker-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ticker-bg to-transparent z-10" />
      <div className="flex animate-ticker whitespace-nowrap">
        {tickerPrices.map((price, i) => (
          <div key={i} className="flex items-center gap-3 px-6 border-r border-border/50 hover:bg-muted/30 transition-colors cursor-default">
            <span className="text-sm font-medium text-foreground-muted">{price.symbol}</span>
            <span className="text-sm font-mono text-foreground">{price.bid.toFixed(price.symbol.includes("JPY") || price.symbol.includes("XAU") || price.symbol.includes("BTC") ? 2 : 4)}</span>
            <span className={`text-xs font-medium flex items-center gap-0.5 ${price.change >= 0 ? "text-ticker-up" : "text-ticker-down"}`}>
              {price.change >= 0 ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 8V2M5 2L2 5M5 2L8 5" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 2V8M5 8L2 5M5 8L8 5" />
                </svg>
              )}
              {Math.abs(price.changePercent).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero({ openRegister, prices }: { openRegister: () => void; prices: PriceData[] }) {
  const t = useTranslations("hero");

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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" />
                </svg>
              </button>
              <Link href="/demo" className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
                <Gamepad2 className="w-5 h-5" />
                <span>{t("tryDemo")}</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              {[
                { text: t("regulatedByFSC") },
                { text: t("segregatedFunds") },
                { text: t("executionSpeed") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Check className="w-3 h-3" />
                  </div>
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

              <Link href="/dashboard" className="block mt-4 text-center text-sm text-accent hover:underline py-2 border-t border-border/30">
                {t("viewAllMarkets")} →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 animate-pulse-glow"
            >
              <div className="text-xs text-muted-foreground mb-2">{t("topPerformers")}</div>
              <div className="text-3xl font-bold text-signal-green">500+</div>
              <div className="text-xs text-muted-foreground mt-1">{t("activeTradersLabel")}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -left-4 glass-card rounded-xl p-4 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
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
  const t = useTranslations("stats");
  const statsData = [
    { value: "$2.5B+", label: t("monthlyVolume"), icon: BarChart3 },
    { value: "150K+", label: t("activeTraders"), icon: Users },
    { value: "60+", label: t("currencyPairs"), icon: ExchangeIcon },
    { value: "0.1ms", label: t("executionSpeed"), icon: Zap },
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 text-accent">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const t = useTranslations("products");

  const productsList = [
    { nameKey: "forex", icon: ExchangeIcon, descKey: "forexDesc", spread: "0.0", link: "/products/forex", bgClass: "product-bg-forex" },
    { nameKey: "preciousMetals", icon: Gem, descKey: "goldSilverDesc", spread: "0.0", link: "/products/metals", bgClass: "product-bg-metals" },
    { nameKey: "indices", icon: BarChart3, descKey: "indicesDesc", spread: "0.2", link: "/products/indices", bgClass: "product-bg-indices" },
    { nameKey: "commodities", icon: Droplet, descKey: "oilDesc", spread: "0.3", link: "/products/commodities", bgClass: "product-bg-commodities" },
    { nameKey: "crypto", icon: CryptoIcon, descKey: "cryptoDesc", spread: "0.5", link: "/products/crypto", bgClass: "product-bg-crypto" },
    { nameKey: "shares", icon: TrendingUp, descKey: "sharesDesc", spread: "0.1", link: "/products/shares", bgClass: "product-bg-shares" },
  ];

  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">{t("tradingProductsSection")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4 text-foreground">{t("allMarketsTitle")}</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">{t("allMarketsDesc")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsList.map((product, i) => (
            <Link key={i} href={product.link} className="glass-card rounded-2xl p-6 hover-lift group cursor-pointer relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 ${product.bgClass} rounded-full blur-2xl`} />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors text-foreground">{t(product.nameKey as any)}</h3>
                <p className="text-foreground-muted text-sm mb-4">{t(product.descKey as any)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent text-sm font-semibold">{t("fromPipsValue", { spread: product.spread })}</span>
                  <span className="text-foreground-muted text-sm group-hover:text-accent transition-colors flex items-center gap-1">
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
  const t = useTranslations("platforms");

  const platformIcons = [Zap, BarChart3, Gamepad2, TrendingUp, Smartphone, Smartphone];

  return (
    <section id="platforms" className="py-24 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">{t("tradingPlatforms")}</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">{t("metaTrader5")} - {t("industryStandard")}</h2>
            <p className="text-foreground-muted text-foreground-muted mb-8">{t("metaTraderDesc")}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {platformFeatures.map((feature, i) => (
                <div key={i} className="glass rounded-xl p-4 hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                    {React.createElement(platformIcons[i], { className: "w-5 h-5" })}
                  </div>
                  <div className="font-semibold mb-1 text-foreground">{t(feature.titleKey as any)}</div>
                  <div className="text-sm text-foreground-muted">{t(feature.descKey as any)}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2">
                <Rocket className="w-5 h-5" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/5" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                  <Smartphone className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{t("tradeAnywhere")}</h3>
                <p className="text-foreground-muted mb-8">{t("tradeAnywhereDesc")}</p>

                <div className="flex justify-center gap-4 flex-wrap">
                  {[
                    { icon: AppleIcon, labelKey: "iosAppStore", labelSub: "download", href: "#" },
                    { icon: AndroidIcon, labelKey: "googlePlay", labelSub: "download", href: "#" },
                    { icon: WindowsIcon, labelKey: "windows", labelSub: "download", href: "#" },
                  ].map((app, i) => (
                    <div key={i} className="relative opacity-60 cursor-default">
                      <div className="flex items-center gap-2 bg-muted/80 rounded-xl px-4 py-3">
                        {React.createElement(app.icon, { className: "w-6 h-6 text-foreground-muted" })}
                        <div className="text-left">
                          <div className="text-xs text-foreground-muted">{t(app.labelKey as any)}</div>
                          <div className="text-sm font-medium text-foreground">{t(app.labelSub as any)}</div>
                        </div>
                      </div>
                      <span className="absolute -top-2 -right-2 text-[10px] bg-foreground-subtle/20 text-foreground-subtle px-1.5 py-0.5 rounded-full">
                        {t("comingSoon")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full product-bg-success flex items-center justify-center text-accent">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{t("connected")}</div>
                  <div className="text-xs text-foreground-muted">{t("liveAccount")}</div>
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
  const t = useTranslations("accounts");
  const tf = useTranslations("features");

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
            <div key={i} className={`glass-card rounded-2xl p-8 hover-lift relative ${i === 1 ? "border-accent ring-2 ring-accent/20 scale-105" : ""}`}>
              {i === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-6 py-2 rounded-full shadow-lg shadow-accent/30">
                  <Star className="w-3 h-3 inline mr-1 fill-current" /> {t("mostPopular")}
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
  const t = useTranslations("features");

  const featureIcons = [Gamepad2, Zap, BarChart3, TrendingUp, Smartphone, Trophy];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">{t("whyDolphinMarkets")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4 text-foreground">{t("tradersChoice")}</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">{t("tradersTrust")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover-lift group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                {React.createElement(featureIcons[i], { className: "w-7 h-7" })}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors text-foreground">{t(feature.titleKey as any)}</h3>
              <p className="text-sm text-foreground-muted">{t(feature.descKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ openRegister }: { openRegister: () => void }) {
  const t = useTranslations("cta");

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

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-foreground-muted">
          {[
            { text: t("noHiddenFees") },
            { text: t("fastKYC") },
            { text: t("support247CTA") },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">{t("testimonials")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4 text-foreground">{t("trustedByTraders")}</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">{t("whatClientsSay")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-lg font-bold text-accent-foreground">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground-muted">{t(testimonial.roleKey as any)}</div>
                </div>
              </div>
              <p className="text-foreground-muted text-sm mb-4">&quot;{t(testimonial.textKey as any)}&quot;</p>
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-signal-amber fill-signal-amber" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2 text-foreground">{t("secureTrusted")}</h3>
            <p className="text-sm text-foreground-muted">{t("securityMeasures")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, i) => {
              const badgeIcons = [BarChart3, Trophy, TrendingUp, Gamepad2];
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-accent mx-auto mb-3">
                    {React.createElement(badgeIcons[i], { className: "w-7 h-7" })}
                  </div>
                  <div className="font-medium text-sm text-foreground">{t(badge.labelKey as any)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulationSection() {
  const t = useTranslations("regulation");

  const regulationIcons = [Trophy, BarChart3, TrendingUp];

  return (
    <section className="py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">{t("securityRegulation")}</span>
          <h2 className="text-3xl font-bold mt-4 mb-4 text-foreground">{t("fundsProtected")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regulations.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-accent mx-auto mb-4">
                {React.createElement(regulationIcons[i], { className: "w-8 h-8" })}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{t(item.titleKey as any)}</h3>
              <p className="text-sm text-foreground-muted">{t(item.descKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnnouncementBar() {
  const t = useTranslations("announcement");

  return (
    <div className="relative z-40 bg-gradient-to-r from-accent/40 via-accent/30 to-accent/40 border-b border-accent/30 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 text-sm">
          <Megaphone className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-foreground-muted">{t("marketUpdate")}: {t("usSessionOpen")}</span>
          <span className="ml-auto">
            <Link href="/trading-tools" className="text-accent hover:underline text-xs">{t("viewCalendar")} →</Link>
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
