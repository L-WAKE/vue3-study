<template>
  <div class="hanlde-sign">
    <vue-esign
      class="esign"
      ref="templateRef"
      :width="800"
      :height="300"
      :lineWidth="4"
      lineColor="red"
    />
    <img style="border: dashed 2px #dadada;margin-top:50px" width="800" height="300" :src="mineImg" />
    <button @click="handleReset">清空画板</button>
    <button @click="handleGenerate">生成图片并保存</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue"
const templateRef = ref<any>(null)
let mineImg = ref<any>(null)

//清空画布
const handleReset = () => {
  templateRef.value.reset()
}

//生成图片并保存
const handleGenerate = () => {
  templateRef.value
    .generate()
    .then((res: any) => {
      mineImg.value = res
      downloadIamge(res, "签名")
    })
    .catch((err: any) => {
      console.log(err)
    })
}
const downloadIamge = (imgSrc: string, fileName: string) => {
  let alink = document.createElement("a")
  alink.href = imgSrc
  alink.download = fileName
  alink.click()
}

/*  属性	类型	默认值	说明
    width	Number	800	画布宽度，即导出图片的宽度
    height	Number	300	画布高度，即导出图片的高度
    lineWidth	4	Number	画笔粗细
    lineColor	String	#000000	画笔颜色
    bgColor	String	空	画布背景色，为空时画布背景透明，
    支持多种格式 '#ccc'，'#E5A1A1'，'rgb(229, 161, 161)'，'rgba(0,0,0,.6)'，'red'
    isCrop	Boolean	false	是否裁剪，在画布设定尺寸基础上裁掉四周空白部分
*/
</script>
<style scoped lang="scss">
.esign {
  border: dashed 2px #dadada;
}
</style>
