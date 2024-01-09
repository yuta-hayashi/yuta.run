import { getTimeline } from '@/lib/timeline'

export async function GET() {
  const timeline = await getTimeline()

  const items = timeline.articles.map((article) => {
    return `<item>
            <title>${article.title}</title>
            <link>${article.link}</link>
            <description>${article.content}</description>
            <pubDate>${article.pubDate}</pubDate>
            <guid>${article.link}</guid>
        </item>`
  })

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
        <channel>
            <title>yuta.run timeline</title>
            <link>https://yuta.run</link>
            <description>yuta-hayashiのアウトプットを全部まとめたRSSです。</description>
            <language>ja</language>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
            <docs>https://yuta.run/rss.xml</docs>
        </channel>
        ${items}
    </rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
