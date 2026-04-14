"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
}: ComingSoonModalProps) {
  const t = useTranslations("comingsoon");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative glass-card rounded-2xl p-8 max-w-md mx-4 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary/50 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center text-5xl mx-auto mb-6">
            🚀
          </div>
          <h3 className="text-2xl font-bold mb-3">{t("title")}</h3>
          <p className="text-muted-foreground mb-6">{t("message")}</p>
          <Button onClick={onClose} className="btn-primary px-8">
            {t("close")}
          </Button>
        </div>
      </div>
    </div>
  );
}
