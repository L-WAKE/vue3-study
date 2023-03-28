<template>
    <div class="drag-table">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
    <div>
        <!-- <div class="color-item" v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
            :key="color.text">{{color.text}}</div> -->

        <draggable v-model="dragReactive.myArray" group="people" @start="dragReactive.drag=true"
            @end="dragReactive.drag=false" item-key="id">
            <template #item="{element}">
                <div>{{element.name}}</div>
            </template>
        </draggable>
    </div>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>
</template>
<script setup lang="ts">
import draggable from 'vuedraggable'
import { reactive } from 'vue'

const dragReactive = reactive({
    myArray: [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ],
    drag: false
})

const colors = [{
    text: "Aquamarine"
}, {
    text: "Hotpink"
}, {
    text: "Gold"
}, {
    text: "Crimson"
}, {
    text: "Blueviolet"
}, {
    text: "Lightblue"
}, {
    text: "Cornflowerblue"
}, {
    text: "Skyblue"
}, {
    text: "Burlywood"
}]
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>
<style scoped>
.drag-table {
    width: 100%;
    height: 500px;
}
</style>