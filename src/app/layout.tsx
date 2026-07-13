import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Teko } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const teko = Teko({
  variable: "--font-number",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IFTM University Moradabad - Top Private University in UP | B.Pharm, B.Tech, MBA",
  description:
    "IFTM University Moradabad - NAAC A Grade accredited private university offering 130+ programmes including B.Pharm, B.Tech, MBA, BBA, BCA, LLB with 90%+ placement. Apply now for admission 2026-27.",
  keywords:
    "IFTM University, Moradabad University, B.Pharm, B.Tech, MBA, Best private university UP, NAAC A Grade, IFTM Moradabad, University in UP, Private University India",
  authors: [{ name: "IFTM University", url: "https://iftmuniversity.ac.in" }],
  creator: "IFTM University",
  publisher: "IFTM University",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://iftmuniversity.ac.in",
  },
  openGraph: {
    title: "IFTM University - Top Private University in Moradabad, UP",
    description:
      "NAAC 'A' Grade university with 130+ programmes, 90%+ placement rate, 69+ acre campus. B.Pharm, B.Tech, MBA, BBA, BCA, LLB and more.",
    url: "https://iftmuniversity.ac.in",
    siteName: "IFTM University",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://iftmuniversity.ac.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IFTM University Moradabad - Top Private University in UP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IFTM University - Top Private University in Moradabad, UP",
    description: "NAAC 'A' Grade university with 130+ programmes and 90%+ placement rate.",
    images: ["https://iftmuniversity.ac.in/images/og-image.jpg"],
    site: "@IFTMUni",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
  other: {
    "llms-txt": "https://iftmuniversity.ac.in/llms.txt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "IFTM University",
    alternateName: "IFTM University Moradabad",
    url: "https://iftmuniversity.ac.in",
    logo: "https://iftmuniversity.ac.in/images/newlogo.png",
    description:
      "IFTM University is a NAAC 'A' Grade accredited private university in Moradabad, UP offering 130+ programmes across Engineering, Pharmacy, Management, Law, Sciences, and more.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lodhipur Rajput, Delhi Road",
      addressLocality: "Moradabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "244102",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.81859668234481,
      longitude: 78.64035531468515,
    },
    telephone: "+91-9639004077",
    email: "info@iftm.ac.in",
    foundingDate: "2001",
    numberOfStudents: 10000,
    slogan: "Committed to Academic Excellence",
    sameAs: [
      "https://www.facebook.com/iftmuniv",
      "https://twitter.com/IFTMUni",
      "https://www.instagram.com/iftmuniversity/",
      "https://www.linkedin.com/in/iftm-university-04006a245/",
      "https://www.youtube.com/channel/UCYAp-IfRk0ckvrvxFS9hKgQ",
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "NAAC 'A' Grade" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "UGC Recognized" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "AICTE Approved" },
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IFTM University",
    url: "https://iftmuniversity.ac.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://iftmuniversity.ac.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${teko.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#333] font-[family-name:var(--font-heading)]">
        {children}
      </body>
    </html>
  );
}
