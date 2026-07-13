import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://iftmuniversity.ac.in${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav className="flex items-center gap-2 text-sm mb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-white/60 hover:text-iftm-gold transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-iftm-gold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
