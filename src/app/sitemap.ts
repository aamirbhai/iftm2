import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://iftmuniversity.ac.in";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/admissions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/programmes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/placements`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/campus-life`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/research`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/editorial`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/naac`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/nirf`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/anti-ragging`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/grievance`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];

  // Dynamic routes from WordPress
  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const wordpressUrl = process.env.WORDPRESS_API_URL;
    if (wordpressUrl) {
      // Fetch programmes
      const programmesRes = await fetch(wordpressUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{ programmes(first: 100) { nodes { slug modified } } }`,
        }),
        next: { revalidate: 3600 },
      });
      const programmesData = await programmesRes.json();
      if (programmesData?.data?.programmes?.nodes) {
        const programmeRoutes = programmesData.data.programmes.nodes.map(
          (p: { slug: string; modified: string }) => ({
            url: `${baseUrl}/programmes/${p.slug}`,
            lastModified: new Date(p.modified),
            changeFrequency: "monthly" as const,
            priority: 0.8,
          })
        );
        dynamicRoutes.push(...programmeRoutes);
      }

      // Fetch news
      const newsRes = await fetch(wordpressUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{ newsItems(first: 100) { nodes { slug modified } } }`,
        }),
        next: { revalidate: 3600 },
      });
      const newsData = await newsRes.json();
      if (newsData?.data?.newsItems?.nodes) {
        const newsRoutes = newsData.data.newsItems.nodes.map(
          (n: { slug: string; modified: string }) => ({
            url: `${baseUrl}/news/${n.slug}`,
            lastModified: new Date(n.modified),
            changeFrequency: "weekly" as const,
            priority: 0.7,
          })
        );
        dynamicRoutes.push(...newsRoutes);
      }

      // Fetch blog posts
      const blogRes = await fetch(wordpressUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{ posts(first: 100) { nodes { slug modified } } }`,
        }),
        next: { revalidate: 3600 },
      });
      const blogData = await blogRes.json();
      if (blogData?.data?.posts?.nodes) {
        const blogRoutes = blogData.data.posts.nodes.map(
          (b: { slug: string; modified: string }) => ({
            url: `${baseUrl}/blog/${b.slug}`,
            lastModified: new Date(b.modified),
            changeFrequency: "weekly" as const,
            priority: 0.7,
          })
        );
        dynamicRoutes.push(...blogRoutes);
      }
    }
  } catch (error) {
    console.error("Error fetching dynamic sitemap routes:", error);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
