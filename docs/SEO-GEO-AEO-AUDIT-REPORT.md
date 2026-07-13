# IFTM University Website — Full SEO, GEO, AEO Audit Report
**Date:** July 13, 2026  
**Website:** iftmuniversity.ac.in (Cloudflare Workers)  
**Auditor:** MiMoCode Senior Developer

---

## 📊 SEO Health Score: 62/100

| Category | Score | Status |
|----------|-------|--------|
| Technical SEO | 70/100 | ⚠️ Needs Work |
| Content Quality | 55/100 | ❌ Critical |
| On-Page SEO | 65/100 | ⚠️ Needs Work |
| Schema/Structured Data | 75/100 | ✅ Good |
| Performance (CWV) | 60/100 | ⚠️ Needs Work |
| AI Search Readiness (GEO) | 50/100 | ❌ Critical |
| Images | 45/100 | ❌ Critical |

---

## 🔴 CRITICAL ISSUES (Fix Immediately)

### 1. Missing llms.txt File
**Impact:** AI search engines (ChatGPT, Perplexity, Gemini) cannot understand your site  
**Fix:** Create `/public/llms.txt` file

```txt
# IFTM University Moradabad
# https://iftmuniversity.ac.in

> IFTM University is a NAAC 'A' Grade accredited private university in Moradabad, Uttar Pradesh, India. Established in 2001, offering 130+ programmes across Engineering, Pharmacy, Management, Law, Sciences, and more.

## Key Information
- Location: Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102
- Phone: +91-9639004077
- Email: info@iftm.ac.in
- NAAC Grade: A
- Programmes: 130+ (UG, PG, Diploma, Ph.D.)
- Placement Rate: 90%+
- Campus: 69+ acres

## Programmes
- Engineering (B.Tech, M.Tech)
- Pharmacy (B.Pharm, M.Pharm, D.Pharm)
- Management (BBA, MBA)
- Computer Science (BCA, MCA)
- Law (LLB, LLM)
- Sciences (B.Sc, M.Sc)
- Education (B.Ed, M.Ed)
- Agriculture (B.Sc Agriculture)

## Admissions
- Website: https://iftmuniversity.ac.in/admissions
- Apply: https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php
- Session: 2026-27

## Social Media
- Facebook: https://www.facebook.com/iftmuniv
- Twitter: https://twitter.com/IFTMUni
- Instagram: https://www.instagram.com/iftmuniversity/
- LinkedIn: https://www.linkedin.com/in/iftm-university-04006a245/
- YouTube: https://www.youtube.com/channel/UCYAp-IfRk0ckvrvxFS9hKgQ
```

### 2. Missing robots.txt AI Crawlers Allowance
**Impact:** AI crawlers may be blocked  
**Fix:** Update robots.txt

```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /erp

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Anthropic-AI
Allow: /

Sitemap: https://iftmuniversity.ac.in/sitemap.xml
```

### 3. Missing Dynamic Sitemap for WordPress Content
**Impact:** News, Blog, Programme pages not in sitemap  
**Fix:** Update sitemap.ts to fetch from WordPress

### 4. No FAQ Schema Markup
**Impact:** Missing rich results in Google  
**Fix:** Add FAQPage schema to pages with FAQs

### 5. Missing Breadcrumb Schema
**Impact:** Poor navigation signals to Google  
**Fix:** Add BreadcrumbList schema

---

## 🟡 HIGH PRIORITY ISSUES

### 6. Core Web Vitals Optimization

#### LCP (Largest Contentful Paint) Issues:
- **Hero images not optimized** — Use Next.js Image component with priority
- **Font loading** — Font Awesome loaded from CDN (render-blocking)
- **No image preloading** — Critical images not preloaded

#### INP (Interaction to Next Paint) Issues:
- **Heavy JavaScript** — framer-motion library (~150KB)
- **Multiple client components** — Header, HeroSlider, etc.

#### CLS (Cumulative Layout Shift) Issues:
- **Images without dimensions** — Many `<img>` tags without width/height
- **Dynamic content** — WordPress content loads after page render

### 7. Missing Meta Tags on Dynamic Pages
- News articles need proper Open Graph images
- Programme pages need canonical URLs
- Blog posts need author information

### 8. Image Optimization
- No WebP/AVIF format
- No lazy loading on all images
- No responsive images (srcset)
- Featured images from WordPress not optimized

### 9. Internal Linking
- No related content links
- No breadcrumb navigation
- Missing "Related Programmes" on detail pages

---

## 🟢 MEDIUM PRIORITY ISSUES

### 10. Content Gaps
- Homepage has hardcoded stats (not dynamic)
- Programme detail pages have minimal content
- Blog has only 2 posts
- News has limited articles

### 11. Local SEO
- No Google Business Profile integration
- No local schema markup (LocalBusiness)
- No review schema
- No location-specific pages

### 12. Mobile Optimization
- Header needs better mobile menu
- Some images not responsive
- Touch targets could be larger

---

## 📋 GEO (Generative Engine Optimization) Checklist

| Item | Status | Action |
|------|--------|--------|
| llms.txt file | ❌ Missing | Create file |
| AI crawler access | ⚠️ Partial | Update robots.txt |
| Structured data | ✅ Good | Enhance |
| Factual content | ⚠️ Partial | Add more stats |
| Citation-ready | ⚠️ Partial | Add sources |
| Brand mentions | ❌ Weak | Build authority |
| Entity clarity | ✅ Good | Schema present |

---

## 📋 AEO (Answer Engine Optimization) Checklist

| Item | Status | Action |
|------|--------|--------|
| FAQ Schema | ❌ Missing | Add to all pages |
| HowTo Schema | ❌ N/A | Not needed |
| Q&A Content | ⚠️ Partial | Expand FAQs |
| Featured Snippet ready | ⚠️ Partial | Structure content |
| Knowledge Panel | ⚠️ Partial | Enhance schema |
| People Also Ask | ❌ Missing | Add content |
| Direct Answers | ⚠️ Partial | Add concise answers |

---

## 🔧 IMPLEMENTATION PLAN

### Phase 1: Critical Fixes (Today)

1. **Create llms.txt** — AI search visibility
2. **Update robots.txt** — Allow AI crawlers
3. **Add FAQ Schema** — Rich results
4. **Add Breadcrumb Schema** — Navigation signals
5. **Optimize images** — WebP, lazy loading, dimensions

### Phase 2: Performance (This Week)

6. **Replace framer-motion** — Use CSS animations
7. **Optimize fonts** — Self-host Font Awesome
8. **Add image preloading** — Critical images
9. **Implement ISR properly** — Dynamic content

### Phase 3: Content (This Month)

10. **Dynamic sitemap** — Fetch from WordPress
11. **Add more content** — Blog posts, news
12. **Internal linking** — Related content
13. **Local SEO** — GBP integration

---

## 🎯 EXPECTED RESULTS

After implementation:
- **SEO Score:** 62 → 85+
- **Core Web Vitals:** All Green
- **AI Search Visibility:** 50% → 90%
- **Rich Results:** FAQ, Breadcrumb, Organization
- **Page Speed:** 90+ (Mobile), 95+ (Desktop)

---

## 📞 NEXT STEPS

1. Implement Phase 1 fixes (Critical)
2. Test Core Web Vitals
3. Submit to Google Search Console
4. Monitor AI search visibility
5. Iterate based on data

---

**Report Generated:** July 13, 2026  
**Next Review:** July 20, 2026
