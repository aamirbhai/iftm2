# WordPress Headless CMS Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use compose:subagent (recommended) or compose:execute to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate WordPress as a headless CMS with the existing Next.js frontend for dynamic content management.

**Architecture:** WordPress on IONOS provides GraphQL API via WPGraphQL plugin. Next.js fetches data using `graphql-request` library with ISR (Incremental Static Regeneration) for fresh content.

**Tech Stack:** Next.js 16, React 19, graphql-request, TypeScript

## Global Constraints

- WordPress URL from environment variable `WORDPRESS_API_URL`
- GraphQL endpoint: `{WORDPRESS_SITE_URL}/graphql`
- ISR revalidation: 60 seconds
- All content types: Blog Posts, News, Programmes, Pages
- TypeScript interfaces for all WordPress data

---

### Task 1: Install Dependencies

**Covers:** S5

**Files:**
- Modify: `package.json`

**Interfaces:**
- Produces: `graphql-request` package available for import

- [ ] **Step 1: Install graphql-request**

Run: `npm install graphql-request graphql`

Expected output:
```
added 2 packages in Xs
```

- [ ] **Step 2: Verify installation**

Run: `npm list graphql-request`

Expected output:
```
iftm-webiste-next@0.1.0 D:\iftm-webiste-next
└── graphql-request@7.x.x
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add graphql-request for WordPress CMS integration"
```

---

### Task 2: Create Environment Configuration

**Covers:** S5

**Files:**
- Create: `.env.local.example`
- Modify: `.gitignore`

**Interfaces:**
- Produces: Environment variable documentation

- [ ] **Step 1: Create .env.local.example**

```bash
# WordPress CMS Configuration
WORDPRESS_API_URL=https://your-wordpress-domain.com/graphql
WORDPRESS_SITE_URL=https://your-wordpress-domain.com
```

- [ ] **Step 2: Add .env.local to .gitignore**

Read `.gitignore` and add if not present:
```
.env.local
.env*.local
```

- [ ] **Step 3: Commit**

```bash
git add .env.local.example .gitignore
git commit -m "feat: add WordPress CMS environment configuration"
```

---

### Task 3: Create TypeScript Types

**Covers:** S4, S6

**Files:**
- Create: `src/types/wordpress.ts`

**Interfaces:**
- Produces: TypeScript interfaces for all WordPress content types

- [ ] **Step 1: Create WordPress types**

```typescript
// WordPress CMS Types

export interface WordPressImage {
  id: string;
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

export interface WordPressCategory {
  id: string;
  name: string;
  slug: string;
}

export interface WordPressTag {
  id: string;
  name: string;
  slug: string;
}

export interface WordPressAuthor {
  id: string;
  name: string;
  slug: string;
  avatar?: {
    url: string;
  };
}

// Blog Post
export interface WordPressPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  featuredImage?: WordPressImage;
  categories: WordPressCategory[];
  tags: WordPressTag[];
  author: WordPressAuthor;
  // ACF Fields
  acf?: {
    readTime?: string;
    authorName?: string;
  };
}

// News Article
export interface WordPressNews {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  featuredImage?: WordPressImage;
  // ACF Fields
  acf?: {
    department?: string;
    sourceUrl?: string;
  };
}

// Programme
export interface WordPressProgramme {
  id: string;
  title: string;
  slug: string;
  content: string;
  modified: string;
  featuredImage?: WordPressImage;
  // ACF Fields
  acf?: {
    school?: string;
    level?: 'UG' | 'PG' | 'Diploma' | 'Ph.D.';
    duration?: string;
    eligibility?: string;
    fee?: string;
    overview?: string;
    curriculum?: string;
    career?: string;
  };
}

// Generic Page
export interface WordPressPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  modified: string;
  featuredImage?: WordPressImage;
}

// API Response Types
export interface PostsResponse {
  posts: {
    nodes: WordPressPost[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export interface NewsResponse {
  newsItems: {
    nodes: WordPressNews[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export interface ProgrammesResponse {
  programmes: {
    nodes: WordPressProgramme[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export interface PageResponse {
  page: WordPressPage | null;
}

export interface PostResponse {
  post: WordPressPost | null;
}

export interface NewsItemResponse {
  newsItem: WordPressNews | null;
}

export interface ProgrammeResponse {
  programme: WordPressProgramme | null;
}
```

- [ ] **Step 2: Verify TypeScript compilation**

Run: `npm run build`

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/types/wordpress.ts
git commit -m "feat: add WordPress CMS TypeScript types"
```

---

### Task 4: Create GraphQL Client

**Covers:** S5

**Files:**
- Create: `src/lib/wordpress.ts`

**Interfaces:**
- Produces: WordPress API client and fetch functions

- [ ] **Step 1: Create WordPress API client**

```typescript
import { GraphQLClient } from 'graphql-request';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost:8080/graphql';

const client = new GraphQLClient(WORDPRESS_API_URL);

// Generic fetch function
async function fetchGraphQL<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  try {
    return await client.request<T>(query, variables);
  } catch (error) {
    console.error('WordPress GraphQL Error:', error);
    throw error;
  }
}

// Blog Posts
export async function getPosts(first: number = 10, after?: string) {
  const query = `
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          content
          date
          modified
          featuredImage {
            node {
              id
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          categories {
            nodes {
              id
              name
              slug
            }
          }
          tags {
            nodes {
              id
              name
              slug
            }
          }
          author {
            node {
              id
              name
              slug
              avatar {
                url
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  return fetchGraphQL(query, { first, after });
}

export async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($slug: String!) {
      postBy(slug: $slug) {
        id
        title
        slug
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            id
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            id
            name
            slug
            avatar {
              url
            }
          }
        }
      }
    }
  `;

  return fetchGraphQL(query, { slug });
}

export async function getPostSlugs() {
  const query = `
    query GetPostSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  return fetchGraphQL(query);
}

// News Articles
export async function getNewsItems(first: number = 10, after?: string) {
  const query = `
    query GetNewsItems($first: Int!, $after: String) {
      newsItems(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          content
          date
          modified
          featuredImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  return fetchGraphQL(query, { first, after });
}

export async function getNewsItemBySlug(slug: string) {
  const query = `
    query GetNewsItemBySlug($slug: String!) {
      newsItemBy(slug: $slug) {
        id
        title
        slug
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            id
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  return fetchGraphQL(query, { slug });
}

export async function getNewsItemSlugs() {
  const query = `
    query GetNewsItemSlugs {
      newsItems(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  return fetchGraphQL(query);
}

// Programmes
export async function getProgrammes(first: number = 50, after?: string) {
  const query = `
    query GetProgrammes($first: Int!, $after: String) {
      programmes(first: $first, after: $after) {
        nodes {
          id
          title
          slug
          content
          modified
          featuredImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  return fetchGraphQL(query, { first, after });
}

export async function getProgrammeBySlug(slug: string) {
  const query = `
    query GetProgrammeBySlug($slug: String!) {
      programmeBy(slug: $slug) {
        id
        title
        slug
        content
        modified
        featuredImage {
          node {
            id
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  return fetchGraphQL(query, { slug });
}

export async function getProgrammeSlugs() {
  const query = `
    query GetProgrammeSlugs {
      programmes(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  return fetchGraphQL(query);
}

// Pages
export async function getPageBySlug(slug: string) {
  const query = `
    query GetPageBySlug($slug: String!) {
      pageBy(slug: $slug) {
        id
        title
        slug
        content
        modified
        featuredImage {
          node {
            id
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  return fetchGraphQL(query, { slug });
}

export async function getPageSlugs() {
  const query = `
    query GetPageSlugs {
      pages(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  return fetchGraphQL(query);
}
```

- [ ] **Step 2: Verify TypeScript compilation**

Run: `npm run build`

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/lib/wordpress.ts
git commit -m "feat: add WordPress API client with GraphQL queries"
```

---

### Task 5: Update Blog Templates

**Covers:** S6

**Files:**
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/blog/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getPosts`, `getPostBySlug`, `getPostSlugs` from `src/lib/wordpress.ts`
- Produces: Blog pages fetching data from WordPress

- [ ] **Step 1: Update blog listing page**

Read `src/app/blog/page.tsx` and replace static data with WordPress fetch:

```typescript
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | IFTM University Moradabad",
  description: "Latest insights, stories, and updates from IFTM University.",
  alternates: { canonical: "https://iftmuniversity.ac.in/blog" },
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function BlogPage() {
  const data = await getPosts(10);
  const posts = data?.posts?.nodes || [];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="Blog"
          subtitle="Insights, stories, and updates from IFTM University"
          breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-iftm-text-light">No blog posts found. Please check WordPress connection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      {post.featuredImage?.node?.sourceUrl ? (
                        <img
                          src={post.featuredImage.node.sourceUrl}
                          alt={post.featuredImage.node.altText || post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-iftm-light flex items-center justify-center">
                          <span className="text-iftm-text-light">No Image</span>
                        </div>
                      )}
                      {post.categories?.nodes?.[0] && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-iftm-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                            {post.categories.nodes[0].name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-iftm-text-light text-[11px] mb-2">
                        <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        {post.author?.node?.name && (
                          <>
                            <span>•</span>
                            <span>{post.author.node.name}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-iftm-dark font-bold text-[15px] mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                      <div className="mt-4 flex items-center gap-1 text-iftm-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read More
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Update blog post detail page**

Read `src/app/blog/[slug]/page.tsx` and replace static data with WordPress fetch. Keep the same layout structure but fetch from WordPress.

- [ ] **Step 3: Verify build**

Run: `npm run build`

Expected: No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/page.tsx src/app/blog/[slug]/page.tsx
git commit -m "feat: update blog templates to fetch from WordPress"
```

---

### Task 6: Update News Templates

**Covers:** S6

**Files:**
- Modify: `src/app/news/page.tsx`
- Modify: `src/app/news/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getNewsItems`, `getNewsItemBySlug` from `src/lib/wordpress.ts`
- Produces: News pages fetching data from WordPress

- [ ] **Step 1: Update news listing page**

Similar pattern to blog listing - replace static data with WordPress fetch.

- [ ] **Step 2: Update news article detail page**

Similar pattern to blog post detail - replace static data with WordPress fetch.

- [ ] **Step 3: Verify build**

Run: `npm run build`

Expected: No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add src/app/news/page.tsx src/app/news/[slug]/page.tsx
git commit -m "feat: update news templates to fetch from WordPress"
```

---

### Task 7: Update Programme Templates

**Covers:** S6

**Files:**
- Modify: `src/app/programmes/page.tsx`
- Modify: `src/app/programmes/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getProgrammes`, `getProgrammeBySlug` from `src/lib/wordpress.ts`
- Produces: Programme pages fetching data from WordPress

- [ ] **Step 1: Update programmes listing page**

Similar pattern - replace static data with WordPress fetch.

- [ ] **Step 2: Update programme detail page**

Similar pattern - replace static data with WordPress fetch. Keep the tabbed interface but load content from WordPress.

- [ ] **Step 3: Verify build**

Run: `npm run build`

Expected: No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add src/app/programmes/page.tsx src/app/programmes/[slug]/page.tsx
git commit -m "feat: update programme templates to fetch from WordPress"
```

---

### Task 8: Update Generic Page Template

**Covers:** S6

**Files:**
- Modify: `src/app/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getPageBySlug` from `src/lib/wordpress.ts`
- Produces: Generic pages fetching data from WordPress

- [ ] **Step 1: Update generic page template**

Replace static data with WordPress fetch. Keep the same layout.

- [ ] **Step 2: Verify build**

Run: `npm run build`

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/app/[slug]/page.tsx
git commit -m "feat: update generic page template to fetch from WordPress"
```

---

### Task 9: Create WordPress Setup Guide

**Covers:** S4

**Files:**
- Create: `docs/wordpress-setup.md`

**Interfaces:**
- Produces: Documentation for WordPress setup on IONOS

- [ ] **Step 1: Create setup guide**

```markdown
# WordPress Headless CMS Setup Guide for IFTM University

## 1. Install WordPress on IONOS

1. Log in to IONOS control panel
2. Go to "Websites & Domains"
3. Click "WordPress" under "Applications"
4. Install WordPress on a subdomain (e.g., `cms.iftmuniversity.ac.in`)

## 2. Install Required Plugins

After WordPress installation, install these plugins:

### WPGraphQL
- Go to Plugins → Add New
- Search "WPGraphQL"
- Install and activate

### Advanced Custom Fields (ACF)
- Go to Plugins → Add New
- Search "Advanced Custom Fields"
- Install and activate

### ACF to WPGraphQL
- Go to Plugins → Add New
- Search "ACF to WPGraphQL"
- Install and activate

### WP CORS (or add code to functions.php)
- Go to Plugins → Add New
- Search "WP CORS"
- Install and activate

## 3. Configure CORS Headers

Add this to your theme's `functions.php` or use WP CORS plugin:

```php
function add_cors_http_header() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}
add_action('init', 'add_cors_http_header');
```

## 4. Create Custom Post Types

Add to `functions.php`:

```php
// Register News Post Type
function create_news_post_type() {
    register_post_type('news', array(
        'labels' => array(
            'name' => 'News',
            'singular_name' => 'News',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'newsItem',
        'graphql_plural_name' => 'newsItems',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'news'),
    ));
}
add_action('init', 'create_news_post_type');

// Register Programme Post Type
function create_programme_post_type() {
    register_post_type('programme', array(
        'labels' => array(
            'name' => 'Programmes',
            'singular_name' => 'Programme',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'programme',
        'graphql_plural_name' => 'programmes',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'programmes'),
    ));
}
add_action('init', 'create_programme_post_type');
```

## 5. Create ACF Field Groups

### Blog Post Fields
- Read Time (Text)
- Author Name (Text)

### News Fields
- Department (Text)
- Source URL (URL)

### Programme Fields
- School (Text)
- Level (Select: UG, PG, Diploma, Ph.D.)
- Duration (Text)
- Eligibility (Textarea)
- Fee (Text)
- Overview (WYSIWYG Editor)
- Curriculum (WYSIWYG Editor)
- Career Prospects (WYSIWYG Editor)

## 6. Configure GraphQL Settings

1. Go to GraphQL → Settings
2. Enable "Public Introspection"
3. Set "Max Posts Per Page" to 100

## 7. Test GraphQL Endpoint

Visit: `https://cms.iftmuniversity.ac.in/graphql`

Test query:
```graphql
{
  posts {
    nodes {
      id
      title
      slug
    }
  }
}
```

## 8. Environment Variables

Add to `.env.local`:
```
WORDPRESS_API_URL=https://cms.iftmuniversity.ac.in/graphql
WORDPRESS_SITE_URL=https://cms.iftmuniversity.ac.in
```

## 9. CORS Configuration for IONOS

If CORS headers don't work via plugin, add to `.htaccess`:

```
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type, Authorization"
```
```

- [ ] **Step 2: Commit**

```bash
git add docs/wordpress-setup.md
git commit -m "docs: add WordPress setup guide for IONOS hosting"
```

---

### Task 10: Final Verification

**Covers:** S5, S6

- [ ] **Step 1: Run full build**

Run: `npm run build`

Expected: All pages generate successfully

- [ ] **Step 2: Test with mock WordPress**

Create a simple test to verify the API client works without a real WordPress instance.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete WordPress CMS integration setup"
```
