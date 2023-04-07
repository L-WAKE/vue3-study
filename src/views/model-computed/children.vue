<template>
  <div class="children">子组件</div>
  <el-form :inline="true" :model="props.modelVal" class="demo-form-inline">
    <el-form-item label="用户名">
      <el-input v-model="props.modelVal.user" placeholder="Approved by" />
    </el-form-item>
    <el-form-item label="来源地">
      <el-select v-model="props.modelVal.region" placeholder="Activity zone">
        <el-option label="上海" value="shanghai" />
        <el-option label="北京" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const props = defineProps({
  modelVal: {
    type: Object,
    require: true,
  },
});
const onSubmit = () => {
  console.log("props!", props.modelVal);
};
</script>
<style scoped lang="scss"></style>
