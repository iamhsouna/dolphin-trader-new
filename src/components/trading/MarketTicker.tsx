"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerPair {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export default function MarketTicker() {
  const pairs: TickerPair[] = [
    { symbol: "EUR/USD", price: "1.0856", change: "+0.05%", isPositive: true },
    { symbol: "GBP/USD", price: "1.2648", change: "-0.12%", isPositive: false },
    { symbol: "XAU/USD", price: "2342.50", change: "+0.34%", isPositive: true },
    { symbol: "BTC/USD", price: "67450.00", change: "+2.15%", isPositive: true },
  ];

  return (
    <div className="market-ticker" role="marquee" aria-label="Live market prices">
      {pairs.map((pair) => (
        <div key={pair.symbol} className="ticker-pair">
          <span className="ticker-symbol">{pair.symbol}</span>
          <span className="ticker-price">{pair.price}</span>
          <span className={`ticker-change ${pair.isPositive ? "positive" : "negative"}`}>
            {pair.isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {pair.change}
          </span>
        </div>
      ))}
    </div>
  );
}
