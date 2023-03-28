<template>
  <!-- 主要生命周期-->

  <p class="test2">{{ test2 }}</p>

  <!-- 跳过该元素及其所有子元素的编译,最常见的用例就是显示原始双大括号标签及内容。 -->
  <span v-pre>222222222{{ test2 }}</span>

  <button @click.prevent="changeTest()">改变</button>

  <p>----------------子组件---------------------</p>
  <children :testVal="test2" @tofatherEvent="childEvent"></children>
</template>
<script lang="ts" setup>
import children from "./children.vue";
import {
  onMounted,
  onUpdated,
  ref,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";

const test2 = ref<String>("我是初始值");

const childEvent = (val: any) => {
  console.log("接收到子组件的值为：", val);
};

//onBeforeMount 在组件被挂载之前被调用。
onBeforeMount(() => {
  console.log(`onBeforeMount 挂载前 ${test2.value}`);
});

//onMounted 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码
onMounted(() => {
  console.log(`onMounted 挂载后 ${test2.value}`);
});

//onBeforeUpdate 在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
onBeforeUpdate(() => {
  console.log(`onBeforeUpdate 更新前 ${test2.value}`);
});

//onUpdated 在组件因为响应式状态变更而更新其 DOM 树之后调用
onUpdated(() => {
  console.log(`onUpdated 更新后 ${test2.value}`);
});

//onBeforeUnmount 在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
onBeforeUnmount(() => {
  console.log(`onBeforeUnmount 卸载前 ${test2.value}`);
});

//onUnmounted 在组件实例被卸载之后调用。
onUnmounted(() => {
  console.log(`onUnmounted 卸载后 ${test2.value}`);
});

const changeTest = () => {
  test2.value = "我是改变后的值";
};
</script>
<style scoped>
.test2 {
  font-size: 50px;
  color: black;
  padding-top: 100px;
}
</style>
