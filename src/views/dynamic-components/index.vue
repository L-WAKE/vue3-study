<template>
  <div class="father">父组件</div>
  <template v-if="lowReactive.componentList.length > 0">
    <template v-for="(item, index) in lowReactive.componentList" :key="index+'i'">
      <component :is="item"></component>
    </template>
  </template>

  <component :is="childrenComponent"></component>
</template>

<script lang="ts" setup>
import { ref, shallowRef, reactive, shallowReactive } from 'vue'

import children from './components/content.vue'
console.log('children', children)

const lowReactive = shallowReactive({ componentList: [] })
const childrenComponent = shallowRef(children)

const componentList = []
const modules = import.meta.glob('./components/**/*.vue', { eager: true, import: 'default' })
Object.keys(modules).forEach(key => {
  const mod = modules[key] || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  componentList.push(...modList)
})
componentList.length > 0 && componentList.forEach(item => lowReactive.componentList.push(item))

console.log('modules', modules)
console.log('componentList', componentList)
console.log('lowReactive.componentList', lowReactive.componentList)


</script>
<style scoped>
.father {
  width: 100%;
  color: yellow;
  font-size: 40px;
  text-align: center;
}
</style>