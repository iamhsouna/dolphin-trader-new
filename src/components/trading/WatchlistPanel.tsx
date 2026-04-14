"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, TrendingDown } from "lucide-react";

interface WatchlistItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export default function WatchlistPanel() {
  const t = useTranslations("navigation");

  const watchlistItems: WatchlistItem[] = [
    { symbol: "EUR/USD", name: "Euro / US Dollar", price: "1.0856", change: "+0.05%", isPositive: true },
    { symbol: "GBP/USD", name: "British Pound / US Dollar", price: "1.2648", change: "-0.12%", isPositive: false },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", price: "157.42", change: "+0.08%", isPositive: true },
    { symbol: "XAU/USD", name: "Gold / US Dollar", price: "2342.50", change: "+0.34%", isPositive: true },
    { symbol: "BTC/USD", name: "Bitcoin / US Dollar", price: "67450.00", change: "+2.15%", isPositive: true },
    { symbol: "ETH/USD", name: "Ethereum / US Dollar", price: "3520.00", change: "+1.82%", isPositive: true },
    { symbol: "US30", name: "US Wall Street 30", price: "39520.50", change: "+0.45%", isPositive: true },
    { symbol: "NAS100", name: "US Tech 100", price: "17850.25", change: "+0.72%", isPositive: true },
  ];

  return (
    <aside className="trading-rightpanel" aria-label="Watchlist">
      <div className="rightpanel-header">
        <h2 className="rightpanel-title">{t("watchlist")}</h2>
      </div>
      <div className="rightpanel-content">
        <div className="flex flex-col gap-1">
          {watchlistItems.map((item) => (
            <div
              key={item.symbol}
              className="watchlist-item"
              role="button"
              tabIndex={0}
              aria-label={`${item.symbol}: ${item.price}, ${item.change}`}
            >
              <div className="watchlist-item-left">
                <span className="watchlist-symbol">{item.symbol}</span>
                <span className="watchlist-name">{item.name}</span>
              </div>
              <div className="watchlist-item-right">
                <span className="watchlist-price">{item.price}</span>
                <span className={`watchlist-change ${item.isPositive ? "positive" : "negative"}`}>
                  {item.isPositive ? (
                    <TrendingUp className="w-3 h-3 inline" />
                  ) : (
                    <TrendingDown className="w-3 h-3 inline" />
                  )}
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
