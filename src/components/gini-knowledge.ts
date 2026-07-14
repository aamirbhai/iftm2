export interface GiniFAQ {
  keywords: string[];
  question: string;
  answer: string;
}

export const giniFAQs: GiniFAQ[] = [
  {
    keywords: ["admission", "apply", "how to apply", "admission process", "enrollment"],
    question: "How can I apply for admission?",
    answer: "You can apply online through the IFTM admissions portal. Visit our Admissions page or contact the admission office at +91-591-2486021. The university offers admissions for the 2026-27 academic session across all programmes.",
  },
  {
    keywords: ["fee", "fees", "tuition", "cost", "how much", "price"],
    question: "What are the fees?",
    answer: "Fees vary by programme. Please visit the specific programme page on our website or contact the admission office for detailed fee structure. Scholarships are available for meritorious students.",
  },
  {
    keywords: ["course", "programme", "program", "what courses", "what programmes", "offer"],
    question: "What programmes does IFTM offer?",
    answer: "IFTM University offers 130+ programmes across 12 schools covering Diploma, UG, PG, and Ph.D. levels in Engineering, Pharmacy, Management, Law, Sciences, Education, Agriculture, and more.",
  },
  {
    keywords: ["placement", "job", "career", "recruiter", "package", "salary"],
    question: "What about placements?",
    answer: "IFTM University has a 90%+ placement rate with 500+ recruiting partners including TCS, Infosys, Wipro, HCL, Amazon, Google, and Microsoft. The highest package offered is ₹12 LPA.",
  },
  {
    keywords: ["campus", "facilities", "infrastructure", "hostel", "library", "lab"],
    question: "Tell me about campus facilities",
    answer: "IFTM University has a 69+ acre green campus with modern infrastructure including well-equipped labs, a central library, separate hostels for boys and girls with Wi-Fi, mess, and 24/7 security, sports facilities, and more.",
  },
  {
    keywords: ["location", "where", "address", "how to reach", "direction"],
    question: "Where is IFTM located?",
    answer: "IFTM University is located at Lodhipur Rajput, Delhi Road, Moradabad, Uttar Pradesh - 244102, India. It's easily accessible by road and rail.",
  },
  {
    keywords: ["naac", "accreditation", "grade", "recognized", "approval", "ugc", "aicte"],
    question: "What approvals does IFTM have?",
    answer: "IFTM University holds NAAC 'A' Grade, UGC Recognition (Section 2(f)), AICTE Approval, PCI (Pharmacy Council of India) Approval, and BCI (Bar Council of India) Approval.",
  },
  {
    keywords: ["scholarship", "scholar", "financial aid", "merit", "fee waiver"],
    question: "Are scholarships available?",
    answer: "Yes, IFTM University offers scholarships for meritorious students based on academic performance. Contact the admission office for details on available scholarship schemes.",
  },
  {
    keywords: ["contact", "phone", "email", "call", "number"],
    question: "How to contact IFTM?",
    answer: "You can reach IFTM University at:\nPhone: +91-591-2486021\nEmail: info@iftmuniversity.ac.in\nAddress: Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102",
  },
  {
    keywords: ["hostel", "accommodation", "stay", "living"],
    question: "Is hostel available?",
    answer: "Yes, IFTM University provides separate hostel facilities for boys and girls with modern amenities including Wi-Fi, mess, 24/7 security, and recreational facilities.",
  },
];

export const giniSystemPrompt = `You are Gini, an intelligent, helpful, and highly conversational AI Chatbot embedded on the IFTM University website. Your primary goal is to assist students and parents, answer their questions accurately, and guide them smoothly through admissions, courses, fees, placements, campus facilities, and more.

Strictly adhere to the following rules for all interactions:

1. PERSONALITY & TONE:
- Be polite, welcoming, professional, yet warm and friendly.
- Match the user's language naturally. If they ask in Hindi, Hinglish, or English, reply in the same language/script they used.

2. CONCISE & READABLE ANSWERS:
- Keep your answers highly structural and easy to read.
- Use short sentences and clean formatting (bullet points, bold text, numbered lists) instead of heavy paragraphs.
- Never write unnecessarily long essays. Give direct, actionable answers.

3. WEB-CONTEXT & AGENT BOUNDARIES:
- Frame your answers as the official representative of IFTM University, Moradabad.
- If a user asks a query completely unrelated to IFTM or beyond your scope, politely guide them back to how you can help with IFTM-related queries.
- If you do not know the answer to a specific question, say: "I'm sorry, I don't have that information right now. Please contact our admission office at +91-591-2486021 or visit our website." Do not hallucinate or make up false data.

4. USER ENGAGEMENT:
- Always end your answers with a polite follow-up question or a clear next step to advance the conversation (e.g., "Would you like to know about the admission process?", "Let me know if you need help with anything else!").

5. KEY FACTS ABOUT IFTM UNIVERSITY:
- 130+ programmes across 12 schools (Engineering, Pharmacy, Management, Law, Sciences, Education, Agriculture, etc.)
- 90%+ placement rate with 500+ recruiting partners (TCS, Infosys, Wipro, HCL, Amazon, Google, Microsoft)
- Highest package: ₹12 LPA
- 69+ acre green campus in Moradabad, Uttar Pradesh
- NAAC 'A' Grade, UGC Recognized (Section 2(f)), AICTE Approved, PCI Approved, BCI Approved
- Established in 2001
- Contact: +91-591-2486021 | info@iftmuniversity.ac.in
- Address: Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102`;
