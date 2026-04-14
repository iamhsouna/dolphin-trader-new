"use client";

import ProductLayout from "../ProductLayout";
import { useTranslations } from "next-intl";

export default function CryptoPage() {
  const t = useTranslations("products");
  const tp = useTranslations("productlayout");

  const instruments = [
    { symbol: "BTC/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
    { symbol: "ETH/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
    { symbol: "BCH/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
    { symbol: "LTC/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
    { symbol: "XRP/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
    { symbol: "ADA/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
    { symbol: "DOT/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
    { symbol: "SOL/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "5:1" }) },
  ];

  return (
    <ProductLayout
      title={t("cryptoTitle")}
      description={t("cryptoDescription")}
      icon="₿"
      color="from-orange-500 to-red-500"
      instruments={instruments}
    />
  );
}
