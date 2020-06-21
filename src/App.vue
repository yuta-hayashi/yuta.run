<template>
  <div>
    <div id="top_area">
      <h1 id="top_name">{{ name }}</h1>
    </div>
    <div id="sections">
      <section>
        <h2><span>Write once, </span> <span>run anywhere.</span></h2>
        <p class="top_p">
          Webアプリケーションは、これを実現できると私は考えています。<br />
          モバイルから、デスクトップまでOSを問わずブラウザさえあれば、
          同じアプリケーションを動作させることができるのです。<br />
          高機能なブラウザと高度に発展したJavascriptとライブラリにより、
          ネイティブアプリケーションに劣らない体験を実現できるようになりました。<br />
          Webの可能性をさらに広げる、ということを私は目指しています。
        </p>
      </section>
      <section>
        <h2>Works</h2>
        <p class="subtitle">過去に作ったもの</p>
        <div id="works_list">
          <work-card
            :work="{
              name: 'tekaku',
              title: 'てかく',
              tech: [
                'Vue.js',
                'Typescript',
                'Vuex',
                'canvas',
                'Firebase',
                'TwitterAPI'
              ],
              link: [
                { name: 'アクセス🚀', link: 'https://tekaku.yuta.run' },
                { name: 'About', link: 'https://tekaku.yuta.run/about' }
              ]
            }"
            >手書きてツイートできるWebアプリ(PWA)です。iPad向けに作られており、さらにApple
            Pencilの筆圧も反映されるので手書き感が出ます。</work-card
          >
          <work-card
            :work="{
              name: 'Likes',
              title: 'Likes',
              tech: ['Vue.js', 'Vuex', 'Typescript', 'Firebase'],
              link: [
                { name: 'アクセス🚀', link: 'https://likes.yuta.run' },
                {
                  name: 'GitHub',
                  link: 'https://github.com/yuta-hayashi/likes'
                },
                {
                  name: 'Figma',
                  link:
                    'https://www.figma.com/file/l4fWkVbDPPGMVugNPl5HDl/Likes-memo?node-id=0%3A1'
                }
              ]
            }"
            >日用品を写真でメモできるアプリ(PWA)です。
            インストールボタンやショートカットメニューなどPWAの機能を多く取り入れています。
            ネイティブにかなり近い作りになっています。</work-card
          >
          <work-card
            :work="{
              name: 'mdtakaoka',
              title: 'MD高岡特設サイト',
              tech: [
                'Vue.js',
                'Nuxt.js',
                'Contentful',
                'Netlify',
                'Apps Script'
              ],
              link: [
                { name: 'アクセス🚀', link: 'https://mdtakaoka.yuta.run' },
                {
                  name: 'Qiita',
                  link: 'https://qiita.com/HYuta999/items/a703782c2a4f853e1495'
                },
                {
                  name: 'GitHub',
                  link: 'https://github.com/yuta-hayashi/mdtakaoka'
                },
                {
                  name: 'Qiita(QR)',
                  link: 'https://qiita.com/HYuta999/items/8858c062d3a2aaadea8c'
                },
                {
                  name: 'GitHub(QR)',
                  link: 'https://github.com/yuta-hayashi/qr-reception'
                }
              ]
            }"
            >IngressのローカルイベントMissionDay高岡の情報をまとめたサイトです。
            Contentfulによる複数人での編集や、SearchConsoleでのSEOも意識しました。
            QRコードによる受付システムも開発しました。</work-card
          >
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <p class="subtitle">使える技術</p>
        <div id="skills_list">
          <skill-card name="HTML5" :progress="80" fileName="HTML5"
            >アプリケーションを構築する上でのマークアップができます。</skill-card
          >
          <skill-card name="CSS" :progress="80" fileName="CSS"
            >Flexを使ったレスポンシブなレイアウトが得意です。</skill-card
          >
          <skill-card name="Javascript" :progress="70" fileName="Javascript"
            >フレームワークなしでの実装やjQueryの利用経験もあります。</skill-card
          >
          <skill-card name="typescript" :progress="50" fileName="typescript"
            >型付の知識やVue.jsでの使用経験あり。DDDは勉強中。</skill-card
          >
          <skill-card name="Vue.js" :progress="70" fileName="Vue_js"
            >お気に入りのフレームワーク。Vuex,
            Routerなども使えます。</skill-card
          >
          <skill-card name="Nuxt.js" :progress="70" fileName="Nuxt_js"
            >中規模以上のものを作るときに使います。</skill-card
          >
          <skill-card name="Firebase" :progress="50" fileName="Firebase"
            >SPAのサーバとしてFirestore, Storage,
            Authの使用経験あり。</skill-card
          >
          <skill-card name="Node.js" :progress="50" fileName="Node_js"
            >Firebase FunctionsやExpressでの開発経験があります。</skill-card
          >
          <skill-card name="GO" :progress="40" fileName="GO"
            >NoSQL DBを用いたREST APIを開発しました。</skill-card
          >
          <skill-card name="GCP" :progress="30" fileName="GCP"
            >Firebaseの延長線上として、様々なサービスが使えます。</skill-card
          >
          <skill-card name="Docker" :progress="40" fileName="Docker"
            >DBの環境構築やCaaSにデプロイして使っています。</skill-card
          >
          <skill-card name="Git" :progress="70" fileName="git"
            >基本的な操作とGitHubFlowの理解の知識が多少あります。</skill-card
          >
          <skill-card name="Figma" :progress="60" fileName="Figma"
            >UIのデザインをするときに使います。</skill-card
          >
        </div>
      </section>
      <section>
        <h2>Link</h2>
        <p class="subtitle">各種ページ</p>
        <link-list />
      </section>
    </div>
    <footer>
      <div>Last Updated 6/19/2020</div>
      <div>Copyright 2020 yuta.run</div>
    </footer>
  </div>
</template>

<script>
import WorkCard from "./components/WorkCard.vue";
import SkillCard from "./components/SkillCard.vue";
import LinkList from "./components/LinkList.vue";

export default {
  name: "App",
  components: {
    WorkCard,
    SkillCard,
    LinkList
  },
  data() {
    return {
      fullName: "yuta.run",
      name: ""
    };
  },
  mounted() {
    if (this.fullName != "") setInterval(this.addName, 90);
  },
  methods: {
    addName() {
      this.name += this.fullName.slice(0, 1);
      this.fullName = this.fullName.slice(1);
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
#sections {
  max-width: 860px;
  margin: 0 auto;
}
@media (max-width: 800px) {
  #sections {
    margin: 0 1em;
  }
}
#top_area {
  width: 100%;
  height: 100vh;
  background: var(--back);
  display: flex;
  justify-content: center;
  align-items: center;
}
#top_name {
  font-size: 10em;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 1em;
}

@media (max-width: 480px) {
  #top_name {
    font-size: 5em;
  }
}

section {
  margin: 5em 0;
}
h2 {
  font-size: 4em;
  text-align: left;
  font-weight: bold;
  margin-bottom: 0;
}
@media (max-width: 800px) {
  h2 {
    font-size: 3em;
  }
  h2 > span {
    display: inline-block;
  }
}
p {
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 2em;
  letter-spacing: 2px;
  margin: 0;
}
.top_p {
  margin-top: 2em;
}
.subtitle {
  margin-top: -0.8em;
  margin-bottom: 3em;
}
@media (max-width: 800px) {
  .subtitle {
    margin-bottom: 1em;
  }
}
#works_list {
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 480px) {
  #works_list {
    justify-content: space-around;
  }
}
#skills_list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
footer {
  margin: 1em;
  text-align: center;
  color: #858585;
}
</style>
