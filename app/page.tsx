import Image from 'next/image'
import { SocialLinkButton } from '@/app/_components/SocialLinkButton'

export default function Home() {
  return (
    <main className='mx-auto max-w-4xl px-6 lg:px-8'>
      <div className='mb-10'>
        <h1 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'>Yuta Hayashi</h1>
        <p className='mt-6 text-lg leading-9 text-gray-800'>
          3年目のWebエンジニア。
          <br />
          Ruby on Rails, React, TypeScript,
          GraphQLを中心にフロントエンドからバックエンドまでフルスタックで開発しています。
          <br />
          面白そうなことはなんでもやってみたいという精神で、Flutterでのモバイルアプリ開発、Web AR,
          Rustでの画像合成処理、パフォーマンスチューニングなど幅広い分野を経験しています。
        </p>
      </div>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold tracking-tight text-black mb-4'>Links</h2>
        <div className='flex flex-wrap gap-8'>
          <SocialLinkButton
            href='https://github.com/yuta-hayashi'
            socialId='yuta-hayashi'
            name='GitHub'
            iconName='github'
            className=''
          />
          <SocialLinkButton
            href='https://zenn.dev/hyuta'
            socialId='hyuta'
            name='Zenn'
            iconName='zenn'
          />
          <SocialLinkButton
            href='https://twitter.com/hyuta555'
            socialId='hyuta555'
            name='X'
            iconName='x'
          />
          <SocialLinkButton
            href='https://bsky.app/profile/yuta.run'
            socialId='yuta.run'
            name='Bluesky'
            iconName='bluesky'
          />
        </div>
      </section>
    </main>
  )
}
