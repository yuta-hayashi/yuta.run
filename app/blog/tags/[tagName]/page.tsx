import { getArticles } from '@/lib/newt'
import Link from 'next/link'

type Props = {
  params: {
    tagName: string
  }
}

export default async function TagPage({ params }: Props) {
  const articles = await getArticles({ tag: params.tagName })
  return (
    <div>
      <h1>{params.tagName}</h1>
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
