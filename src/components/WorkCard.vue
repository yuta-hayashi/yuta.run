<template>
  <div>
    <img @click="open" class="work_img" :src="'/img/' + work.name + '.png'" />
    <div v-if="isModal" class="overlay" @click.self="close">
      <Modal :work="work" @close="close"><slot></slot></Modal>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  components: {
    Modal
  },
  name: "WorkCard",
  props: {
    work: Object
  },
  data() {
    return { isModal: false };
  },
  methods: {
    open() {
      this.isModal = true;
      disableBodyScroll(document.body);
    },
    close() {
      enableBodyScroll(document.body);
      this.isModal = false;
    }
  }
};
</script>
<style scoped>
.work_img {
  width: 272px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}
.overlay {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(10px);
}
</style>
