<template>
  <p class="home">这是首页</p>
  <template v-for="item in templateDatas.routerList" :key="item.path">
    <el-button type="primary" @click="router.push(item.path)">{{ item.name }}</el-button>
  </template>
  <br />
  <p>----------------------------分割线---------------------</p>
  <ul>
    <template v-for="item in templateDatas.testFor" :key="item.id">
      <li v-if="!item.done">
        <span>{{ item.task }}</span>
      </li>
    </template>
  </ul>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const templateDatas = reactive({
  routerList: [],
  testFor: [
    {
      id: 0,
      task: "吃饭",
      done: true,
    },
    {
      id: 1,
      task: "睡觉",
      done: false,
    },
    {
      id: 2,
      task: "洗澡",
      done: true,
    },
  ],
});
onMounted(() => {
  let routes: any = [];
  routes = router?.options?.routes ?? [];
  routes.forEach((item) => {
    if (item.name) {
      templateDatas.routerList.push({
        path: item.path,
        name: item.name,
      });
    }
  });
  console.log("router", route, router);
  console.log("routerList", templateDatas.routerList);
});
// console.log(import.meta.env)
</script>
<style scoped>
.home {
  font-size: 50px;
  color: black;
  padding-top: 100px;
}
</style>
