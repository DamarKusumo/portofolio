import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFeed } from './lib/feed.ts';

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Mudaku Blog</title>
    <link>https://blog.mudaku.my.id/</link>
    <item>
      <title>Tom &amp; Jerry &lt;guide&gt;</title>
      <link>https://blog.mudaku.my.id/posts/tom-jerry</link>
      <guid isPermaLink="true">https://blog.mudaku.my.id/posts/tom-jerry</guid>
      <pubDate>Fri, 02 Jan 2026 03:04:05 GMT</pubDate>
      <description>A &amp; B</description>
    </item>
    <item>
      <title>Second</title>
      <link>https://blog.mudaku.my.id/posts/second</link>
      <pubDate>Thu, 01 Jan 2026 00:00:00 GMT</pubDate>
      <description>body</description>
    </item>
    <item>
      <title>Third</title>
      <link>https://blog.mudaku.my.id/posts/third</link>
      <pubDate>Wed, 31 Dec 2025 00:00:00 GMT</pubDate>
      <description>body</description>
    </item>
    <item>
      <title>Fourth (over limit)</title>
      <link>https://blog.mudaku.my.id/posts/fourth</link>
      <pubDate>Tue, 30 Dec 2025 00:00:00 GMT</pubDate>
      <description>body</description>
    </item>
  </channel>
</rss>`;

test('parses items with decoded entities, in order, capped at limit', () => {
  const posts = parseFeed(feed, 3);
  assert.equal(posts.length, 3);
  assert.equal(posts[0].title, 'Tom & Jerry <guide>');
  assert.equal(posts[0].url, 'https://blog.mudaku.my.id/posts/tom-jerry');
  assert.equal(posts[0].description, 'A & B');
  assert.equal(posts[1].title, 'Second');
  assert.equal(posts[2].title, 'Third');
  // deterministic across server/client: UTC-pinned en-US format
  assert.equal(posts[0].displayDate, 'Jan 2, 2026');
});

test('returns empty array for a feed with no items', () => {
  assert.deepEqual(parseFeed('<rss version="2.0"></rss>'), []);
});
