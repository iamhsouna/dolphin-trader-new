"use client";

import ProductLayout from "../ProductLayout";
import { useTranslations } from "next-intl";

export default function IndicesPage() {
  const t = useTranslations("products");
  const tp = useTranslations("productlayout");

  const instruments = [
    { symbol: "US30", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "US100", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "US500", spread: t("fromPipsValue", { spread: "0.3" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "UK100", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "GER40", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "FRA40", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "JPN225", spread: t("fromPipsValue", { spread: "5.0" }), leverage: tp("upTo", { value: "100:1" }) },
    { symbol: "AUS200", spread: t("fromPipsValue", { spread: "1.0" }), leverage: tp("upTo", { value: "100:1" }) },
  ];

  return (
    <ProductLayout
      title={t("indicesTitle")}
      description={t("indicesDescription")}
      iconKey="barChart"
      productCategory="indices"
      instruments={instruments}
    />
  );
}
