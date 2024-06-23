import { ArticleMeta } from '@/types/newtApi'
import Link from 'next/link'

type Props = {
  articleMeta: ArticleMeta
}

export const ArticleCard = (props: Props) => {
  const articleMeta = props.articleMeta
  return (
    <Link href={`/blog/${articleMeta.slug}`} className='flex items-center hover:bg-gray-100 '>
      <p className='text-5xl mr-4'>{articleMeta.emoji_icon.value}</p>
      <div>
        <p>{articleMeta.title}</p>
        {articleMeta.tags.map((tag) => (
          <span key={tag.slug} className='mr-2 text-gray-500 text-sm'>
            #{tag.name}
          </span>
        ))}
        <p className='text-gray-400 text-sm'>
          {new Date(props.articleMeta.published_at).toLocaleDateString()}
        </p>
      </div>
    </Link>
  )
}
