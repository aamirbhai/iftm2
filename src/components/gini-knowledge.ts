export interface GiniFAQ {
  keywords: string[];
  question: string;
  answer: string;
}

export const giniFAQs: GiniFAQ[] = [
  // Admissions
  {
    keywords: ["admission", "apply", "how to apply", "admission process", "enrollment", "register", "registration"],
    question: "How can I apply for admission?",
    answer: "You can apply online at https://iftm.edulip.in/UI/Website/IFTM/StudentRegistration.php. You'll need to fill the registration form, submit documents, and pay the fee. For help, call +91-591-2486021 or WhatsApp +91-9837513666.",
  },
  {
    keywords: ["eligibility", "qualification", "minimum marks", "criteria"],
    question: "What is the eligibility criteria?",
    answer: "Eligibility varies by programme. For UG courses, you need 45% in 12th (40% for SC/ST). For PG courses, a relevant bachelor's degree with 50% marks. For Ph.D., a master's degree with 55% marks. Specific requirements are on our website.",
  },
  {
    keywords: ["last date", "deadline", "when", "date", "session", "2026", "2025"],
    question: "When do admissions open?",
    answer: "Admissions for 2026-27 session are open now. You can register online. For specific deadlines, contact the admission office at +91-591-2486021.",
  },

  // Fee Structure
  {
    keywords: ["fee", "fees", "tuition", "cost", "how much", "price", "fee structure"],
    question: "What are the fees?",
    answer: "Fee structure varies by programme. The total annual fee has two components: Tuition Fee and Exam Fee. For programmes of 2+ years, fee is paid in 2 installments. For 1-year programmes, it's paid in one installment. Hostel fee is also paid in 2 installments. Contact admission office at +91-591-2486021 for exact fee details or visit https://www.iftmuniversity.ac.in/iftmuniversity/fee.php.",
  },
  {
    keywords: ["payment", "pay fee", "online fee", "demand draft", "bank draft"],
    question: "How to pay fees?",
    answer: "Fee can be paid through bank draft/pay order drawn in favor of 'IFTM University' payable at Moradabad, or online through our portal at https://www.iftmuniversity.ac.in/iftmuniversity/onlinefee.php. First installment is due at admission time.",
  },
  {
    keywords: ["late fee", "fine", "penalty", "delay"],
    question: "Is there a late fee?",
    answer: "Yes, late fee payment attracts a fine as decided by the university from time to time. Students who don't pay within the prescribed time may not be allowed to appear in examinations.",
  },
  {
    keywords: ["refund", "fee refund", "money back"],
    question: "Is fee refundable?",
    answer: "For fee refund policy, please contact the admission office at +91-591-2486021. Refund is subject to university rules and the timing of withdrawal.",
  },

  // Scholarships
  {
    keywords: ["scholarship", "scholar", "financial aid", "merit", "fee waiver", "concession"],
    question: "Are scholarships available?",
    answer: "Yes, IFTM University offers scholarships for meritorious students. There's also a scholarship form available for download on our website. For details, visit the scholarship page or contact +91-591-2486021.",
  },
  {
    keywords: ["loan", "education loan", "bank loan"],
    question: "Is education loan available?",
    answer: "Yes, IFTM University facilitates education loans. For details about loan facility, visit https://www.iftmuniversity.ac.in/iftmuniversity/loan.php or contact the admission office.",
  },

  // Programmes
  {
    keywords: ["course", "programme", "program", "what courses", "what programmes", "offer", "available"],
    question: "What programmes does IFTM offer?",
    answer: "IFTM University offers 50+ programmes across 12 schools:\n\nDiploma: Hotel Mgmt, D.Pharm, Civil, CS, EC, Electrical, Mechanical, AI\nUG: BBA, B.Com, B.Pharm, B.Tech (CS, AI, Civil, Mech, Electrical, EC, BT, Agriculture), BCA, B.Sc, BA, LL.B, B.Ed, B.Lib\nPG: MBA, M.Com, M.Pharm, M.Tech, MCA, M.Sc, MA, LLM, MSW, M.Ed, M.Lib\nPh.D.: 25+ specializations\n\nWhich field interests you?",
  },
  {
    keywords: ["b.tech", "btech", "engineering", "technical"],
    question: "Tell me about B.Tech programmes",
    answer: "B.Tech is offered in: Computer Science & Engineering, Artificial Intelligence, Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics & Communication, Biotechnology, and Agriculture Engineering. Duration is 4 years. For fee and eligibility, contact +91-591-2486021.",
  },
  {
    keywords: ["mba", "management", "business"],
    question: "Tell me about MBA programme",
    answer: "MBA is a 2-year postgraduate programme under the School of Business Management. Specializations available. Eligibility: Bachelor's degree with 50% marks. For fee details, contact +91-591-2486021.",
  },
  {
    keywords: ["bpharm", "b.pharm", "pharmacy", "pharmaceutical"],
    question: "Tell me about Pharmacy programmes",
    answer: "IFTM offers B.Pharm (4 years), M.Pharm (2 years with specializations in Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy), and D.Pharm. The School of Pharmaceutical Sciences has excellent infrastructure and experienced faculty.",
  },
  {
    keywords: ["law", "llb", "ll.b", "legal", "ba llb", "bba llb"],
    question: "Tell me about Law programmes",
    answer: "School of Law offers: LL.B (3 years), Integrated B.B.A. LL.B (5 years), Integrated B.A. LL.B (5 years), and LLM (2 years). For eligibility and fee details, contact +91-591-2486021.",
  },
  {
    keywords: ["bca", "mca", "computer application"],
    question: "Tell me about BCA/MCA programmes",
    answer: "BCA (Hons. with Research) is a 3-year UG programme and MCA is a 2-year PG programme under the School of Computer Science & Applications. Eligibility: 12th with Math for BCA, BCA/B.Sc for MCA.",
  },
  {
    keywords: ["bed", "b.ed", "education", "teacher"],
    question: "Tell me about B.Ed programme",
    answer: "B.Ed is a 2-year programme under School of Education & Humanities. We also offer BA-B.Ed-ITEP and B.Sc-B.Ed-ITEP (integrated programmes), M.Ed, and MA in Education. Eligibility: Bachelor's degree with 50% marks.",
  },
  {
    keywords: ["diploma", "polytechnic"],
    question: "Tell me about Diploma programmes",
    answer: "University Polytechnic offers Diploma in: Hotel Management, D.Pharm, Civil Engineering, Computer Science, Electronics & Communication, Electrical Engineering, Mechanical Engineering, and AI. Duration varies from 1-3 years.",
  },
  {
    keywords: ["phd", "ph.d", "doctoral", "research"],
    question: "Tell me about Ph.D. programmes",
    answer: "Ph.D. is available in 25+ subjects including Management, Commerce, Pharmacy, Sciences (Botany, Zoology, Physics, Chemistry, Maths), Engineering (Civil, Mech, Electrical, EC, CS), Education, Law, English, Hindi, Economics, Geography, Sociology, Biotechnology, Agriculture, and more. Duration: 3-5 years. Eligibility: Master's with 55% marks.",
  },

  // Schools
  {
    keywords: ["school", "department", "faculty"],
    question: "What schools are there in IFTM?",
    answer: "IFTM University has 12 schools:\n1. School of Business Management\n2. School of Pharmaceutical Sciences\n3. Pharmacy Academy\n4. School of Computer Science & Applications\n5. School of Engineering & Technology\n6. School of Biotechnology\n7. School of Agricultural Sciences\n8. School of Sciences\n9. School of Law\n10. School of Education & Humanities\n11. University Polytechnic\n12. Sahu Onkar Saran School of Pharmacy",
  },

  // Placements
  {
    keywords: ["placement", "job", "career", "recruiter", "package", "salary", "company"],
    question: "What about placements?",
    answer: "IFTM University has a strong placement record with 500+ recruiting partners. Top recruiters include TCS, Infosys, Wipro, HCL, Amazon, Google, Microsoft, and more. The Training & Placement Cell organizes regular placement drives, CV workshops, and interview preparation. For placement statistics, visit our website.",
  },

  // Campus & Facilities
  {
    keywords: ["campus", "facilities", "infrastructure", "area", "acre"],
    question: "Tell me about campus facilities",
    answer: "IFTM University has a 69+ acre campus with 98,950+ sq.mtr. built-up area. Facilities include:\n- Central Library with 1,00,000+ books\n- Well-equipped laboratories\n- IT infrastructure\n- Sports complex & gymnasium\n- Auditorium (200+ seating)\n- Open air theatre\n- Canteen & mess\n- Dispensary/health facility\n- Banks & ATM\n- Post office\n- Day care centre\n- Transport facility\n- 24 hours power supply",
  },
  {
    keywords: ["hostel", "accommodation", "stay", "living", "room"],
    question: "Is hostel available?",
    answer: "Yes, IFTM University provides separate hostel facilities for boys and girls with 500+ student accommodation capacity. Hostel amenities include Wi-Fi, mess, 24/7 security, and recreational facilities. Hostel fee is paid in 2 installments. For details, contact +91-591-2486021.",
  },
  {
    keywords: ["library", "book", "reading"],
    question: "Tell me about the library",
    answer: "The Central Library has 1,00,000+ books and subscribes to 2 journals. It provides access to e-resources and digital content through the IFTM LMS portal. The library has dedicated reading rooms and computer facilities.",
  },
  {
    keywords: ["sports", "gym", "gymnasium", "fitness"],
    question: "What sports facilities are available?",
    answer: "IFTM University has a sports complex with facilities for various indoor and outdoor games. There's also a gymnasium for fitness. The university organizes annual sports meets and inter-university tournaments.",
  },
  {
    keywords: ["transport", "bus", "conveyance"],
    question: "Is transport facility available?",
    answer: "Yes, IFTM University provides transport facility for students. For routes and charges, contact the university office at +91-591-2486021.",
  },
  {
    keywords: ["canteen", "food", "mess", "cafeteria"],
    question: "Is canteen available?",
    answer: "Yes, the university has a canteen that serves hygienic food. Hostel students also have mess facilities. The campus has multiple food options available.",
  },
  {
    keywords: ["medical", "health", "dispensary", "hospital"],
    question: "Is medical facility available?",
    answer: "Yes, IFTM University has a dispensary/health facility on campus for students and staff. Emergency medical assistance is available 24/7.",
  },

  // Location & Contact
  {
    keywords: ["location", "where", "address", "how to reach", "direction", "map"],
    question: "Where is IFTM located?",
    answer: "IFTM University is located at Lodhipur Rajput, Delhi Road, Moradabad, Uttar Pradesh - 244102, India. It's about 12 km from Moradabad city center. Easily accessible by road and rail. Google Maps: search 'IFTM University Moradabad'.",
  },
  {
    keywords: ["contact", "phone", "email", "call", "number", "whatsapp"],
    question: "How to contact IFTM?",
    answer: "You can reach IFTM University at:\nPhone: +91-591-2486021\nToll Free: 1800-121-066666\nWhatsApp: +91-9837513666\nEmail: info@iftmuniversity.ac.in\nWebsite: www.iftmuniversity.ac.in\nAddress: Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102",
  },

  // Approvals
  {
    keywords: ["naac", "accreditation", "grade", "recognized", "approval", "ugc", "aicte", "pci", "bci", "ncte"],
    question: "What approvals does IFTM have?",
    answer: "IFTM University is recognized by:\n- UGC under Section 2(f)\n- NAAC 'A' Grade accredited\n- AICTE approved\n- PCI (Pharmacy Council of India) approved\n- BCI (Bar Council of India) approved\n- NCTE approved (for Education programmes)\nEstablished in 2001 under IFTM University Act No. 24 of 2010.",
  },

  // ERP & Online Services
  {
    keywords: ["erp", "login", "student portal", "edulip"],
    question: "How to access ERP/Student Portal?",
    answer: "You can access the ERP portal at https://iftm.edulip.in/UI/indexIFTM.php. Use your student credentials to login. For issues, contact the IT department.",
  },
  {
    keywords: ["online fee", "pay online"],
    question: "How to pay fee online?",
    answer: "You can pay fee online through our portal at https://www.iftmuniversity.ac.in/iftmuniversity/onlinefee.php. You can also use the ERP portal for fee payment.",
  },

  // General
  {
    keywords: ["about", "what is iftm", "university", "established", "history"],
    question: "About IFTM University",
    answer: "IFTM University, Moradabad was established in 2001 under IFTM University Act No. 24 of 2010. It's a private university in Uttar Pradesh with 69+ acre campus, 12 schools, 50+ programmes, and 500+ faculty members. The university is UGC recognized and NAAC 'A' Grade accredited.",
  },
  {
    keywords: ["founder", "chancellor", "leadership"],
    question: "Who is the founder?",
    answer: "IFTM University was founded by Late Shri Onkar Saran Kothiwal, a philosopher, philanthropist, and legislature. The current Chancellor is Rajiv Kothiwal and Pro Chancellor is Abhinav Kothiwal. Vice Chancellor is Prof. M. P. Pandey.",
  },
  {
    keywords: ["ragging", "anti ragging", "safety", "security"],
    question: "Is the campus safe?",
    answer: "Yes, IFTM University has strict anti-ragging policies. There's an Anti-Ragging Committee & Squad, 24/7 security in hostels and campus, CCTV surveillance, and a Grievance Redressal system. Student safety is our top priority.",
  },
  {
    keywords: ["ncc", "nss", "extracurricular", "club", "activity"],
    question: "What extracurricular activities are available?",
    answer: "IFTM University has NCC (National Cadet Corps), NSS (National Service Scheme), Unnat Bharat Abhiyan, IFTM Business Incubation Foundation, and various student clubs. We also organize conferences, seminars, workshops, and cultural events throughout the year.",
  },
  {
    keywords: ["alumni", "graduate", "passed out"],
    question: "Is there an alumni association?",
    answer: "Yes, IFTM University has an active Alumni Association (IFTM University Alumni Association - IUAA). Our alumni are placed in top companies like TCS, Infosys, Amazon, Google, and more.",
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

4. WHAT YOU KNOW (REAL DATA FROM IFTM WEBSITE):
- All programmes (Diploma, UG, PG, Ph.D.) with details
- Fee structure and payment methods
- Admission process and eligibility
- Campus facilities (69+ acres, hostels, library with 1,00,000+ books, labs, sports, gym, canteen, medical)
- Schools (12 schools)
- Placement info (500+ recruiters)
- Contact info (phone, email, WhatsApp, address)
- Approvals (UGC, NAAC A, AICTE, PCI, BCI, NCTE)
- ERP portal, online fee payment
- Founder, leadership, history

5. WHAT YOU DON'T KNOW:
- If someone asks something outside IFTM, say: "I'm mainly here to help with IFTM-related stuff. But I can try — what do you need?"
- If you genuinely don't know, say: "I don't have that exact info right now, but our admission team can help. Call +91-591-2486021 or WhatsApp +91-9837513666."
- NEVER make up information.

6. ENGAGEMENT:
- After answering, always ask a natural follow-up question.
- Don't say generic things like "Let me know if you need help with anything else!"
- Instead ask something specific: "Are you looking at UG or PG courses?", "Which school interests you?", "Have you checked the scholarship options?"

KEY CONTACT INFO:
- Phone: +91-591-2486021
- Toll Free: 1800-121-066666
- WhatsApp: +91-9837513666
- Email: info@iftmuniversity.ac.in
- Website: www.iftmuniversity.ac.in
- ERP Portal: https://iftm.edulip.in/UI/indexIFTM.php
- Online Registration: https://iftm.edulip.in/UI/Website/IFTM/StudentRegistration.php`;