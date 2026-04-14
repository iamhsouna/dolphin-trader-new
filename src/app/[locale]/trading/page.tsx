import { getTranslations, setRequestLocale } from "next-intl/server";
import TradingLayout from "@/components/trading/TradingLayout";

interface TradingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TradingPage({ params }: TradingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "navigation" });

  return (
    <TradingLayout locale={locale}>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-foreground">
            {t("dashboard")}
          </h1>
          <p className="text-muted-foreground">
            Welcome to your trading dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Balance</div>
            <div className="text-2xl font-bold text-foreground">$124,560.00</div>
            <div className="text-sm text-signal-green mt-1">+$1,234.00 (1.2%)</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">Open Positions</div>
            <div className="text-2xl font-bold text-foreground">7</div>
            <div className="text-sm text-muted-foreground mt-1">4 forex, 3 crypto</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">Pending Orders</div>
            <div className="text-2xl font-bold text-foreground">3</div>
            <div className="text-sm text-muted-foreground mt-1">2 buy, 1 sell</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-sm text-muted-foreground mb-1">Today&apos;s P/L</div>
            <div className="text-2xl font-bold text-signal-green">+$890.50</div>
            <div className="text-sm text-muted-foreground mt-1">Since 00:00 UTC</div>
          </div>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Market Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { pair: "EUR/USD", price: "1.0856", change: "+0.05%", positive: true },
              { pair: "GBP/USD", price: "1.2648", change: "-0.12%", positive: false },
              { pair: "USD/JPY", price: "157.42", change: "+0.08%", positive: true },
              { pair: "XAU/USD", price: "2342.50", change: "+0.34%", positive: true },
              { pair: "BTC/USD", price: "67450.00", change: "+2.15%", positive: true },
              { pair: "ETH/USD", price: "3520.00", change: "+1.82%", positive: true },
            ].map((item) => (
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: "Buy EUR/USD", time: "2 min ago", amount: "+$450.00" },
              { action: "Sell BTC/USD", time: "15 min ago", amount: "-$120.00" },
              { action: "Buy XAU/USD", time: "1 hour ago", amount: "+$890.00" },
              { action: "Sell GBP/USD", time: "3 hours ago", amount: "-$45.00" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-accent/30"
              >
                <div>
                  <div className="font-medium text-foreground">{item.action}</div>
                  <div className="text-sm text-muted-foreground">{item.time}</div>
                </div>
                <div className={`font-semibold ${item.amount.startsWith("+") ? "text-signal-green" : "text-signal-red"}`}>
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
