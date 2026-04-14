"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function LiveChatWidget() {
  const t = useTranslations("LiveChat");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t("welcome"),
      isBot: true,
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: message,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: t("botMessage"),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 glass-card rounded-2xl overflow-hidden z-[60] animate-fade-in shadow-2xl">
          <div className="bg-gradient-to-r from-primary to-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xl">💬</span>
              </div>
              <div>
                <h4 className="font-bold text-white">{t("title")}</h4>
                <p className="text-xs text-white/70">{t("subtitle")}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.isBot
                      ? "bg-secondary text-slate-200"
                      : "bg-gradient-to-r from-primary to-primary text-white"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-secondary/50 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder={t("placeholder")}
                className="flex-1 bg-secondary/50 border-border text-white placeholder:text-muted-foreground"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-[#5B31F5] to-[#7B57FF] hover:from-[#7B57FF] hover:to-[#5B31F5]"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#5B31F5] to-[#7B57FF] rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform z-[60]"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
}
