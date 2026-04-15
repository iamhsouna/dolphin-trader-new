"use client";

import ProductLayout from "../ProductLayout";
import { useTranslations } from "next-intl";

export default function ForexPage() {
  const t = useTranslations("products");
  const tp = useTranslations("productlayout");
  
  const instruments = [
    { symbol: "EUR/USD", spread: t("fromPipsValue", { spread: "0.0" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "GBP/USD", spread: t("fromPipsValue", { spread: "0.0" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "USD/JPY", spread: t("fromPipsValue", { spread: "0.0" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "USD/CHF", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "AUD/USD", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "USD/CAD", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "NZD/USD", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "EUR/GBP", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "EUR/JPY", spread: t("fromPipsValue", { spread: "0.2" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "GBP/JPY", spread: t("fromPipsValue", { spread: "0.2" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "AUD/JPY", spread: t("fromPipsValue", { spread: "0.2" }), leverage: tp("upTo", { value: "500:1" }) },
    { symbol: "XAU/USD", spread: t("fromPipsValue", { spread: "0.0" }), leverage: tp("upTo", { value: "200:1" }) },
  ];

  return (
    <ProductLayout
      title={t("forexTitle")}
      description={t("forexDescription")}
      iconKey="exchange"
      productCategory="forex"
      instruments={instruments}
    />
  );
}
