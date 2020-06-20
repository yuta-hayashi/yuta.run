<template>
  <div id="link_list">
    <a href="https://twitter.com/hyuta555" target="_blank">
      <div class="link_card twi">
        <img class="link_img" src="/icon/twitter.svg" /><span class="link_text"
          >Twitter</span
        >
      </div></a
    ><a href="https://github.com/yuta-hayashi" target="_blank">
      <div class="link_card hub">
        <img class="link_img" src="/icon/github.svg" /><span class="link_text"
          >GitHub</span
        >
      </div></a
    ><a href="https://blog.yuta.run/" target="_blank">
      <div class="link_card blo">
        <img class="link_img" src="/icon/blog.svg" /><span class="link_text"
          >Yuta's Blog</span
        >
      </div></a
    ><a href="https://qiita.com/HYuta999" target="_blank">
      <div class="link_card qii">
        <img class="link_img" src="/icon/Qiita.png" /></div
    ></a>
  </div>
</template>

<style scoped>
#link_list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.link_card {
  height: 90px;
  width: auto;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  transition: all 0.3s ease 0s;
  color: #000;
  overflow: hidden;
}

.link_card:hover {
  transform: translate(-0.2em, -0.2em);
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
}
.link_body {
  transition: all 0.5s ease;
  z-index: 2;
  position: relative;
}
.twi:hover {
  box-shadow: 6px 6px 20px 0 rgba(29, 161, 242, 0.8);
}
.hub:hover {
  box-shadow: 6px 6px 20px 0 #24292eb0;
}
.blo:hover {
  box-shadow: 6px 6px 20px 0 #3eaf7cb0;
}
.qii:hover {
  box-shadow: 6px 6px 20px 0 #5aae19b9;
}
</style>
