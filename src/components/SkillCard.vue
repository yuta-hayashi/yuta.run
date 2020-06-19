<template>
  <div class="skill_card">
    <div class="skill_img_box">
      <img class="skill_img" :src="'/icon/' + fileName + '.svg'" />
    </div>
    <p class="skill_name">{{ name }}</p>
    <!-- <progress class="skill_progress" value="70" max="100">70%</progress> -->
    <style>
      .skill_progress::after {
        width: %;
      }
    </style>
    <component is="style">
      .{{ fileName }}::after { content: ""; display: block; background: #000;
      height: 100%; width:{{ progress }}%; }
    </component>
    <div class="skill_progress" :class="fileName"></div>
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
.skill_progress {
  background: #ffffff;
  border: solid 1px #000;
  height: 10px;
  width: 160px;
  padding: 0px;
  margin: 0 auto;
}
</style>
