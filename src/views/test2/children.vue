<template>
  <div class="children">我是子组件</div>
  <p>{{ testVal }}</p>
  <div>
    <button @click="clickChild">点击子组件向父组件传值</button>
  </div>
</template>
<script setup lang="ts">
// defineProps 方法的使用，用于接受父组件传的值
const props = defineProps({
  testVal: {
    type: String,
    default: "子组件的初始值",
  },
});

// defineEmits 方法用于向父组件传值
const emit = defineEmits(["tofatherEvent"]);
const clickChild = () => {
  let params = "子组件向父组件传的值";
  emit("tofatherEvent", params);
};
</script>
<style scoped>
.children {
  font-size: 30px;
  color: red;
  margin-top: 20px;
}
</style>
