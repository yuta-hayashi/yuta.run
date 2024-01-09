export type Tag = {
  _id: string
  name: string
  slug: string
}

export type Article = {
  _id: string
  title: string
  slug: string
  body: string
  tags: Tag[]
}

export type ActivityItem = {
  _id: string
  title: string
  url: string
  description: string
  published_at: string
}
