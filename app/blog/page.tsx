import Link from 'next/link'
import { getArticles } from '@/lib/newt'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'yuta.run',
  description: "yuta's page",
}

export default async function Page() {
  const articles = await getArticles()
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
