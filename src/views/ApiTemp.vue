<template>
    <div class="api_temp">
        <div class="obj_menuBtn">
            <ul class="leftMenu">
                <li class="obj_Apibtn1"></li>
                <li class="obj_Apibtn2"></li>
                <li class="obj_Apibtn3"></li>
                <li class="obj_Apibtn4"></li>
            </ul>
        </div>
        <div class="apiBox">請輸入資料</div>
    </div>
</template>

<script>
export default {
    name:"apiTemp",
    data(){
        return{
            tableData: []
        }
    },
    
    created(){
        this.packageGetData()
    },
    
    methods:{
        async packageGetData() {
        const source = 'http://localhost:3000/tableData'
        let res = await this.$api.get(source)
        this.tableData = [...res]
        console.log(res)
        }
    }
}
</script>

<style>

</style>