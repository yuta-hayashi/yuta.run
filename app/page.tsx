import { SocialLinkButton } from '@/app/_components/SocialLinkButton'
import { getTimeline } from '@/lib/timeline'
import { socialLinks } from '@/lib/data'

export default async function Home() {
  const skills = [
    {
      category: 'Backend',
      skills: 'Ruby on Rails, Sidekiq, Rspec, PostgreSQL, GraphQL, Node.js, TypeScript, Express',
    },
    {
      category: 'Frontend',
      skills:
        'React, Next.js, TypeScript, ApolloClient, Jest, Vue.js, Nuxt.js, SCSS, Backbone.js, jQuery',
    },
    {
      category: 'Infrastructure / Ops',
      skills: 'Heroku, AWS, GitHub Actions, Datadog, Sentry, Google Cloud',
    },
    {
      category: 'Other',
      skills: 'Elasticsearch, Flutter, ImageMagick, Rust',
    },
  ]

  const activities = await getTimeline().catch((e) => {
    console.error(e)
    return { articles: [] }
  })

  return (
    <main className='mx-auto my-6 max-w-4xl px-6 lg:px-8'>
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

      <section className='mb-10'>
        <h2 className='text-2xl font-bold tracking-tight text-black mb-4'>Links</h2>
        <div className='flex flex-wrap gap-8'>
          {socialLinks.map((socialLink) => (
            <SocialLinkButton
              key={socialLink.name}
              href={socialLink.href}
              socialId={socialLink.socialId}
              name={socialLink.name}
              iconName={socialLink.iconName}
            />
          ))}
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold tracking-tight text-black mb-4'>Skills</h2>
        <p className='mt-1 max-w-2xl leading-6 text-gray-500'>
          主に業務で3年ほど扱ってきた言語、ライブラリ、ミドルウェアです。
        </p>
        <div>
          <div className='mt-6 border-t border-gray-100'>
            <dl className='divide-y divide-gray-100'>
              {skills.map((skill) => (
                <div className='py-6 grid grid-cols-6 gap-4' key={skill.category}>
                  <dt className='text-sm font-medium leading-6 text-gray-900'>{skill.category}</dt>
                  <dd className='mt-1 text-sm leading-6 text-gray-700 col-span-5 sm:mt-0'>
                    {skill.skills}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold tracking-tight text-black mb-4'>Activity</h2>
        <p className='mt-1 max-w-2xl leading-6 text-gray-500'>
          ブログやZennなどに執筆した記事をまとめています。
        </p>
        <div>
          <div className='mt-6 border-t border-gray-100'>
            <dl className='divide-y divide-gray-100'>
              {activities.articles.map((article) => (
                <div className='py-6 grid grid-cols-1 gap-4' key={article.id}>
                  <a href={article.link} target='_blank' rel='noopener noreferrer'>
                    <p className='leading-6 text-lg font-medium mb-2'>{article.title}</p>
                    <p className='text-gray-800'>{article.content}...</p>
                    <span className='mt-1 text-sm leading-6 text-gray-500'>
                      {new Date(article.pubDate).toLocaleDateString()}
                    </span>
                  </a>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  )
}
