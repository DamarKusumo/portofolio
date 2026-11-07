export type FeedPost = {
  title: string;
  url: string;
  displayDate: string;
  description: string;
};

export const BLOG_URL = 'https://blog.mudaku.my.id';

// shortcut: regex-parses only the blog's own RSS (fixed shape, escaped text
// nodes) — not arbitrary XML; upgrade to a real XML parser if the feed grows
// namespaces/CDATA
export function parseFeed(xml: string, limit = 3): FeedPost[] {
  const decode = (s: string) =>
    s
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  return items.slice(0, limit).map((item) => {
    const tag = (name: string) =>
      item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? '';
    const date = new Date(tag('pubDate'));
    return {
      title: decode(tag('title')),
      url: decode(tag('link')),
      // explicit UTC so server prerender and client hydration agree
      displayDate: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      }),
      description: decode(tag('description')),
    };
  });
}

// Cached an hour by Next; if the blog is down we degrade to "Read all" only.
export async function fetchLatestPosts(limit = 3): Promise<FeedPost[]> {
  try {
    const res = await fetch(`${BLOG_URL}/rss.xml`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return parseFeed(await res.text(), limit);
  } catch {
    return [];
  }
}
