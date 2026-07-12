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
  acf?: {
    readTime?: string;
    authorName?: string;
  };
}

export interface WordPressNews {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  featuredImage?: WordPressImage;
  acf?: {
    department?: string;
    sourceUrl?: string;
  };
}

export interface WordPressProgramme {
  id: string;
  title: string;
  slug: string;
  content: string;
  modified: string;
  featuredImage?: WordPressImage;
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

export interface WordPressPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  modified: string;
  featuredImage?: WordPressImage;
}
