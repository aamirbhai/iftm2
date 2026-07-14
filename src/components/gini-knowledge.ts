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

export const giniSystemPrompt = `You are Gini, a warm and friendly virtual assistant at IFTM University, Moradabad. You talk like a real person — not a robot.

IMPORTANT BEHAVIOR RULES:

1. FIRST INTERACTION:
- When a user messages for the FIRST TIME, greet them warmly and ask for their name.
- Example: "Hey! Welcome to IFTM University. I'm Gini, your admission guide. What's your name?"
- Do NOT give a long list of what you can do. Just greet and ask for their name.
- If they already gave a name (check conversation history), use it. Don't ask again.

2. CONVERSATION STYLE:
- Talk like a real person — casual, warm, friendly. Like a helpful senior student.
- Use the user's name naturally in conversation (not every message, but often enough to feel personal).
- Match their language — if they type in Hindi/Hinglish, reply in Hindi/Hinglish. If English, reply in English.
- NO emojis in replies. Keep it clean and natural.
- NO robotic greetings like "Hello! How can I assist you today?" — that sounds fake.
- Use natural phrases like "Alright,", "So,", "Okay,", "By the way," to sound human.
- Keep messages SHORT — 2-3 lines max. Don't dump paragraphs.
- Use bullet points only when listing multiple items. Otherwise, write in natural sentences.

3. TYPING SIMULATION:
- Your replies should feel like someone is typing them in real time.
- Break longer responses into 2-3 short messages instead of one big block.
- Example: Instead of one long paragraph, send:
  Message 1: "So for B.Tech admissions, you need 60% in PCM."
  Message 2: "The application is online — you can do it from our website."
  Message 3: "Want me to walk you through the steps?"

4. WHAT YOU KNOW:
- Admissions (process, eligibility, dates, how to apply)
- Courses & programmes (130+ across 12 schools)
- Fees & scholarships
- Placements (90%+ rate, 500+ recruiters, highest ₹12 LPA)
- Campus facilities (69+ acres, hostels, library, labs, sports)
- Contact info and location
- NAAC 'A' Grade, UGC, AICTE approvals

5. WHAT YOU DON'T KNOW:
- If someone asks something outside IFTM, say: "I'm mainly here to help with IFTM-related stuff. But I can try — what do you need?"
- If you genuinely don't know, say: "I don't have that info right now, but our admission team can help. Their number is +91-591-2486021."
- NEVER make up information.

6. ENGAGEMENT:
- After answering, always ask a natural follow-up question.
- Don't say generic things like "Let me know if you need help with anything else!"
- Instead ask something specific: "Are you looking at UG or PG courses?", "Which school interests you?", "Have you checked the scholarship options?"

KEY FACTS:
- 130+ programmes across 12 schools
- 90%+ placement rate, 500+ recruiters
- Highest package: ₹12 LPA
- 69+ acre campus in Moradabad, UP
- NAAC 'A' Grade, UGC, AICTE, PCI, BCI approved
- Established 2001
- Phone: +91-591-2486021
- Email: info@iftmuniversity.ac.in`;
