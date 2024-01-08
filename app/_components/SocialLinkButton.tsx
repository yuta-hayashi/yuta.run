import Image from 'next/image'

type Props = {
  href: string
  name: string
  socialId: string
  iconName: string
  className?: string
}
export const SocialLinkButton = (props: Props) => {
  return (
    <a
      href={props.href}
      target='_blank'
      className={`flex w-44 p-2 hover:bg-gray-100 rounded-lg ${props.className || ''}`}
    >
      <div className='flex items-center'>
        <Image
          src={`/icons/${props.iconName}.svg`}
          alt={`${props.iconName} logo image`}
          width={40}
          height={40}
        />
      </div>
      <div className='ml-3'>
        <p className='font-semibol text-lg text-gray-800'>{props.name}</p>
        <p className='text-gray-600 font-light'>{props.socialId}</p>
      </div>
    </a>
  )
}
