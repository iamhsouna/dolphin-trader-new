"use client";

import ProductLayout from "../ProductLayout";
import { useTranslations } from "next-intl";

export default function MetalsPage() {
  const t = useTranslations("Products");
  const tp = useTranslations("ProductLayout");

  const instruments = [
    { symbol: "XAU/USD", spread: t("fromPipsValue", { spread: "0.0" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "XAG/USD", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "XAU/EUR", spread: t("fromPipsValue", { spread: "0.2" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "XAU/GBP", spread: t("fromPipsValue", { spread: "0.2" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "XPT/USD", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "100:1" }) },
    { symbol: "XPD/USD", spread: t("fromPipsValue", { spread: "1.0" }), leverage: tp("upTo", { value: "100:1" }) },
  ];

  return (
    <ProductLayout
      title={t("metalsTitle")}
      description={t("metalsDescription")}
      icon="🥇"
      color="from-amber-500 to-yellow-500"
      instruments={instruments}
    />
  );
}
