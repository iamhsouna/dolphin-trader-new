"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Bell,
  Settings,
  Search,
  Plus,
  Minus,
  Maximize2,
  Volume2,
  Wifi,
  Clock,
  X,
  Menu,
  ArrowUpRight,
  ArrowDownRight,
  PanelRightClose,
  PanelRight,
  Wallet,
} from "lucide-react";

const initialWatchlist = [
  { symbol: "EUR/USD", name: "Euro/US Dollar", price: 1.0852, change: 0.0005, changePercent: 0.05, type: "forex" },
  { symbol: "GBP/USD", name: "British Pound/US Dollar", price: 1.2645, change: -0.0012, changePercent: -0.09, type: "forex" },
  { symbol: "USD/JPY", name: "US Dollar/Japanese Yen", price: 149.85, change: 0.15, changePercent: 0.10, type: "forex" },
  { symbol: "AUD/USD", name: "Australian Dollar/US Dollar", price: 0.6532, change: 0.0008, changePercent: 0.12, type: "forex" },
  { symbol: "USD/CHF", name: "US Dollar/Swiss Franc", price: 0.9015, change: -0.0005, changePercent: -0.06, type: "forex" },
  { symbol: "XAU/USD", name: "Gold/US Dollar", price: 2024.50, change: 12.30, changePercent: 0.61, type: "metals" },
  { symbol: "XAG/USD", name: "Silver/US Dollar", price: 22.85, change: -0.15, changePercent: -0.65, type: "metals" },
  { symbol: "BTC/USD", name: "Bitcoin/US Dollar", price: 67500.00, change: 1250.00, changePercent: 1.89, type: "crypto" },
  { symbol: "ETH/USD", name: "Ethereum/US Dollar", price: 3450.00, change: 45.00, changePercent: 1.32, type: "crypto" },
  { symbol: "US100", name: "Nasdaq 100", price: 17850.00, change: 85.50, changePercent: 0.48, type: "indices" },
  { symbol: "US30", name: "Dow Jones 30", price: 38950.00, change: 125.00, changePercent: 0.32, type: "indices" },
  { symbol: "OIL", name: "Crude Oil", price: 78.50, change: -0.85, changePercent: -1.07, type: "commodities" },
];

const generateChartData = (basePrice: number, points: number = 50) => {
  const data = [];
  let price = basePrice;
  for (let i = 0; i < points; i++) {
    price = price + (Math.random() - 0.5) * (basePrice * 0.001);
    data.push({
      time: i,
      price: price,
    });
  }
  return data;
};

const initialPositions = [
  { id: 1, symbol: "EUR/USD", type: "buy", volume: 0.10, openPrice: 1.0820, currentPrice: 1.0852, profit: 32.00 },
  { id: 2, symbol: "XAU/USD", type: "sell", volume: 0.05, openPrice: 2035.00, currentPrice: 2024.50, profit: 52.50 },
];

const initialOrders = [
  { id: 1, symbol: "GBP/USD", type: "buy limit", volume: 0.10, price: 1.2500, currentPrice: 1.2645 },
  { id: 2, symbol: "USD/JPY", type: "sell limit", volume: 0.20, price: 151.00, currentPrice: 149.85 },
];

const categories = [
  { key: "all", label: "All" },
  { key: "forex", label: "Forex" },
  { key: "metals", label: "Metals" },
  { key: "crypto", label: "Crypto" },
  { key: "indices", label: "Indices" },
  { key: "commodities", label: "Commodities" },
];

const timeframes = ["1m", "5m", "15m", "30m", "1H", "4H", "D1", "W1", "M1"];

export default function WebTraderPage() {
  useTranslations("webtrader");
  const [watchlist] = useState(initialWatchlist);
  const [selectedSymbol, setSelectedSymbol] = useState("EUR/USD");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState("1H");
  const [chartData, setChartData] = useState<{ time: number; price: number }[]>([]);
  const [positions] = useState(initialPositions);
  const [orders] = useState(initialOrders);
  const [volume, setVolume] = useState("0.10");
  const [showPositions, setShowPositions] = useState(true);
  const [showOrders, setShowOrders] = useState(true);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"order" | "positions" | "orders">("order");

  const selectedInstrument = watchlist.find((w) => w.symbol === selectedSymbol);

  useEffect(() => {
    if (selectedInstrument) {
      setChartData(generateChartData(selectedInstrument.price));
    }
  }, [selectedSymbol, selectedInstrument]);

  const filteredWatchlist = selectedCategory === "all"
    ? watchlist
    : watchlist.filter((w) => w.type === selectedCategory);

  const formatPrice = (price: number, symbol: string) => {
    if (symbol.includes("JPY")) return price.toFixed(3);
    if (price < 1) return price.toFixed(5);
    if (price > 1000) return price.toFixed(2);
    return price.toFixed(4);
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Top Navbar */}
      <nav className="h-12 flex-shrink-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="h-full px-4 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
              className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors lg:hidden"
            >
              <Menu className="w-4 h-4" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-7 h-7">
                <Image src="/logo-white.png" alt="Dolphin Markets" fill className="object-contain" />
              </div>
              <span className="font-bold text-foreground hidden sm:inline text-sm">Dolphin Markets</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
              <button className="px-3 py-1 rounded-md text-xs font-medium bg-primary text-white">
                WebTrader
              </button>
              <Link href="/platforms/mt5" className="px-3 py-1 rounded-md text-xs font-medium text-muted-foreground hover:bg-accent">
                MT5
              </Link>
            </div>
          </div>

          {/* Center Section - Symbol Info */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-sm">{selectedSymbol}</span>
              {selectedInstrument && (
                <>
                  <span className="font-mono text-xs">
                    {formatPrice(selectedInstrument.price, selectedSymbol)}
                  </span>
                  <span className={`text-xs font-medium flex items-center gap-0.5 ${
                    selectedInstrument.change >= 0 ? "text-signal-green" : "text-signal-red"
                  }`}>
                    {selectedInstrument.change >= 0 ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {selectedInstrument.change >= 0 ? "+" : ""}
                    {selectedInstrument.changePercent.toFixed(2)}%
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground mr-2">
              <span className="flex items-center gap-1">
                <Wifi className="w-3 h-3 text-signal-green" />
                <span className="w-1.5 h-1.5 bg-signal-green rounded-full animate-pulse" />
              </span>
            </div>
            <button className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 p-1.5 rounded-lg hover:bg-accent transition-colors">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-xs font-bold">
                J
              </div>
            </button>
            <button
              onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
              className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors ml-1"
            >
              {rightSidebarOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Trading Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Market Watch - Hidden on mobile unless toggled */}
        <aside className={`bg-card border-r border-border flex flex-col transition-all duration-300 ${
          leftSidebarOpen ? "w-60" : "w-0"
        } overflow-hidden flex-shrink-0`}>
          <div className="h-12 px-3 flex items-center justify-between border-b border-border flex-shrink-0">
            {!leftSidebarOpen ? null : (
              <span className="text-sm font-semibold text-foreground">Market Watch</span>
            )}
          </div>

          {leftSidebarOpen && (
            <>
              {/* Search */}
              <div className="p-2 flex-shrink-0">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-secondary/50 border border-border rounded-lg pl-8 pr-2 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="px-2 pb-2 flex-shrink-0">
                <div className="flex flex-wrap gap-0.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors ${
                        selectedCategory === cat.key
                          ? "bg-primary text-white"
                          : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Watchlist */}
              <div className="flex-1 overflow-y-auto min-h-0">
                {filteredWatchlist.map((item) => (
                  <button
                    key={item.symbol}
                    onClick={() => setSelectedSymbol(item.symbol)}
                    className={`w-full p-2 text-left transition-colors ${
                      selectedSymbol === item.symbol
                        ? "bg-primary/10 border-l-2 border-l-primary"
                        : "hover:bg-accent"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-medium text-xs">{item.symbol}</span>
                      <span className={`text-[10px] font-mono ${
                        item.change >= 0 ? "text-signal-green" : "text-signal-red"
                      }`}>
                        {formatPrice(item.price, item.symbol)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-muted-foreground truncate max-w-[80px]">{item.name}</span>
                      <span className={`text-[10px] font-medium ${
                        item.change >= 0 ? "text-signal-green" : "text-signal-red"
                      }`}>
                        {item.change >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 min-h-0">
          {/* Chart Header */}
          <div className="h-10 px-3 flex items-center justify-between border-b border-border bg-card/50 flex-shrink-0">
            <div className="flex items-center gap-2">
              <select
                value={selectedSymbol}
                onChange={(e) => setSelectedSymbol(e.target.value)}
                className="bg-secondary/50 border border-border rounded-md px-2 py-1 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary/50"
              >
                {watchlist.map((w) => (
                  <option key={w.symbol} value={w.symbol}>
                    {w.symbol}
                  </option>
                ))}
              </select>
              <div className="hidden sm:flex items-center gap-0.5 bg-secondary/50 rounded-md p-0.5">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setSelectedTimeframe(tf)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors ${
                      selectedTimeframe === tf
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Chart Area */}
          <div className="flex-1 relative bg-background p-2 min-h-0">
            {selectedInstrument && (
              <div className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor={selectedInstrument.change >= 0 ? "#0BA870" : "#E03050"}
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor={selectedInstrument.change >= 0 ? "#0BA870" : "#E03050"}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <YAxis
                      domain={["auto", "auto"]}
                      orientation="right"
                      tick={{ fontSize: 10, fill: "#A0A0B8" }}
                      tickLine={false}
                      axisLine={false}
                      width={50}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#11112A",
                        border: "1px solid #3A3A5C",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                      labelStyle={{ display: "none" }}
                      formatter={(value) => [
                        formatPrice(value as number, selectedSymbol),
                        "Price",
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke={selectedInstrument.change >= 0 ? "#0BA870" : "#E03050"}
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorPrice)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </main>

        {/* Right Panel - Order Entry & Positions - Hidden unless toggled */}
        <aside className={`bg-card border-l border-border flex flex-col transition-all duration-300 ${
          rightSidebarOpen ? "w-64" : "w-0"
        } overflow-hidden flex-shrink-0`}>
          {/* Tabs */}
          <div className="h-10 px-2 flex items-center border-b border-border gap-1 flex-shrink-0">
            <button
              onClick={() => setActiveTab("order")}
              className={`px-2 py-1 rounded-md text-[10px] font-medium transition-colors ${
                activeTab === "order"
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              Order
            </button>
            <button
              onClick={() => { setActiveTab("positions"); setShowPositions(!showPositions); }}
              className={`px-2 py-1 rounded-md text-[10px] font-medium transition-colors ${
                activeTab === "positions"
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              Pos ({positions.length})
            </button>
            <button
              onClick={() => { setActiveTab("orders"); setShowOrders(!showOrders); }}
              className={`px-2 py-1 rounded-md text-[10px] font-medium transition-colors ${
                activeTab === "orders"
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              Ord ({orders.length})
            </button>
          </div>

          {/* Order Entry */}
          {(activeTab === "order") && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
              {/* Symbol Info */}
              <div className="p-2.5 bg-secondary/50 rounded-xl">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sm">{selectedSymbol}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedInstrument?.type === "forex" ? "bg-product-bg-forex text-product-forex" :
                    selectedInstrument?.type === "metals" ? "bg-product-bg-metals text-product-metals" :
                    selectedInstrument?.type === "crypto" ? "bg-product-bg-crypto text-product-crypto" :
                    selectedInstrument?.type === "indices" ? "bg-product-bg-indices text-product-indices" :
                    "bg-product-bg-commodities text-product-commodities"
                  }`}>
                    {selectedInstrument?.type?.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xl font-bold font-mono">
                      {selectedInstrument && formatPrice(selectedInstrument.price, selectedSymbol)}
                    </div>
                    <div className={`text-[10px] ${
                      selectedInstrument && selectedInstrument.change >= 0 ? "text-signal-green" : "text-signal-red"
                    }`}>
                      {selectedInstrument && (
                        <>
                          {selectedInstrument.change >= 0 ? "+" : ""}
                          {selectedInstrument.changePercent.toFixed(2)}%
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-[10px] text-muted-foreground">
                    <div>Spread: 0.0</div>
                    <div>Leverage: 1:500</div>
                  </div>
                </div>
              </div>

              {/* Volume */}
              <div>
                <label className="text-[10px] text-muted-foreground mb-1 block">Volume</label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setVolume(Math.max(0.01, parseFloat(volume) - 0.01).toFixed(2))}
                    className="p-1.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <input
                    type="number"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="flex-1 bg-secondary/50 border border-border rounded-lg px-2 py-1.5 text-center font-mono text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                  <button
                    onClick={() => setVolume((parseFloat(volume) + 0.01).toFixed(2))}
                    className="p-1.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex justify-between text-[9px] text-muted-foreground mt-1">
                  <span>Min: 0.01</span>
                  <span>Max: 100</span>
                </div>
              </div>

              {/* Buy/Sell Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="py-3 rounded-xl font-bold text-xs bg-signal-green/20 text-signal-green hover:bg-signal-green/30 transition-colors flex flex-col items-center">
                  <TrendingUp className="w-4 h-4 mb-0.5" />
                  BUY
                </button>
                <button className="py-3 rounded-xl font-bold text-xs bg-signal-red/20 text-signal-red hover:bg-signal-red/30 transition-colors flex flex-col items-center">
                  <TrendingDown className="w-4 h-4 mb-0.5" />
                  SELL
                </button>
              </div>

              {/* Trading Info */}
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between text-muted-foreground">
                  <span>Margin Required</span>
                  <span className="font-mono">$21.70</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Swap Long</span>
                  <span className="font-mono text-signal-red">-0.02</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Swap Short</span>
                  <span className="font-mono text-signal-green">0.01</span>
                </div>
              </div>
            </div>
          )}

          {/* Positions */}
          {(activeTab === "positions" || showPositions) && (
            <div className="flex-1 overflow-y-auto border-t border-border min-h-0">
              <div className="p-2">
                <h3 className="text-xs font-semibold mb-1.5">Open Positions</h3>
                {positions.length === 0 ? (
                  <div className="text-center py-4 text-[10px] text-muted-foreground">
                    No open positions
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {positions.map((pos) => (
                      <div key={pos.id} className="p-2 bg-secondary/50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1">
                            <span className={`text-[9px] px-1 py-0.5 rounded font-medium ${
                              pos.type === "buy" ? "bg-signal-green/20 text-signal-green" : "bg-signal-red/20 text-signal-red"
                            }`}>
                              {pos.type.toUpperCase()}
                            </span>
                            <span className="font-medium text-xs">{pos.symbol}</span>
                          </div>
                          <span className={`text-xs font-mono font-medium ${
                            pos.profit >= 0 ? "text-signal-green" : "text-signal-red"
                          }`}>
                            {pos.profit >= 0 ? "+" : ""}${pos.profit.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-[9px] text-muted-foreground">
                          <span>Vol: {pos.volume}</span>
                          <span>P: {pos.openPrice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Pending Orders */}
          {(activeTab === "orders" || showOrders) && (
            <div className="flex-1 overflow-y-auto border-t border-border min-h-0">
              <div className="p-2">
                <h3 className="text-xs font-semibold mb-1.5">Pending Orders</h3>
                {orders.length === 0 ? (
                  <div className="text-center py-4 text-[10px] text-muted-foreground">
                    No pending orders
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {orders.map((ord) => (
                      <div key={ord.id} className="p-2 bg-secondary/50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1">
                            <span className="text-[9px] px-1 py-0.5 rounded bg-primary/20 text-primary font-medium">
                              {ord.type.toUpperCase()}
                            </span>
                            <span className="font-medium text-xs">{ord.symbol}</span>
                          </div>
                          <button className="p-0.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex justify-between text-[9px] text-muted-foreground">
                          <span>Vol: {ord.volume}</span>
                          <span>Price: {ord.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="p-2 border-t border-border bg-card flex-shrink-0">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                05:42:18
              </span>
              <span>Server Time</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile Bottom Bar - Quick Actions */}
      <div className="h-14 bg-card border-t border-border flex items-center justify-between px-4 lg:hidden flex-shrink-0">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-signal-green/20 text-signal-green">
            <TrendingUp className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-signal-red/20 text-signal-red">
            <TrendingDown className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-secondary/50">
            <Wallet className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
            className="p-2 rounded-lg bg-primary text-white"
          >
            <PanelRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}