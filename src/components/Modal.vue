<template>
  <div class="modal">
    <img class="modal_img" :src="'/img/' + work.name + '.png'" />
    <div class="modal_content">
      <div class="modal_close" @click="close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"
          />
        </svg>
      </div>
      <h3 class="modal_title">{{ work.title }}</h3>
      <p class="modal_text"><slot></slot></p>
      <div class="modal_techs">
        <span v-for="(tech, index) in work.tech" :key="index">{{ tech }}</span>
      </div>
      <div class="modal_links">
        <a
          class="modal_link"
          v-for="(item, index) in work.link"
          :key="index"
          :href="item.link"
          target="_blank"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    work: Object
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.modal {
  display: flex;
  background: var(--back);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  flex-wrap: wrap;
}
.modal_img {
  height: 100%;
}

.modal_content {
  padding: 2em;
  width: 400px;
  display: flex;
  flex-direction: column;
}
.modal_close {
  width: 1.5em;
  display: block;
  margin: 0 0 0 auto;
  right: 0;
  fill: var(--gray);
}
.modal_close:hover {
  fill: var(--dark);
}
.modal_title {
  font-size: 24px;
  margin-top: 0;
}
.modal_text {
  font-size: 1em;
  font-weight: normal;
}
.modal_techs {
  display: flex;
  flex-wrap: wrap;
}
.modal_techs > span {
  background: #e6e6e6;
  margin: 1em 1em 0 0;
  padding: 0.5em 1em;
  font-size: 0.9em;
  border-radius: 2em;
}
.modal_links {
  display: flex;
  flex-wrap: wrap;
}
.modal_link {
  border: solid 2px var(--dark);
  color: var(--dark);
  font-size: 1em;
  padding: 0.5em;
  display: block;
  margin: 2em 2em 0 0;
  transition: all 0.3s ease 0s;
}
.modal_link:hover {
  background: var(--dark);
  color: #ffffff;
}
</style>
