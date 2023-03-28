<template>
  <div>内置组件的用法</div>

  <div class="settransform">
    <div class="trans">我的trans的子元素</div>
    <Teleport to="body" :disabled="commonData.isMobile">
      <button @click="commonData.isMobile = true">设置disabled</button>
      <div class="mask">
        这是我的模板
        <button @click="commonData.isMobile = !commonData.isMobile">设置disabled</button>
      </div>
    </Teleport>
  </div>
  <div id="father">模拟一个父元素</div>

  <div>====================================================</div>
  <br />

  <button @click="commonData.show = !commonData.show">Toggle</button>
  <Transition>
    <p v-if="commonData.show">hello</p>
  </Transition>

  <div>====================================================</div>
  <br />

  <Transition name="bounce">
    <p v-if="commonData.show" style="text-align: center">
      Hello here is some bouncy text!
    </p>
  </Transition>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, watchEffect, computed } from "vue";

const commonData = reactive({
  isMobile: true,
  show: false,
});
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.trans {
  width: 200px;
  height: 200px;
  background: pink;
}
.settransform {
  transform: scale(0.5);
}
#father {
  color: red;
}
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
