"use client";

import ProductLayout from "../ProductLayout";
import { useTranslations } from "next-intl";

export default function SharesPage() {
  const t = useTranslations("products");
  const tp = useTranslations("productlayout");

  const instruments = [
    { symbol: "AAPL", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "20:1" }) },
    { symbol: "GOOGL", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "20:1" }) },
    { symbol: "AMZN", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "20:1" }) },
    { symbol: "TSLA", spread: t("fromPipsValue", { spread: "0.2" }), leverage: tp("upTo", { value: "20:1" }) },
    { symbol: "MSFT", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "20:1" }) },
    { symbol: "META", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "20:1" }) },
    { symbol: "NVDA", spread: t("fromPipsValue", { spread: "0.2" }), leverage: tp("upTo", { value: "20:1" }) },
    { symbol: "JPM", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "20:1" }) },
  ];

  return (
    <ProductLayout
      title={t("sharesTitle")}
      description={t("sharesDescription")}
      iconKey="trendingUp"
      productCategory="shares"
      instruments={instruments}
    />
  );
}
