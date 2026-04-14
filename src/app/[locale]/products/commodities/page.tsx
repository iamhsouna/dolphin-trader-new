"use client";

import ProductLayout from "../ProductLayout";
import { useTranslations } from "next-intl";

export default function CommoditiesPage() {
  const t = useTranslations("Products");
  const tp = useTranslations("ProductLayout");

  const instruments = [
    { symbol: "USOIL", spread: t("fromPipsValue", { spread: "0.3" }), leverage: tp("upTo", { value: "100:1" }) },
    { symbol: "UKOIL", spread: t("fromPipsValue", { spread: "0.4" }), leverage: tp("upTo", { value: "100:1" }) },
    { symbol: "NATGAS", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "50:1" }) },
    { symbol: "XAU/USD", spread: t("fromPipsValue", { spread: "0.0" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "XAG/USD", spread: t("fromPipsValue", { spread: "0.1" }), leverage: tp("upTo", { value: "200:1" }) },
    { symbol: "CORN", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "50:1" }) },
    { symbol: "WHEAT", spread: t("fromPipsValue", { spread: "0.5" }), leverage: tp("upTo", { value: "50:1" }) },
    { symbol: "COPPER", spread: t("fromPipsValue", { spread: "0.3" }), leverage: tp("upTo", { value: "100:1" }) },
  ];

  return (
    <ProductLayout
      title={t("commoditiesTitle")}
      description={t("commoditiesDescription")}
      icon="🛢️"
      color="from-green-500 to-emerald-500"
      instruments={instruments}
    />
  );
}
