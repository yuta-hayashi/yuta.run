<template>
  <div>
    <div id="top_area">
      <h1 id="top_name">{{ name }}</h1>
    </div>
    <div id="sections">
      <section>
        <h2>Write once, run anywhere.</h2>
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
                { name: 'アクセス🚀', link: 'https://mdtakaoka.yuta.run' },
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
          <skill-card name="HTML5" :progress="80" fileName="HTML5"></skill-card>
          <skill-card name="CSS" :progress="80" fileName="CSS"></skill-card>
          <skill-card
            name="Javascript"
            :progress="70"
            fileName="Javascript"
          ></skill-card>
          <skill-card
            name="typescript"
            :progress="50"
            fileName="typescript"
          ></skill-card>
          <skill-card
            name="Vue.js"
            :progress="70"
            fileName="Vue_js"
          ></skill-card>
          <skill-card
            name="Nuxt.js"
            :progress="70"
            fileName="Nuxt_js"
          ></skill-card>
          <skill-card
            name="Firebase"
            :progress="50"
            fileName="Firebase"
          ></skill-card>
          <skill-card
            name="Node.js"
            :progress="50"
            fileName="Node_js"
          ></skill-card>
          <skill-card name="GO" :progress="40" fileName="GO"></skill-card>
          <skill-card name="GCP" :progress="30" fileName="GCP"></skill-card>
          <skill-card
            name="Docker"
            :progress="40"
            fileName="Docker"
          ></skill-card>
          <skill-card name="Git" :progress="70" fileName="git"></skill-card>
          <skill-card name="Figma" :progress="60" fileName="Figma"></skill-card>
        </div>
      </section>
      <section>
        <h2>Link</h2>
        <p class="subtitle">各種ページ</p>
        <div id="link_list">
          <a href="https://twitter.com/hyuta555" target="_blank">
            <div class="link_card">
              <img class="link_img" src="/icon/twitter.svg" /><span
                class="link_text"
                >Twitter</span
              >
            </div></a
          >
          <a href="https://github.com/yuta-hayashi" target="_blank">
            <div class="link_card">
              <img class="link_img" src="/icon/github.svg" /><span
                class="link_text"
                >GitHub</span
              >
            </div></a
          ><a href="https://blog.yuta.run/" target="_blank">
            <div class="link_card">
              <img class="link_img" src="/icon/blog.svg" /><span
                class="link_text"
                >Yuta's Blog</span
              >
            </div></a
          ><a href="https://qiita.com/HYuta999" target="_blank">
            <div class="link_card">
              <img class="link_img" src="/icon/Qiita.png" /></div
          ></a>
        </div>
      </section>
    </div>
    <footer>
      <small>Last Updated 6/19/2020</small>
      <small>Copyright 2020 yuta.run</small>
    </footer>
  </div>
</template>

<script>
import WorkCard from "./components/WorkCard.vue";
import SkillCard from "./components/SkillCard.vue";

export default {
  name: "App",
  components: {
    WorkCard,
    SkillCard
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
#top_area {
  width: 100%;
  height: 100vh;
  background: var(--back);
  display: flex;
  justify-content: center;
  align-items: center;
}
#top_name {
  font-size: 144px;
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  margin-bottom: 200px;
}

section {
  margin: 5em 0;
}
h2 {
  font-size: 64px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 0;
}
p {
  text-align: left;
  font-size: 24px;
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
#works_list {
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#skills_list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
#link_list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.link_card {
  height: 90px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
}
.link_img {
  height: 48px;
  margin: 0 1em;
}
.link_text {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1em;
  color: #000;
}
</style>
