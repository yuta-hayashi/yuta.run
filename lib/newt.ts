import 'server-only'
import { createClient } from 'newt-client-js'
import { cache } from 'react'
import type { Article, Tag, ActivityItem } from '@/types/newtApi'
import type { GetContentsQuery } from 'newt-client-js/dist/types/types'
import { notFound } from 'next/navigation'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: process.env.NODE_ENV === 'development' ? 'api' : 'cdn',
})

export const getArticles = cache(async ({ tag }: { tag?: string } = {}) => {
  let query: GetContentsQuery = {
    select: ['_id', 'title', 'slug', 'tags', 'published_at', 'emoji_icon'],
    order: ['-published_at'],
  }

  if (tag) {
    const tagContent = await getTagBySlug(tag)
    if (tagContent) {
      query.tags = tagContent._id
    } else {
      return notFound()
    }
  }

  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query,
  })
  return items
})

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'body', 'tags', 'published_at', 'emoji_icon'],
    },
  })
  return article
})

export const getTags = cache(async () => {
  const { items } = await client.getContents<Tag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      select: ['_id', 'name', 'slug'],
    },
  })
  return items
})

const getTagBySlug = cache(async (slug: string) => {
  const tag = await client.getFirstContent<Tag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      slug,
      select: ['_id'],
    },
  })
  return tag
})

export const getActivityItems = cache(async () => {
  const { items } = await client.getContents<ActivityItem>({
    appUid: 'blog',
    modelUid: 'activity_item',
    query: {
      select: ['_id', 'title', 'url', 'description', 'published_at'],
      order: ['published_at'],
    },
  })
  return items
})
