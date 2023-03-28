<template>
  <!-- 主要讲监听器、计算属性 watch, watchEffect, computed-->

  <input
    type="text"
    v-model="state.Account"
    placeholder="请输入账号"
    name="username"
  />
  <input
    type="text"
    v-model="state.Password"
    placeholder="请输入密码"
    name="password"
  />
  <button @click.prevent="handleRegister()">登录</button>
  <br />
  <p>--------------------------------------------------------</p>
  <br />
  <span>我是{{ msg }}</span>
  <button @click.prevent="changeMsg()">监听单个ref数据</button>
  <br />
  <p>----------------------------监听器----------------------------</p>
  <br />
  <p>我是{{ userInfo.name }}</p>
  <p>今年{{ userInfo.age }}岁了</p>
  <button @click.prevent="changeReactive()">监听reactive数据</button>
  <br />
  <p>-----------------------------计算属性---------------------------</p>
  <br />
  <p>{{ publishedBooksMessage }}---------------{{ computName.arrStr }}</p>
  <button @click.prevent="computedN()">计算属性</button>
</template>
<style scoped></style>
<script lang="ts" setup>
import { UserService } from "../../api/user";
import { reactive, ref, watch, watchEffect, computed } from "vue";

interface CompuName {
  arrName: object;
  arrStr: string;
}
let computName = reactive<CompuName>({
  arrName: { name: "computed" },
  arrStr: "李四",
});
// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return computName.arrStr == "张三" ? "Yes" : "No";
});
const computedN = () => {
  computName.arrStr = "张三";
};

/*监听改变单个数据*/
let msg = ref<string>("张三");
const changeMsg = () => {
  msg.value = "李四";
};
watch(
  msg,
  (newValue, oldValue) => {
    console.log("watchmsg===", newValue, oldValue);
  },
  { immediate: true }
);

/*监听改变多个数据*/
interface UserInfo {
  name: string;
  age: number;
}
let userInfo = reactive<UserInfo>({
  name: "张三",
  age: 10,
});
const changeReactive = () => {
  userInfo.name = "隔壁老王";
  userInfo.age = 18;
  msg.value = "王五";
};
// 监听整个对象
watch(
  userInfo,
  (newValue, oldValue) => {
    console.log("userInfo newValue", newValue);
    console.log("userInfo oldValue", oldValue);
    // 注意：`newValue` 此处和 `oldValue` 是相等的 因为它们是同一个对象！
  },
  { deep: true }
);
// 监听某个属性
watch(
  () => userInfo.name,
  (newValue, oldValue) => {
    console.log("watch name", newValue, oldValue);
  }
);
// 同时监听name和userInfo的age属性
watch([msg, () => userInfo.age], ([newmsg, newage], [oldmsg, oldage]) => {
  console.log("newmsg", newmsg);
  console.log("newage", newage);
  console.log("oldmsg", oldmsg);
  console.log("oldage", oldage);
});
watchEffect(() => {
  console.log("watchEffect msg", msg.value);
  console.log("watchEffect userInfo.name", userInfo.name);
});

const state = reactive({
  Account: "", //账户
  Password: "", //密码
});
const handleRegister = async () => {
  const loginParams = {
    username: state.Account,
    password: state.Password,
  };
  const res = await UserService.login(loginParams);
  console.log("res", res);
};
</script>
