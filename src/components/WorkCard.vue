<template>
  <div><img class="work_img" :src="'/img/' + name + '.png'" /></div>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    name: String
  }
};
</script>
<style scoped>
.work_img {
  width: 272px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
