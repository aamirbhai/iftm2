# WordPress Headless CMS Integration Design Spec

## [S1] Problem

The IFTM University website currently uses static dummy data for all content. We need a CMS to manage content dynamically without code changes.

## [S2] Solution Overview

Integrate WordPress as a headless CMS with the existing Next.js frontend. WordPress will handle content management, while Next.js continues to serve the frontend with static generation and ISR.

## [S3] Architecture

```
┌─────────────────┐     REST API / GraphQL     ┌─────────────────┐
│   IONOS Shared   │ ◄──────────────────────── │   Cloudflare    │
│   Hosting        │                            │   Pages         │
│                  │                            │                 │
│  WordPress       │                            │  Next.js        │
│  + WPGraphQL     │                            │  (IFTM Website) │
│  + ACF Plugin    │                            │                 │
└─────────────────┘                            └─────────────────┘
```

## [S4] WordPress Setup

### Plugins Required
- WPGraphQL - GraphQL API endpoint
- Advanced Custom Fields (ACF) - Custom fields for content
- ACF to WPGraphQL - Expose ACF fields via GraphQL
- WP CORS - Handle CORS headers for cross-origin requests

### Content Types
1. **Blog Posts** - Default WordPress posts
2. **News** - Custom post type
3. **Programmes** - Custom post type
4. **Pages** - Default WordPress pages

### Custom Fields (ACF)

**Blog Posts:**
- Category (taxonomy)
- Author name
- Read time
- Featured image

**News:**
- Department
- Publication date
- Source URL

**Programmes:**
- School (taxonomy)
- Level (UG/PG/Diploma/Ph.D.)
- Duration
- Eligibility
- Fee
- Overview (WYSIWYG)
- Curriculum (WYSIWYG)
- Career prospects (WYSIWYG)

## [S5] Next.js Integration

### Data Fetching
- GraphQL client: `graphql-request` (lightweight)
- Static generation with ISR (revalidation: 60 seconds)
- Fallback pages for new content

### API Layer
```
src/lib/
├── wordpress.ts          # WordPress API functions
├── graphql/
│   ├── posts.ts          # Blog post queries
│   ├── news.ts           # News queries
│   ├── programmes.ts     # Programme queries
│   └── pages.ts          # Page queries
└── types/
    └── wordpress.ts      # TypeScript interfaces
```

### Environment Variables
```
WORDPRESS_API_URL=https://your-domain.com/graphql
WORDPRESS_SITE_URL=https://your-domain.com
```

## [S6] Content Mapping

| WordPress | Next.js Route | Template |
|-----------|---------------|----------|
| Pages | `/[slug]` | Generic Page |
| Posts | `/blog/[slug]` | Blog Post |
| News CPT | `/news/[slug]` | News Article |
| Programmes CPT | `/programmes/[slug]` | Programme Detail |

## [S7] Implementation Phases

### Phase 1: WordPress Setup
- Install WordPress on IONOS
- Install required plugins
- Configure custom post types
- Set up ACF fields
- Configure CORS headers

### Phase 2: Next.js Integration
- Install GraphQL client
- Create API layer
- Update page templates to fetch from WordPress
- Add ISR configuration

### Phase 3: Content Migration
- Migrate dummy data to WordPress
- Test all pages
- Verify SEO metadata

## [S8] SEO Strategy

- WordPress SEO by Yoast plugin for meta tags
- Next.js `generateMetadata` reads from WordPress
- JSON-LD structured data from WordPress custom fields
- Sitemap auto-generated from WordPress
