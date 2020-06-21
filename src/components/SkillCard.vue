<template>
  <div class="skill_card">
    <div class="skill_img_box">
      <img class="skill_img" :src="'/icon/' + fileName + '.svg'" />
    </div>
    <p class="skill_name">{{ name }}</p>
    <style>
      .skill_progress::after {
        width: %;
      }
    </style>
    <component is="style">
      .{{ fileName }}::after { content: ""; display: block; background: #2c3e50;
      height: 100%; width:{{ progress }}%; }
    </component>
    <div class="skill_progress" :class="fileName"></div>
    <div class="skill_detail">
      <p class="skill_detail_body"><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    name: String,
    progress: Number,
    fileName: String
  }
};
</script>
<style scoped>
.skill_card {
  width: 160px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1em;
  position: relative;
}
@media (max-width: 480px) {
  .skill_card {
    width: 100px;
  }
}
.skill_img_box {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.skill_img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.skill_name {
  text-align: center;
}
.skill_detail {
  position: absolute;
  background: #ffffffd5;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  font-size: 1.2em;
  opacity: 0;
  transition: 0.3s;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.skill_detail_body {
  margin: 1em;
  font-size: 1em;
  font-weight: normal;
}
.skill_detail:hover {
  opacity: 1;
}
@media (max-width: 480px) {
  .skill_name {
    font-size: 1em;
  }
  .skill_detail_body {
    font-size: 0.8em;
  }
}
.skill_progress {
  background: #ffffff;
  border: solid 1px #2c3e50;
  height: 10px;
  width: 160px;
  padding: 0px;
  margin: 0 auto;
}
@media (max-width: 480px) {
  .skill_progress {
    width: 100px;
  }
}
</style>
