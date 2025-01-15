<template>
  <transition ansition name="fade">
    <div v-if="visible" class="cl-tips" ref="cl-tips">
      <div class="cl-tips-content">
        {{ message }}
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  message: String, 
  count: Number, 
});

// 控制组件可见性的状态
const visible = ref(true);

// 组件挂载后，设置一个定时器两秒后隐藏组件
let tiemr = setTimeout(() => {
  clearTimeout(tiemr);
  visible.value = false;
}, 2000);
</script>

<style lang="scss" scoped>
.cl-tips {
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 9px 30px;
  min-width: 80px; 
  max-width: 500px;
  font-size: 16px; 
  border-radius: 3px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>