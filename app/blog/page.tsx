import Link from 'next/link'
import { getArticles } from '@/lib/newt'
import type { Metadata } from 'next'
import { ArticleCard } from '../_components/ArticleCard'

export const metadata: Metadata = {
  title: 'yuta.run',
  description: "yuta's page",
}

export default async function Page() {
  const articles = await getArticles()
  return (
    <div>
      <h1 className='text-2xl font-bold my-8'>Blog</h1>
      {articles.map((article) => (
        <div key={article._id} className='mb-8'>
          <ArticleCard articleMeta={article} />
        </div>
      ))}
    </div>
  )
}
