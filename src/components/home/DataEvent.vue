<template>
    <div>
        <el-select v-model="tempSelect.selected" clearable @change="handleSelect">
            <el-option v-for="(item, index) in tempSelect.items" :key="index" :value="item.value" :label="item.label"/>
        </el-select>
        <el-input v-if="tempSelect.selected === '3'" v-model="tempInput" type="text" placeholder="enter something" clearable @change="handleInputChange"/>
        <el-checkbox-group v-model="checked" @change="handleChecked">
            <el-checkbox v-for="(item, index) in checkItems" :label="item" :key="index">{{item}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    name:"DataEvent",
    data(){
        return{
            tableData: [],
            tempInput: '',
            tempSelect: {
                selected: '',
                items: [
                    { id: 0, value: '1', label: 'option 1'},
                    { id: 1, value: '2', label: 'option 2'},
                    { id: 2, value: '3', label: 'option 3'}

                ]
            },
            checked: [],
            checkItems: [
                    "1", "2", "3"

                ]
            
        }
    },
    methods: {
        handleInputChange() {
            console.log(this.tempInput)
        },
        handleSelect() {
            console.log(this.tempSelect.selected)
        },
        handleChecked() {
            console.log(this.checked)
        }
    }
    
}
</script>

<style>

</style>