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
</template>
<script lang="ts" setup>
import { reactive, ref, watch, watchEffect, computed } from "vue";

const commonData = reactive({
  isMobile: false,
});
</script>

<style scoped>
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
