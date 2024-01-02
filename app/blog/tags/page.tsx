import Link from 'next/link'
import { getTags } from '@/lib/newt'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tags | yuta's blog",
  description: "yuta's page",
}

export default async function TagsPage() {
  const tags = await getTags()
  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag._id}>
            <Link href={`/blog/tags/${tag.slug}`}>{tag.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
