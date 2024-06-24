import { ArticleCard } from '@/app/_components/ArticleCard'
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
      <h1 className='text-2xl font-bold my-8'>#{params.tagName} に関する記事</h1>
      {articles.map((article) => (
        <div key={article._id} className='mb-8'>
          <ArticleCard articleMeta={article} />
        </div>
      ))}
    </div>
  )
}
