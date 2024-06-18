import Image from 'next/image'
import { socialLinks } from '@/lib/data'
export const ProfileCard = () => {
  return (
    <div className='flex not-prose'>
      <Image
        src='/image/profile.jpg'
        width={200}
        height={200}
        alt='profile image'
        className='rounded-full w-24 h-24'
      />

      <div className='ml-8'>
        <p>Yuta Hayashi</p>
        <small>こんにちは。個人的に考えたことや思ったことを書いているブログです。</small>
        <div className='flex flex-wrap gap-4 my-2'>
          {socialLinks.map((socialLink) => (
            <SocialLinkButton
              key={socialLink.name}
              href={socialLink.href}
              socialId={socialLink.socialId}
              iconName={socialLink.iconName}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SocialLinkButton = (props: { href: string; socialId: string; iconName: string }) => {
  return (
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      <Image
        src={`/icons/${props.iconName}.svg`}
        alt={`${props.iconName} logo image`}
        width={32}
        height={32}
      />
    </a>
  )
}
