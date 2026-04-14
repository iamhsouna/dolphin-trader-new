"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Locale = "en" | "ar";

export default function LanguageSwitcherTrading() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = (params.locale as Locale) || "en";

  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const toggleLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale);

    const html = document.documentElement;
    if (newLocale === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "en");
    }

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/;`;

    const segments = pathname.split("/");
    if (["en", "ar"].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    router.push(segments.join("/"));
    router.refresh();
  };

  return (
    <div className="lang-toggle" role="group" aria-label="Language selection">
      <button
        onClick={() => toggleLocale("en")}
        className={cn(
          "lang-toggle-btn",
          currentLocale === "en" && "is-active"
        )}
        aria-pressed={currentLocale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => toggleLocale("ar")}
        className={cn(
          "lang-toggle-btn",
          currentLocale === "ar" && "is-active"
        )}
        aria-pressed={currentLocale === "ar"}
      >
        AR
      </button>
    </div>
  );
}
