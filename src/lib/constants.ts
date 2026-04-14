export interface PriceData {
  symbol: string;
  bid: number;
  ask: number;
  spread: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  timestamp: number;
}

export interface AccountType {
  name: string;
  spread: string;
  commission: string;
  minDeposit: string;
  leverage: string;
  color: string;
}

export interface Feature {
  icon: string;
  titleKey: string;
  descKey: string;
}

export interface Stat {
  value: string;
  labelKey: string;
  icon: string;
}

export const initialPrices: PriceData[] = [
  { symbol: "EUR/USD", bid: 1.0852, ask: 1.0854, spread: 0.2, change: 0.0012, changePercent: 0.11, high: 1.0865, low: 1.0838, timestamp: Date.now() },
  { symbol: "GBP/USD", bid: 1.2645, ask: 1.2648, spread: 0.3, change: -0.0008, changePercent: -0.06, high: 1.2672, low: 1.2635, timestamp: Date.now() },
  { symbol: "USD/JPY", bid: 149.85, ask: 149.87, spread: 0.2, change: 0.15, changePercent: 0.10, high: 150.10, low: 149.50, timestamp: Date.now() },
  { symbol: "USD/CHF", bid: 0.8812, ask: 0.8814, spread: 0.2, change: -0.0005, changePercent: -0.06, high: 0.8830, low: 0.8805, timestamp: Date.now() },
  { symbol: "AUD/USD", bid: 0.6523, ask: 0.6525, spread: 0.2, change: 0.0008, changePercent: 0.12, high: 0.6535, low: 0.6510, timestamp: Date.now() },
  { symbol: "USD/CAD", bid: 1.3567, ask: 1.3569, spread: 0.2, change: 0.0015, changePercent: 0.11, high: 1.3585, low: 1.3550, timestamp: Date.now() },
  { symbol: "NZD/USD", bid: 0.6024, ask: 0.6026, spread: 0.2, change: 0.0003, changePercent: 0.05, high: 0.6040, low: 0.6015, timestamp: Date.now() },
  { symbol: "EUR/GBP", bid: 0.8582, ask: 0.8584, spread: 0.2, change: 0.0010, changePercent: 0.12, high: 0.8595, low: 0.8568, timestamp: Date.now() },
  { symbol: "EUR/JPY", bid: 162.50, ask: 162.53, spread: 0.3, change: 0.25, changePercent: 0.15, high: 162.80, low: 162.10, timestamp: Date.now() },
  { symbol: "XAU/USD", bid: 2024.50, ask: 2025.00, spread: 0.5, change: 12.50, changePercent: 0.62, high: 2035.00, low: 2010.00, timestamp: Date.now() },
  { symbol: "XAG/USD", bid: 23.85, ask: 23.88, spread: 0.3, change: 0.35, changePercent: 1.49, high: 24.10, low: 23.50, timestamp: Date.now() },
  { symbol: "BTC/USD", bid: 67500.00, ask: 67600.00, spread: 100, change: 1250.00, changePercent: 1.89, high: 68200.00, low: 66000.00, timestamp: Date.now() },
  { symbol: "ETH/USD", bid: 3450.00, ask: 3455.00, spread: 5, change: 45.00, changePercent: 1.32, high: 3500.00, low: 3400.00, timestamp: Date.now() },
];

export const accountTypes: AccountType[] = [
  { name: "Standard", spread: "0.0 pips", commission: "$0", minDeposit: "$200", leverage: "Up to 500:1", color: "cyan" },
  { name: "ECN Pro", spread: "0.0 pips", commission: "$7/lot", minDeposit: "$2000", leverage: "Up to 1000:1", color: "purple" },
  { name: "VIP", spread: "0.0 pips", commission: "$3/lot", minDeposit: "$25000", leverage: "Up to 2000:1", color: "amber" },
];

export const features: Feature[] = [
  { icon: "🎯", titleKey: "rawSpreads", descKey: "rawSpreadsDesc" },
  { icon: "⚡", titleKey: "instantExecutionFeature", descKey: "instantExecutionFeatureDesc" },
  { icon: "🔒", titleKey: "segregatedFundsFeature", descKey: "segregatedFundsFeatureDesc" },
  { icon: "🌍", titleKey: "instruments", descKey: "instrumentsDesc" },
  { icon: "📱", titleKey: "mt5Platform", descKey: "mt5PlatformDesc" },
  { icon: "🏆", titleKey: "support247", descKey: "support247Desc" },
];

export const stats: Stat[] = [
  { value: "$2.5B+", labelKey: "monthlyVolume", icon: "📊" },
  { value: "150K+", labelKey: "activeTraders", icon: "👥" },
  { value: "60+", labelKey: "currencyPairs", icon: "💱" },
  { value: "0.1ms", labelKey: "executionSpeed", icon: "⚡" },
];

export const testimonials = [
  { name: "Ahmed K.", country: "🇦🇪", roleKey: "forexTrader", textKey: "testimonialScalping", rating: 5 },
  { name: "Sarah M.", country: "🇬🇧", roleKey: "goldInvestor", textKey: "testimonialWithdrawals", rating: 5 },
  { name: "Michael T.", country: "🇩🇪", roleKey: "indexTrader", textKey: "testimonialIndices", rating: 5 },
  { name: "David L.", country: "🇸🇬", roleKey: "cryptoTrader", textKey: "testimonialCrypto", rating: 5 },
];

export const awards = [
  { awardKey: "bestTradingPlatform", orgKey: "fxDailyInfo" },
  { awardKey: "fastestGrowingBroker", orgKey: "forexAwards" },
  { awardKey: "bestCustomerService", orgKey: "globalBankingAwards" },
];

export const badges = [
  { icon: "🔒", labelKey: "ssl256" },
  { icon: "🏛️", labelKey: "fscRegulated" },
  { icon: "💰", labelKey: "segregatedFundsBadge" },
  { icon: "🛡️", labelKey: "faSecurity" },
];

export const regulations = [
  { icon: "🏛️", titleKey: "regulatedByFSC", descKey: "regulatedByFSCDesc" },
  { icon: "🔒", titleKey: "segregatedAccounts", descKey: "segregatedAccountsDesc" },
  { icon: "🛡️", titleKey: "advancedSecurity", descKey: "advancedSecurityDesc" },
];

export const platformFeatures = [
  { icon: "⚡", titleKey: "instantExecution", descKey: "instantExecutionDesc" },
  { icon: "📊", titleKey: "technicalIndicators", descKey: "automatedTrading" },
  { icon: "🤖", titleKey: "automatedTrading", descKey: "automatedTrading" },
  { icon: "📱", titleKey: "mobileTrading", descKey: "fullPower" },
];

export const products = [
  { nameKey: "forex", icon: "💱", descKey: "forexDesc", spread: "From 0.0 pips", link: "/products/forex", color: "from-blue-500 to-cyan-500" },
  { nameKey: "goldSilver", icon: "🥇", descKey: "goldSilverDesc", spread: "From 0.0 pips", link: "/products/metals", color: "from-amber-500 to-yellow-500" },
  { nameKey: "indices", icon: "📊", descKey: "indicesDesc", spread: "From 0.2 pips", link: "/products/indices", color: "from-purple-500 to-pink-500" },
  { nameKey: "oil", icon: "🛢️", descKey: "oilDesc", spread: "From 0.3 pips", link: "/products/commodities", color: "from-green-500 to-emerald-500" },
  { nameKey: "crypto", icon: "₿", descKey: "cryptoDesc", spread: "From 0.5 pips", link: "/products/crypto", color: "from-orange-500 to-red-500" },
  { nameKey: "shares", icon: "📈", descKey: "sharesDesc", spread: "From 0.1 pips", link: "/products/shares", color: "from-indigo-500 to-blue-500" },
];
