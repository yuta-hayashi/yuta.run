import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Metadata } from 'next'
import type { Article } from '@/types/newtApi'

type Props = {
  params: {
    slug: string
  }
}

export async function getServerSideProps() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
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
    <main>
      <h1>{article.title}</h1>
      {article.tags.map((tag) => (
        <p key={tag._id}>{tag.name}</p>
      ))}
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  )
}
