"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: t("categories.gettingStarted"),
      questions: [
        { q: t("categories.q1"), a: t("categories.a1") },
        { q: t("categories.q2"), a: t("categories.a2") },
        { q: t("categories.q3"), a: t("categories.a3") },
      ],
    },
    {
      category: t("categories.trading"),
      questions: [
        { q: t("categories.q4"), a: t("categories.a4") },
        { q: t("categories.q5"), a: t("categories.a5") },
        { q: t("categories.q6"), a: t("categories.a6") },
        { q: t("categories.q7"), a: t("categories.a7") },
      ],
    },
    {
      category: t("categories.depositsWithdrawals"),
      questions: [
        { q: t("categories.q8"), a: t("categories.a8") },
        { q: t("categories.q9"), a: t("categories.a9") },
        { q: t("categories.q10"), a: t("categories.a10") },
      ],
    },
    {
      category: t("categories.copyTrading"),
      questions: [
        { q: t("categories.q11"), a: t("categories.a11") },
        { q: t("categories.q12"), a: t("categories.a12") },
        { q: t("categories.q13"), a: t("categories.a13") },
      ],
    },
    {
      category: t("categories.security"),
      questions: [
        { q: t("categories.q14"), a: t("categories.a14") },
        { q: t("categories.q15"), a: t("categories.a15") },
        { q: t("categories.q16"), a: t("categories.a16") },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t("pageTitle")}</h1>
          <p className="text-xl text-slate-400">
            {t("pageSubtitle")}
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 10 + qIndex;
                  return (
                    <div key={qIndex} className="glass-card rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/30 transition-colors"
                      >
                        <span className="font-medium pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform ${
                            openIndex === globalIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-5 pb-5 text-slate-400">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <h2 className="text-2xl font-bold mb-4">{t("stillHaveQuestions")}</h2>
          <p className="text-slate-400 mb-6">
            {t("supportMessage")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:support@dolmarkets.com" className="btn-primary px-6 py-3">
              {t("emailSupportButton")}
            </a>
            <a href="#" className="btn-secondary px-6 py-3">
              {t("liveChatButton")}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
