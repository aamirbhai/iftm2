"use client";

import { useState, useRef, useEffect } from "react";
import { giniFAQs } from "@/components/gini-knowledge";

interface Message {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
  showLanguageOptions?: boolean;
}

function findFAQMatch(query: string): string | null {
  const lowerQuery = query.toLowerCase();
  for (const faq of giniFAQs) {
    for (const keyword of faq.keywords) {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        return faq.answer;
      }
    }
  }
  return null;
}

export default function GiniChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"greet" | "name" | "language" | "chat">("greet");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState<"en" | "hi" | "">("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && step === "greet") {
      setStep("name");
      simulateTyping("Hey! Welcome to IFTM University. I'm Gini, your admission guide. What's your name?");
    }
  }, [isOpen, step]);

  function simulateTyping(text: string) {
    const typingMsg: Message = { role: "assistant", content: "", isTyping: true };
    setMessages((prev) => [...prev, typingMsg]);
    const delay = Math.min(800 + text.length * 15, 2500);
    setTimeout(() => {
      setMessages((prev) => {
        const updated = [...prev];
        const lastIdx = updated.length - 1;
        updated[lastIdx] = { role: "assistant", content: text, isTyping: false };
        return updated;
      });
    }, delay);
  }

  function showLanguageSelection() {
    const langMsg: Message = {
      role: "assistant",
      content: language === "hi"
        ? `${userName}, aap kis language mein baat karna chahenge?`
        : `${userName}, which language would you prefer to chat in?`,
      showLanguageOptions: true,
    };
    setMessages((prev) => [...prev, langMsg]);
  }

  function handleLanguageSelect(lang: "en" | "hi") {
    setLanguage(lang);
    setStep("chat");

    // Add user's language choice as a message
    const userMsg: Message = { role: "user", content: lang === "hi" ? "Hindi" : "English" };
    setMessages((prev) => [...prev, userMsg]);

    // Respond in selected language
    if (lang === "hi") {
      simulateTyping(`Bahut accha ${userName}! Ab aap Hindi mein pooch sakte ho. Main aapki kya madad kar sakta hoon?`);
    } else {
      simulateTyping(`Great ${userName}! You can now ask me anything in English. How can I help you?`);
    }
  }

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev.filter((m) => !m.isTyping && !m.showLanguageOptions), userMessage]);
    setInput("");

    // Handle name step
    if (step === "name") {
      setUserName(trimmed);
      setStep("language");
      setTimeout(() => showLanguageSelection(), 500);
      return;
    }

    // Handle chat step
    const faqAnswer = findFAQMatch(trimmed);
    if (faqAnswer) {
      simulateTyping(faqAnswer);
      return;
    }

    setIsLoading(true);
    try {
      const chatMessages = [
        ...messages.filter((m) => !m.isTyping && !m.showLanguageOptions).map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: trimmed },
      ];

      const response = await fetch("/api/gini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatMessages,
          userName,
          language,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        simulateTyping(data.reply);
      } else {
        throw new Error("API failed");
      }
    } catch {
      setIsLoading(false);
      const lowerInput = trimmed.toLowerCase();
      let fallback = "";

      if (language === "hi") {
        if (lowerInput.includes("fee") || lowerInput.includes("cost") || lowerInput.includes("price")) {
          fallback = "Fee details ke liye admission office call karo +91-591-2486021. Scholarship bhi milti hai merit basis pe.";
        } else if (lowerInput.includes("admission") || lowerInput.includes("apply")) {
          fallback = "Online apply karo hamari website se. Help chahiye toh call karo +91-591-2486021.";
        } else if (lowerInput.includes("placement") || lowerInput.includes("job")) {
          fallback = "IFTM ka placement record accha hai. 500+ companies aati hain - TCS, Infosys, Amazon, Google.";
        } else if (lowerInput.includes("course") || lowerInput.includes("programme")) {
          fallback = "50+ programmes hain - Engineering, Pharmacy, MBA, Law, sab hai. Kaunsa field interest karta hai?";
        } else {
          fallback = "Mujhe abhi connect hone mein problem ho rahi hai. Call karo +91-591-2486021.";
        }
      } else {
        if (lowerInput.includes("fee") || lowerInput.includes("cost") || lowerInput.includes("price")) {
          fallback = "For fee details, please contact our admission office at +91-591-2486021. Scholarships are available for meritorious students.";
        } else if (lowerInput.includes("admission") || lowerInput.includes("apply")) {
          fallback = "You can apply online at our admissions portal. For help, call +91-591-2486021.";
        } else if (lowerInput.includes("placement") || lowerInput.includes("job")) {
          fallback = "IFTM has 90%+ placement rate with 500+ recruiters including TCS, Infosys, Amazon, Google.";
        } else if (lowerInput.includes("course") || lowerInput.includes("programme")) {
          fallback = "We offer 50+ programmes across 12 schools. Which field interests you?";
        } else {
          fallback = "I'm having trouble connecting right now. Please call +91-591-2486021 for assistance.";
        }
      }

      simulateTyping(fallback);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-iftm-navy text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Chat with Gini"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" style={{ height: "480px" }}>
          <div className="bg-iftm-navy text-white px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-iftm-gold flex items-center justify-center text-iftm-navy font-bold text-sm">
              G
            </div>
            <div>
              <h3 className="font-bold text-sm">Gini</h3>
              <p className="text-xs text-white/70">IFTM Admission Guide</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-iftm-primary text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.isTyping ? (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  ) : msg.showLanguageOptions ? (
                    <div>
                      <p className="mb-3">{msg.content}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleLanguageSelect("en")}
                          className="px-4 py-2 bg-iftm-navy text-white rounded-lg text-sm font-medium hover:bg-iftm-navy-light transition-colors"
                        >
                          English
                        </button>
                        <button
                          onClick={() => handleLanguageSelect("hi")}
                          className="px-4 py-2 bg-iftm-primary text-white rounded-lg text-sm font-medium hover:bg-red-800 transition-colors"
                        >
                          Hindi
                        </button>
                      </div>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {isLoading && !messages.some((m) => m.isTyping) && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-xl rounded-bl-none text-sm">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={step === "name" ? "Enter your name..." : language === "hi" ? "Apna sawaal likhein..." : "Type your message..."}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-iftm-navy"
                disabled={isLoading || step === "language"}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim() || step === "language"}
                className="px-4 py-2 bg-iftm-navy text-white rounded-lg text-sm font-medium hover:bg-iftm-navy-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
