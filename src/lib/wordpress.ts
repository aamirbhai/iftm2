import { GraphQLClient, gql } from 'graphql-request';
import type {
  WordPressPost,
  WordPressNews,
  WordPressProgramme,
  WordPressPage,
} from '@/types/wordpress';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

const client = WORDPRESS_API_URL
  ? new GraphQLClient(WORDPRESS_API_URL)
  : null;

function isWordPressConfigured(): boolean {
  return client !== null;
}

// --- Fragment: image fields ---
const IMAGE_FRAGMENT = gql`
  fragment ImageFields on MediaItem {
    id
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }
`;

// --- Posts ---
const GET_POSTS = gql`
  ${IMAGE_FRAGMENT}
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
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
            ...ImageFields
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
        acf {
          readTime
          authorName
        }
      }
    }
  }
`;

export async function getPosts(first = 10, after?: string) {
  if (!isWordPressConfigured()) {
    return { pageInfo: { hasNextPage: false, endCursor: '' }, nodes: [] };
  }
  const data = await client!.request<{
    posts: { pageInfo: { hasNextPage: boolean; endCursor: string }; nodes: WordPressPost[] };
  }>(GET_POSTS, { first, after });
  return data.posts;
}

const GET_POST_SLUGS = gql`
  query GetPostSlugs($first: Int = 100) {
    posts(first: $first) {
      nodes {
        slug
      }
    }
  }
`;

export async function getPostSlugs(): Promise<string[]> {
  if (!isWordPressConfigured()) return [];
  const data = await client!.request<{
    posts: { nodes: { slug: string }[] };
  }>(GET_POST_SLUGS);
  return data.posts.nodes.map((n) => n.slug);
}

export async function getPostBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = gql`
    ${IMAGE_FRAGMENT}
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
            ...ImageFields
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
        acf {
          readTime
          authorName
        }
      }
    }
  `;
  const data = await client!.request<{ postBy: WordPressPost | null }>(query, { slug });
  return data.postBy;
}

// --- News ---
const GET_NEWS = gql`
  ${IMAGE_FRAGMENT}
  query GetNews($first: Int = 10, $after: String) {
    newsItems(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
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
            ...ImageFields
          }
        }
        acf {
          department
          sourceUrl
        }
      }
    }
  }
`;

export async function getNews(first = 10, after?: string) {
  if (!isWordPressConfigured()) {
    return { pageInfo: { hasNextPage: false, endCursor: '' }, nodes: [] };
  }
  const data = await client!.request<{
    newsItems: { pageInfo: { hasNextPage: boolean; endCursor: string }; nodes: WordPressNews[] };
  }>(GET_NEWS, { first, after });
  return data.newsItems;
}

export async function getNewsBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = gql`
    ${IMAGE_FRAGMENT}
    query GetNewsBySlug($slug: String!) {
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
            ...ImageFields
          }
        }
        acf {
          department
          sourceUrl
        }
      }
    }
  `;
  const data = await client!.request<{ newsItemBy: WordPressNews | null }>(query, { slug });
  return data.newsItemBy;
}

export async function getNewsSlugs() {
  if (!isWordPressConfigured()) return [];
  const query = gql`
    query GetNewsSlugs {
      newsItems(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  const data = await client!.request<{ newsItems: { nodes: { slug: string }[] } }>(query);
  return data.newsItems.nodes.map((node) => node.slug);
}

// --- Programmes ---
const GET_PROGRAMMES = gql`
  ${IMAGE_FRAGMENT}
  query GetProgrammes($first: Int = 50) {
    programmes(first: $first) {
      nodes {
        id
        title
        slug
        content
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
        acf {
          school
          level
          duration
          eligibility
          fee
          overview
          curriculum
          career
        }
      }
    }
  }
`;

export async function getProgrammes(first = 50) {
  if (!isWordPressConfigured()) return [];
  const data = await client!.request<{
    programmes: { nodes: WordPressProgramme[] };
  }>(GET_PROGRAMMES, { first });
  return data.programmes.nodes;
}

export async function getProgrammeSlugs() {
  if (!isWordPressConfigured()) return [];
  const query = gql`
    query GetProgrammeSlugs($first: Int = 50) {
      programmes(first: $first) {
        nodes {
          slug
        }
      }
    }
  `;
  const data = await client!.request<{
    programmes: { nodes: { slug: string }[] };
  }>(query);
  return data.programmes.nodes.map((n) => n.slug);
}

export async function getProgrammeBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = gql`
    ${IMAGE_FRAGMENT}
    query GetProgrammeBySlug($slug: String!) {
      programmeBy(slug: $slug) {
        id
        title
        slug
        content
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
        acf {
          school
          level
          duration
          eligibility
          fee
          overview
          curriculum
          career
        }
      }
    }
  `;
  const data = await client!.request<{ programmeBy: WordPressProgramme | null }>(query, { slug });
  return data.programmeBy;
}

// --- Pages ---
export async function getPageBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = gql`
    ${IMAGE_FRAGMENT}
    query GetPageBySlug($slug: String!) {
      pageBy(uri: $slug) {
        id
        title
        slug
        content
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
      }
    }
  `;
  const data = await client!.request<{ pageBy: WordPressPage | null }>(query, { slug });
  return data.pageBy;
}

export async function getPageSlugs() {
  if (!isWordPressConfigured()) return [];
  const query = gql`
    query GetPageSlugs {
      pages(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  const data = await client!.request<{ pages: { nodes: { slug: string }[] } }>(query);
  return data.pages.nodes.map((node) => node.slug);
}
