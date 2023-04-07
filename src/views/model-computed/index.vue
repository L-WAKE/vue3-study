<template>
  <div class="father">父组件</div>
  <el-button type="primary" @click="fatherCilck">父组件查询</el-button>
  <div>===========================================</div>
  <Children :modelVal="templateDatas.childFrom"></Children>
</template>
<script lang="ts" setup>
import Children from "./children.vue";
import { reactive } from "vue";

const templateDatas = reactive({
  childFrom: {
    user: "张三",
    region: "beijing",
  },
});

const fatherCilck = () => {
  console.log("templateDatas.childFrom", templateDatas.childFrom);
};
</script>
<style scoped lang="scss"></style>
