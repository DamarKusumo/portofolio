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
// Failures are logged: the silent catch hid a build-time fetch bug for a week.
export async function fetchLatestPosts(limit = 3): Promise<FeedPost[]> {
  try {
    const res = await fetch(`${BLOG_URL}/rss.xml`, {
      next: { revalidate: 3600 },
      // Cloudflare edge-blocks the default undici UA with 403; browser UA passes.
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; portfolio-rss/1.0; +https://portofolio.mudaku.my.id)',
      },
    });
    if (!res.ok) {
      console.warn(
        `[feed] rss.xml responded ${res.status} ${res.statusText}` +
          ` (cf-mitigated=${res.headers.get('cf-mitigated')},` +
          ` server=${res.headers.get('server')})`
      );
      return [];
    }
    return parseFeed(await res.text(), limit);
  } catch (err) {
    console.warn(
      '[feed] fetch failed:',
      err instanceof Error ? `${err.name}: ${err.message}` : err
    );
    return [];
  }
}
