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
    </main>
  )
}
