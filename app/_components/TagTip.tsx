import { Tag } from '@/types/newtApi'
import Link from 'next/link'

type Props = {
  tag: Tag
}
export const TagTip = (props: Props) => {
  return (
    <Link href={`/blog/tags/${props.tag.slug}`} prefetch={false} className='mr-4'>
      #{props.tag.name}
    </Link>
  )
}
