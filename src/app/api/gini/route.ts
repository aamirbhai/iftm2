import { NextRequest, NextResponse } from "next/server";
import { giniFAQs, giniSystemPrompt } from "@/components/gini-knowledge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
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

async function callMiMoAPI(messages: ChatMessage[], userName: string, language: string): Promise<string> {
  const apiKey = process.env.MIMO_API_KEY;
  if (!apiKey) {
    return language === "hi"
      ? "Mujhe abhi connect hone mein problem ho rahi hai. Call karo +91-591-2486021."
      : "I'm having trouble connecting right now. Please call +91-591-2486021.";
  }

  const langInstruction = language === "hi"
    ? `\nIMPORTANT: Reply ONLY in Hindi/Hinglish. User ka naam ${userName} hai. Use their name naturally.`
    : `\nIMPORTANT: Reply ONLY in English. User ka naam ${userName} hai. Use their name naturally.`;

  try {
    const response = await fetch("https://api.xiaomimimo.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mimo-v2.5-pro",
        messages: [
          { role: "system", content: giniSystemPrompt + langInstruction },
          ...messages,
        ],
        max_completion_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("MiMo API error:", response.status, errorText);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || (language === "hi"
      ? "Mujhe samajh nahi aaya. Phir se try karo."
      : "I couldn't process that. Please try again.");
  } catch {
    return language === "hi"
      ? "Mujhe abhi connect hone mein problem ho rahi hai. Call karo +91-591-2486021."
      : "I'm having trouble connecting right now. Please call +91-591-2486021.";
  }
}

export async function POST(request: NextRequest) {
  try {
    const { messages, userName, language } = (await request.json()) as {
      messages: ChatMessage[];
      userName?: string;
      language?: string;
    };

    if (!messages || messages.length === 0) {
      return NextResponse.json({ reply: "Hello! I'm Gini, your IFTM assistant." });
    }

    const lastUserMessage = messages[messages.length - 1];
    if (lastUserMessage.role !== "user") {
      return NextResponse.json({ reply: "Please send a message and I'll help you!" });
    }

    const faqAnswer = findFAQMatch(lastUserMessage.content);
    if (faqAnswer) {
      return NextResponse.json({ reply: faqAnswer });
    }

    const aiReply = await callMiMoAPI(messages, userName || "", language || "en");
    return NextResponse.json({ reply: aiReply });
  } catch {
    return NextResponse.json(
      { reply: "Something went wrong. Please try again or contact +91-591-2486021." },
      { status: 500 }
    );
  }
}
