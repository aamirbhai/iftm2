import { GraphQLClient, gql } from 'graphql-request';
import type {
  WordPressPost,
  WordPressNews,
  WordPressProgramme,
  WordPressPage,
} from '@/types/wordpress';

const client = new GraphQLClient(
  process.env.WORDPRESS_API_URL ?? ''
);

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
  const data = await client.request<{
    posts: { pageInfo: { hasNextPage: boolean; endCursor: string }; nodes: WordPressPost[] };
  }>(GET_POSTS, { first, after });
  return data.posts;
}

export async function getPostBySlug(slug: string) {
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
  const data = await client.request<{ postBy: WordPressPost | null }>(query, { slug });
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
  const data = await client.request<{
    newsItems: { pageInfo: { hasNextPage: boolean; endCursor: string }; nodes: WordPressNews[] };
  }>(GET_NEWS, { first, after });
  return data.newsItems;
}

export async function getNewsBySlug(slug: string) {
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
  const data = await client.request<{ newsItemBy: WordPressNews | null }>(query, { slug });
  return data.newsItemBy;
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
  const data = await client.request<{
    programmes: { nodes: WordPressProgramme[] };
  }>(GET_PROGRAMMES, { first });
  return data.programmes.nodes;
}

export async function getProgrammeBySlug(slug: string) {
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
  const data = await client.request<{ programmeBy: WordPressProgramme | null }>(query, { slug });
  return data.programmeBy;
}

// --- Pages ---
export async function getPageBySlug(slug: string) {
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
  const data = await client.request<{ pageBy: WordPressPage | null }>(query, { slug });
  return data.pageBy;
}
