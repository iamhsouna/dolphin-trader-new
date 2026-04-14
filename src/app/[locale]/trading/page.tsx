import { getTranslations, setRequestLocale } from "next-intl/server";
import TradingLayout from "@/components/trading/TradingLayout";

interface TradingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TradingPage({ params }: TradingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "navigation" });

  const marketPairs = [
    { pair: "EUR/USD", price: "1.0856", change: "+0.05%", positive: true },
    { pair: "GBP/USD", price: "1.2648", change: "-0.12%", positive: false },
    { pair: "USD/JPY", price: "157.42", change: "+0.08%", positive: true },
    { pair: "XAU/USD", price: "2342.50", change: "+0.34%", positive: true },
    { pair: "BTC/USD", price: "67450.00", change: "+2.15%", positive: true },
    { pair: "ETH/USD", price: "3520.00", change: "+1.82%", positive: true },
  ];

  const recentActivity = [
    { action: `${t("buy")} EUR/USD`, time: `2 ${t("minAgo")}`, amount: "+$450.00", positive: true },
    { action: `${t("sell")} BTC/USD`, time: `15 ${t("minAgo")}`, amount: "-$120.00", positive: false },
    { action: `${t("buy")} XAU/USD`, time: `1 ${t("hourAgo")}`, amount: "+$890.00", positive: true },
    { action: `${t("sell")} GBP/USD`, time: `3 ${t("hoursAgo")}`, amount: "-$45.00", positive: false },
  ];

  return (
    <TradingLayout locale={locale}>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-foreground">
            {t("dashboard")}
          </h1>
          <p className="text-muted-foreground">
            {t("welcomeMessage")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">{t("totalBalance")}</div>
            <div className="text-2xl font-bold text-foreground">$124,560.00</div>
            <div className="text-sm text-signal-green mt-1">+$1,234.00 (1.2%)</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">{t("openPositions")}</div>
            <div className="text-2xl font-bold text-foreground">7</div>
            <div className="text-sm text-muted-foreground mt-1">{t("totalPositions")}</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">{t("pendingOrders")}</div>
            <div className="text-2xl font-bold text-foreground">3</div>
            <div className="text-sm text-muted-foreground mt-1">{t("pendingTypes")}</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">{t("todaysPL")}</div>
            <div className="text-2xl font-bold text-signal-green">+$890.50</div>
            <div className="text-sm text-muted-foreground mt-1">{t("sinceUTC")}</div>
          </div>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t("marketOverview")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {marketPairs.map((item) => (
              <div
                key={item.pair}
                className="p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors cursor-pointer"
              >
                <div className="text-sm font-semibold text-foreground">{item.pair}</div>
                <div className="text-lg font-mono font-bold text-foreground">{item.price}</div>
                <div className={`text-sm font-medium ${item.positive ? "text-signal-green" : "text-signal-red"}`}>
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t("recentActivity")}</h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-accent/30"
              >
                <div>
                  <div className="font-medium text-foreground">{item.action}</div>
                  <div className="text-sm text-muted-foreground">{item.time}</div>
                </div>
                <div className={`font-semibold ${item.positive ? "text-signal-green" : "text-signal-red"}`}>
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TradingLayout>
  );
}
