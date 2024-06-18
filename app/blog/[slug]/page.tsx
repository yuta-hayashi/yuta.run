import { getArticleBySlug } from '@/lib/newt'
import type { Metadata } from 'next'
import type { Article } from '@/types/newtApi'
import { TagTip } from '@/app/_components/TagTip'

type Props = {
  params: {
    slug: string
  }
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  console.log(article)

  return {
    title: article?.title,
    description: 'article detail page',
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (!article) return

  return (
    <main className='mx-auto my-6 max-w-4xl px-6 lg:px-8 prose md:prose-lg lg:prose-xl'>
      <p className='not-prose text-6xl text-center my-4'>{article.emoji_icon.value}</p>
      <h1>{article.title}</h1>
      {article.tags.length > 0 && <span>Tags: </span>}
      {article.tags.map((tag) => (
        <TagTip tag={tag} key={tag._id} />
      ))}
      <p className='my-2'>公開日: {new Date(article.published_at).toLocaleDateString()}</p>
      <article dangerouslySetInnerHTML={{ __html: article.body }} className='' />
    </main>
  )
}
