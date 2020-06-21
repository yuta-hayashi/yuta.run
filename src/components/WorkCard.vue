<template>
  <div>
    <img @click="open" class="work_img" :src="'/img/' + work.name + '.png'" />
    <transition name="modal">
      <div v-if="isModal" class="overlay" @click.self="close">
        <Modal :work="work" @close="close"><slot></slot></Modal>
      </div>
    </transition>
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
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease 0s;
}
@media (max-width: 800px) {
  .work_img {
    width: 220px;
    margin-bottom: 2em;
  }
}
.work_img:hover {
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.25);
  transform: translate(-0.2em, -0.2em);
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
  opacity: 1;
  z-index: 1;
}
.modal-enter-active {
  animation: SlideIn 0.8s;
}
.modal-leave-active {
  animation: SlideOut 0.8s;
}

@keyframes SlideIn {
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0, 0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1, 1);
  }
}
@keyframes SlideOut {
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: translateY(400px) scale(0, 0);
  }
}
</style>
